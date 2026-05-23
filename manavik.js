/**
 * Vasuki Contextual AI Text Humanizer Engine (V3.0-Enterprise)
 * 
 * Optimized For:
 * 1. Perplexity Diversification: Infuses unpredictable vocabulary distributions.
 * 2. Burstiness Restructuring: Mandates high variance in sentence length and rhythm.
 * 3. Low-Level Pattern Destruction: Dissolves robotic bigram anchors and passive sequences.
 */
const Vasuki = (() => {
  
  // Enterprise-Grade Linguistic Translation Matrix
  const LINGUISTIC_MATRIX = {
    transitions: [
      { regex: /\bfurthermore\b/gi, choices: ["what's more,", "plus,", "on top of that,", "honestly, another thing is"] },
      { regex: /\bmoreover\b/gi, choices: ["also,", "not to mention,", "alongside this,", "plus,"] },
      { regex: /\bin conclusion\b/gi, choices: ["all in all,", "in short,", "basically,", "when you look at it,"] },
      { regex: /\btherefore\b/gi, choices: ["so,", "because of this,", "that's why,", "essentially,"] },
      { regex: /\bconsequently\b/gi, choices: ["as a result,", "so naturally,", "which means,"] },
      { regex: /\badditionally\b/gi, choices: ["on another note,", "also,", "then there's the fact that"] },
      { regex: /\bhowever\b/gi, choices: ["but,", "yet,", "though,", "that said,", "mind you,"] }
    ],
    aiBigrams: [
      { regex: /\bunprecedented efficiency\b/gi, choices: ["serious speed", "insane efficiency", "a whole new level of speed", "massive speed gains"] },
      { regex: /\bmassive datasets\b/gi, choices: ["ton of data", "huge piles of data", "massive amounts of info", "piles of telemetry"] },
      { regex: /\bpresent reality\b/gi, choices: ["world right now", "everyday lives", "current landscape"] },
      { regex: /\bpattern recognition\b/gi, choices: ["spotting trends", "finding patterns", "reading the data trends"] },
      { regex: /\btechnical architectures\b/gi, choices: ["setups", "technical setups", "internal systems", "infrastructure layout"] },
      { regex: /\bdistributed cloud environments\b/gi, choices: ["cloud setups", "spread-out cloud networks", "decentralized infrastructure"] },
      { regex: /\bmodern software frameworks\b/gi, choices: ["modern apps", "current tech stacks", "modern tooling architectures"] },
      { regex: /\bhuman ingenuity\b/gi, choices: ["human brainpower", "actual human thinking", "real human creativity"] },
      { regex: /\bheavy lifting of execution\b/gi, choices: ["boring busywork", "grunt work", "heavy lifting", "operational churn"] },
      { regex: /\bpure innovation\b/gi, choices: ["cool new things", "actual innovation", "creative breakthroughs"] },
      { regex: /\bat its core\b/gi, choices: ["deep down", "basically", "when you strip it back,", "fundamentally"] }
    ],
    verbsAndQualifiers: [
      { regex: /\butilize\b/gi, choices: ["use", "leverage", "deploy"] },
      { regex: /\butilizing\b/gi, choices: ["using", "applying", "working with", "running"] },
      { regex: /\bin order to\b/gi, choices: ["to", "for", "so we can"] },
      { regex: /\btestament to\b/gi, choices: ["proof of", "clear sign of", "living proof of"] },
      { regex: /\bdelve into\b/gi, choices: ["look into", "dive into", "explore", "unpack"] },
      { regex: /\bshape our\b/gi, choices: ["drive our", "run our", "mold our"] },
      { regex: /\bprocess information\b/gi, choices: ["crunch numbers", "handle data", "parse inputs"] },
      { regex: /\bit is important to note that\b/gi, choices: ["keep in mind,", "worth noting that,", "look,", "note that,", "let's be clear:"] },
      { regex: /\bit is crucial to\b/gi, choices: ["we need to", "you have to", "it's vital to", "we absolutely must"] }
    ],
    contractions: [
      { regex: /\bit is\b/gi, replacement: "it's" },
      { regex: /\bdoes not\b/gi, replacement: "doesn't" },
      { regex: /\bcannot\b/gi, replacement: "can't" },
      { regex: /\bdo not\b/gi, replacement: "don't" },
      { regex: /\bwill not\b/gi, replacement: "won't" },
      { regex: /\bthat is\b/gi, replacement: "that's" }
    ]
  };

  /**
   * Helper to accurately match and maintain linguistic casing matrix patterns.
   */
  const enforceCasing = (original, replacement) => {
    if (original === original.toUpperCase()) return replacement.toUpperCase();
    if (original[0] === original[0].toUpperCase()) {
      return replacement.charAt(0).toUpperCase() + replacement.slice(1);
    }
    return replacement.toLowerCase();
  };

  /**
   * Evaluates text contextually to inject organic, human humanizing elements.
   * Breaks up monotonous synthetic layouts.
   */
  const processLinguisticMatrix = (text, matrixCategory, intensity) => {
    let internalText = text;
    matrixCategory.forEach(rule => {
      internalText = internalText.replace(rule.regex, (match) => {
        if (Math.random() > intensity) return match;
        
        if (rule.replacement) {
          return enforceCasing(match, rule.replacement);
        }
        
        const choices = rule.choices;
        const selected = choices[Math.floor(Math.random() * choices.length)];
        return enforceCasing(match, selected);
      });
    });
    return internalText;
  };

  /**
   * Main Engine Transformation Core
   * @param {string} text - Raw syntactic payload input.
   * @param {Object} options - Configuration adjustments.
   * @param {number} options.intensity - Randomization and substitution depth boundary (0.0 - 1.0).
   * @param {boolean} options.aggressiveBurstiness - Forces asymmetric sentence fragmentation patterns.
   * @param {boolean} options.injectPhoneticAnchors - Allows conversational hedging and processing markers.
   */
  const humanize = (text, options = {}) => {
    const config = {
      intensity: 0.95,
      aggressiveBurstiness: true,
      injectPhoneticAnchors: true,
      ...options
    };

    if (!text || typeof text !== 'string') return '';

    let workingText = text;

    // Pass 1: Destructure Static Mathematical Syntax Elements (AI Signatures)
    workingText = workingText.replace(/;\s*/g, '. ');
    workingText = workingText.replace(/\s*—\s*/g, ', meaning ');

    // Pass 2: Map and Translate Known Static High-Probability AI Clusters
    workingText = processLinguisticMatrix(workingText, LINGUISTIC_MATRIX.transitions, config.intensity);
    workingText = processLinguisticMatrix(workingText, LINGUISTIC_MATRIX.aiBigrams, config.intensity);
    workingText = processLinguisticMatrix(workingText, LINGUISTIC_MATRIX.verbsAndQualifiers, config.intensity);
    workingText = processLinguisticMatrix(workingText, LINGUISTIC_MATRIX.contractions, config.intensity);

    // Pass 3: Sentence Fragment Splitting & Asymmetric Restructuring
    let sentences = workingText.split(/(?<=[.!?])\s+/);
    let fullyHumanizedPayload = [];
    let previousSentenceLength = 0;

    sentences.forEach((sentence, index) => {
      sentence = sentence.trim();
      if (!sentence) return;

      // Unpack and inverse passive structural opening configurations ("From X to Y...")
      if (sentence.toLowerCase().startsWith("from ") && sentence.includes(",")) {
        const commaIndex = sentence.indexOf(",");
        const introductoryClause = sentence.substring(0, commaIndex).trim();
        const mainStructuralClause = sentence.substring(commaIndex + 1).trim();
        
        if (Math.random() < config.intensity) {
          const capitalizedLead = mainStructuralClause.charAt(0).toUpperCase() + mainStructuralClause.slice(1);
          sentence = `${capitalizedLead} ${introductoryClause.toLowerCase()}`;
        }
      }

      let tokens = sentence.split(/\s+/);

      // Asymmetric Burstiness Control: If the system detects long strings, force aggressive splitting patterns
      if (config.aggressiveBurstiness && tokens.length > 12 && Math.random() < config.intensity) {
        const syntaxConnectors = [
          { hook: ", and ", substitute: ". And " },
          { hook: " but ", substitute: ". But " },
          { hook: " while ", substitute: ". While " },
          { hook: ", allowing ", substitute: ". This explicitly allows " },
          { hook: " so we can ", substitute: ". That way we can " },
          { hook: ", which means ", substitute: ". This ultimately means " }
        ];

        for (let route of syntaxConnectors) {
          if (sentence.includes(route.hook)) {
            let localizedSplits = sentence.split(route.hook);
            let rightHandVal = localizedSplits[1].trim();
            rightHandVal = rightHandVal.charAt(0).toUpperCase() + rightHandVal.slice(1);
            sentence = `${localizedSplits[0].trim()}${route.substitute}${rightHandVal}`;
            tokens = sentence.split(/\s+/);
            break;
          }
        }
      }

      // Perplexity Anchoring: Inject organic human processing anomalies based on sentence index flow
      if (config.injectPhoneticAnchors && index % 2 === 0 && tokens.length > 6 && previousSentenceLength > 10) {
        if (Math.random() < (config.intensity * 0.45)) {
          const colloquialAnchors = ["let's be real, ", "honestly, ", "think about it, ", "basically, ", "look, "];
          const chosenAnchor = colloquialAnchors[Math.floor(Math.random() * colloquialAnchors.length)];
          
          if (!sentence.toLowerCase().startsWith(chosenAnchor.replace(/[^a-z]/g, ''))) {
            const downcasedLeadChar = sentence.charAt(0).toLowerCase();
            sentence = chosenAnchor + downcasedLeadChar + sentence.slice(1);
            tokens = sentence.split(/\s+/);
          }
        }
      }

      // Track sentence layout metrics to map variance over time
      previousSentenceLength = tokens.length;
      fullyHumanizedPayload.push(sentence);
    });

    // Pass 4: Sanitize Syntactic Outliers & Space Artifacts
    let cleanOutput = fullyHumanizedPayload.join(' ');
    cleanOutput = cleanOutput.replace(/\s+/g, ' ');           
    cleanOutput = cleanOutput.replace(/\s+([.,!?])/g, '$1');   
    cleanOutput = cleanOutput.replace(/,\s*,/g, ',');          
    cleanOutput = cleanOutput.replace(/\.\s*\./g, '.');        
    cleanOutput = cleanOutput.replace(/:\s*:/g, ':');          

    return cleanOutput;
  };

  return { humanize };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Vasuki;
}

// --- Execution Verification ---
const samplePayload = "This Application Uses Vasuki Manavik for humanizing GPT-generated text.";

console.log(Vasuki.humanize(samplePayload, { intensity: 0.98 }));
