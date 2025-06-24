import axios from 'axios';
import cheerio from 'cherio';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const topic_formattor = (topic) => {
  return topic.replaceAll(" ", "_").replaceAll("(", "").replaceAll(")", "");
};

app.get('/', async (req, res) => {
  const topic = req.query.q;

  if (!topic) {
    return res.send(`
      <h2>Please provide a topic using ?q=your_topic</h2>
      <p>Example: <a href="/?q=Albert Einstein">/?q=Albert Einstein</a></p>
    `);
  }

  const formattedTopic = topic_formattor(topic);
  const url = `https://en.wikipedia.org/wiki/${formattedTopic}`;

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Get images from infobox
    const image0 = $('.infobox img').eq(0).attr('src');
    const image1 = $('.infobox img').eq(1).attr('src');
    const image2 = $('.infobox img').eq(2).attr('src');

    const imageTag0 = image0
      ? `<img src="https:${image0}" style="max-width:300px; margin-right: 20px;" />`
      : '<p><i>No image found</i></p>';

    const imageTag1 = image1
      ? `<img src="https:${image1}" style="max-width:300px; margin-right: 20px;" />`
      : '';

    const imageTag2 = image2
      ? `<img src="https:${image2}" style="max-width:300px; margin-right: 20px;" />`
      : '';

    // Get first 2-3 meaningful paragraphs before headings
    const paragraphs = [];
    $('#mw-content-text .mw-parser-output > p').each((i, el) => {
      const text = $(el).text().trim();
      if (text && text.length > 50) paragraphs.push(`<p>${$(el).html()}</p>`);
      if (paragraphs.length >= 3) return false;
    });

    const intro = paragraphs.join("\n") || "<p>No introduction found.</p>";
    for (let i = 0; i < 100; i++ ) {
        intro.replaceAll(`[${i}]`,'')
    }

    res.send(`
      <html>
        <head>
          <title>${topic}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; max-width: 900px; margin: auto; }
            .images img { float: left; margin: 10px; border-radius: 10px; }
            .info p { margin-left: 0; padding-top: 10px; }
            .clear { clear: both; }
            h1 { color: #333; text-transform: capitalize; }
          </style>
        </head>
        <body>
          <h1>${topic.replaceAll("_", " ")}</h1>
          <div class="images">
            ${imageTag0}
            ${imageTag1}
            ${imageTag2}
          </div>
          <div class="info">
            ${intro.replaceAll('<a', '<span').replaceAll('</a>', '</span>')}
          </div>
          <div class="clear"></div>
        </body>
      </html>
    `);
  } catch (error) {
    res.send(`<h2>Error fetching Wikipedia page.</h2><pre>${error}</pre>`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
