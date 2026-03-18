export interface EducationalResourceSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface EducationalResourceItem {
  slug: string;
  title: string;
  description: string;
  sections: EducationalResourceSection[];
}

export const educationalResources: EducationalResourceItem[] = [
  {
    slug: "why-quality-supervision-matters",
    title: "Why Quality Supervision Matters in Behavior Analysis",
    description:
      "Understand why high-quality supervision is essential for building ethical, effective, and independent behavior-analytic practice.",
    sections: [
      {
        title: "Why Quality Supervision Matters in Behavior Analysis",
        paragraphs: [
          "Supervision is more than a requirement to accumulate hours. It is the primary mechanism through which developing behavior analysts learn how to apply skills ethically, effectively, and independently.",
          "Research and professional experience consistently show that simply completing supervision hours does not guarantee competence. Trainees who receive limited feedback, inconsistent observation, or minimal performance-based guidance may technically meet hour requirements while still lacking critical clinical skills.",
          "Effective supervision protects clients, supports trainees, and strengthens the profession as a whole.",
        ],
        bullets: [
          "Direct observation of practice",
          "Specific, timely feedback",
          "Opportunities to rehearse and refine skills",
          "Ongoing evaluation of performance, not just participation",
        ],
      },
    ],
  },
  {
    slug: "common-challenges-in-bcba-supervision",
    title: "Common Challenges in BCBA Supervision",
    description:
      "Explore the practical barriers that can reduce supervision quality, even when both supervisors and trainees have good intentions.",
    sections: [
      {
        title: "Common Challenges in BCBA Supervision",
        paragraphs: [
          "Many trainees and supervisors face barriers that make effective supervision difficult, even with good intentions.",
          "Common challenges include limited access to supervisors, especially in rural or underserved areas; time constraints that reduce opportunities for direct observation; and reliance on indirect supervision methods that do not capture real-world performance.",
          "In some cases, supervision becomes checklist-driven rather than competency-driven. When supervision focuses primarily on logging hours or completing forms, meaningful skill development can be lost.",
          "Recognizing these challenges is the first step toward improving supervision quality and outcomes.",
        ],
      },
    ],
  },
  {
    slug: "supervision-is-about-competence-not-just-hours",
    title: "Supervision Is About Competence, Not Just Hours",
    description:
      "Learn why competency-based supervision focuses on sustained professional growth rather than only completed hours.",
    sections: [
      {
        title: "Supervision Is About Competence, Not Just Hours",
        paragraphs: [
          "While supervision hours are required, hours alone are not the goal. The purpose of supervision is to develop professional competence.",
          "Competency-based supervision emphasizes performance over time, rather than isolated observations or one-time evaluations. This approach allows supervisors to track growth, identify patterns, and provide targeted guidance where it is most needed.",
        ],
        bullets: [
          "Apply behavioral principles accurately",
          "Make sound clinical decisions",
          "Respond effectively to client needs",
          "Accept and integrate feedback",
          "Demonstrate ethical judgment",
        ],
      },
    ],
  },
  {
    slug: "the-role-of-video-in-effective-supervision",
    title: "The Role of Video in Effective Supervision",
    description:
      "See how video-based supervision improves access, observation, reflection, and the quality of trainee feedback.",
    sections: [
      {
        title: "The Role of Video in Effective Supervision",
        paragraphs: [
          "Video-based supervision has become an important tool for improving access and quality, particularly when in-person observation is limited.",
          "Video allows supervisors to observe real practice across settings and times that may not be feasible live. It also enables more detailed review, as supervisors can pause, replay, and annotate specific moments in a session.",
          "Video does not replace live supervision, but it meaningfully enhances supervision by expanding opportunities for observation and feedback.",
        ],
        bullets: [
          "More accurate feedback",
          "Greater consistency in evaluation",
          "Increased opportunities for reflection",
          "Ongoing skill development between live meetings",
        ],
      },
    ],
  },
  {
    slug: "live-vs-asynchronous-supervision-understanding-the-difference",
    title: "Live vs Asynchronous Supervision: Understanding the Difference",
    description:
      "Compare live and asynchronous supervision methods and understand why strong programs often combine both.",
    sections: [
      {
        title: "Live vs Asynchronous Supervision: Understanding the Difference",
        paragraphs: [
          "Live supervision allows supervisors to provide immediate feedback and respond in real time. It is particularly valuable for modeling, in-the-moment coaching, and complex decision-making.",
          "Asynchronous supervision, such as video review, allows for deeper analysis and more thoughtful feedback. It gives both supervisors and trainees time to reflect and prepare responses.",
          "Effective supervision programs often combine both approaches. Using multiple supervision methods helps ensure that feedback is timely, specific, and grounded in actual performance.",
        ],
      },
    ],
  },
  {
    slug: "why-feedback-quality-matters",
    title: "Why Feedback Quality Matters",
    description:
      "Understand how specific, behavior-focused feedback supports meaningful learning and stronger clinical performance.",
    sections: [
      {
        title: "Why Feedback Quality Matters",
        paragraphs: [
          "Feedback is one of the most powerful components of supervision. However, not all feedback leads to improvement.",
          "General comments such as 'good job' or 'needs improvement' provide limited guidance. In contrast, targeted feedback tied to specific behaviors supports meaningful learning and skill refinement.",
          "High-quality feedback helps trainees understand not only what to change, but why those changes matter.",
        ],
        bullets: [
          "Specific rather than general",
          "Focused on observable behavior",
          "Delivered consistently over time",
          "Connected to clear expectations",
        ],
      },
    ],
  },
  {
    slug: "moving-beyond-passive-learning-in-supervision",
    title: "Moving Beyond Passive Learning in Supervision",
    description:
      "Discover why active supervision, practice, and reflection build stronger skills than passive discussion alone.",
    sections: [
      {
        title: "Moving Beyond Passive Learning in Supervision",
        paragraphs: [
          "Supervision is most effective when trainees are active participants in their learning.",
          "Passive supervision—such as reviewing documents without observation or relying solely on discussion—may limit opportunities for skill acquisition. Active supervision incorporates observation, practice, feedback, and reflection.",
          "Competency develops through repeated opportunities to perform skills, receive feedback, and apply that feedback in future sessions. Supervision models that emphasize active learning are better aligned with how professional skills are actually acquired.",
        ],
      },
    ],
  },
  {
    slug: "distance-supervision-benefits-and-considerations",
    title: "Distance Supervision: Benefits and Considerations",
    description:
      "Review the benefits of distance supervision and the structure needed to keep it effective and ethical.",
    sections: [
      {
        title: "Distance Supervision: Benefits and Considerations",
        paragraphs: [
          "Distance supervision has expanded access to qualified supervisors and reduced geographic barriers. It can be particularly beneficial for trainees in underserved or remote areas.",
          "However, distance supervision requires thoughtful structure to remain effective. Clear expectations, regular observation, and consistent communication are essential.",
          "When implemented carefully, distance supervision can support high-quality learning while maintaining professional and ethical standards.",
        ],
      },
    ],
  },
  {
    slug: "what-effective-supervision-looks-like-in-practice",
    title: "What Effective Supervision Looks Like in Practice",
    description:
      "See the practical behaviors and structures that make supervision intentional, responsive, and developmentally useful.",
    sections: [
      {
        title: "What Effective Supervision Looks Like in Practice",
        paragraphs: [
          "Effective supervision is intentional, structured, and responsive to the trainee’s development.",
          "For trainees, effective supervision involves active engagement, openness to feedback, and ongoing reflection on practice.",
        ],
        bullets: [
          "Observe performance regularly",
          "Provide clear, behavior-specific feedback",
          "Monitor progress over time",
          "Adjust supervision strategies as skills develop",
          "Support both technical competence and professional judgment",
        ],
      },
    ],
  },
  {
    slug: "using-educational-resources-responsibly",
    title: "Using Educational Resources Responsibly",
    description:
      "Know the limits of educational resources and why they should support, not replace, formal supervision and professional judgment.",
    sections: [
      {
        title: "Using Educational Resources Responsibly",
        paragraphs: [
          "Educational Resources are designed to support understanding and best practices, not to replace formal supervision requirements or professional judgment.",
          "Supervision expectations and standards may vary based on credentialing bodies, jurisdictions, and individual programs. Trainees and supervisors should always ensure their supervision practices align with applicable professional and regulatory guidelines.",
        ],
      },
    ],
  },
  {
    slug: "differential-reinforcement-and-shaping-supporting-skill-development",
    title: "Differential Reinforcement and Shaping: Supporting Skill Development",
    description:
      "Learn how shaping and differential reinforcement support skill development through successive approximations and clinical judgment.",
    sections: [
      {
        title: "Differential Reinforcement and Shaping: Supporting Skill Development",
        paragraphs: [
          "Differential reinforcement and shaping are foundational behavior-analytic strategies used to build new skills by reinforcing successive improvements toward a target behavior.",
          "Rather than waiting for a learner to demonstrate a complete skill independently, shaping reinforces smaller steps that move performance closer to the desired outcome.",
          "Effective use of differential reinforcement demonstrates clinical judgment, timing, and consistency—skills that develop through practice and feedback, not checklists.",
        ],
        bullets: [
          "Identifies appropriate approximation behaviors",
          "Delivers reinforcement contingent on improvement",
          "Avoids reinforcing unrelated or interfering behavior",
          "Gradually raises expectations as skill improves",
        ],
      },
    ],
  },
  {
    slug: "what-supervisors-look-for-during-shaping-procedures",
    title: "What Supervisors Look for During Shaping Procedures",
    description:
      "Understand the decision-making indicators supervisors evaluate during shaping and reinforcement procedures.",
    sections: [
      {
        title: "What Supervisors Look for During Shaping Procedures",
        paragraphs: [
          "When supervising shaping and differential reinforcement, supervisors are typically focused on decision-making, not just outcomes.",
        ],
        bullets: [
          "Clear identification of the target behavior",
          "Appropriate selection of reinforcement",
          "Responsiveness to learner behavior in real time",
          "Gradual progression toward the terminal skill",
          "Maintenance of instructional control without escalation",
        ],
      },
    ],
  },
  {
    slug: "collecting-and-graphing-behavioral-data-why-accuracy-matters",
    title: "Collecting and Graphing Behavioral Data: Why Accuracy Matters",
    description:
      "Explore why accurate data collection and graphing are central to sound clinical decisions in behavior analysis.",
    sections: [
      {
        title: "Collecting and Graphing Behavioral Data: Why Accuracy Matters",
        paragraphs: [
          "Data collection is central to behavior analysis, but the quality of data depends on how it is gathered and interpreted.",
          "Graphing data allows supervisors and trainees to visualize patterns, evaluate intervention effectiveness, and make informed clinical decisions. Errors in data collection or graphing can obscure meaningful trends and lead to incorrect conclusions.",
        ],
        bullets: [
          "Clear operational definitions",
          "Consistent observation",
          "Accurate recording of responses",
          "Awareness of contextual variables",
        ],
      },
    ],
  },
  {
    slug: "common-challenges-in-data-collection-during-supervision",
    title: "Common Challenges in Data Collection During Supervision",
    description:
      "Identify common trainee difficulties in data collection and how supervision addresses them early.",
    sections: [
      {
        title: "Common Challenges in Data Collection During Supervision",
        paragraphs: [
          "Trainees often struggle with several practical issues during data collection and graphing.",
          "Supervision focuses on identifying these challenges early and providing opportunities for guided practice, review, and corrective feedback.",
        ],
        bullets: [
          "Recording responses while managing instruction",
          "Distinguishing between correct, incorrect, and no responses",
          "Maintaining attention during high rates of behavior",
          "Graphing data accurately and consistently",
        ],
      },
    ],
  },
  {
    slug: "antecedent-control-strategies-behavioral-momentum",
    title: "Antecedent Control Strategies: Behavioral Momentum",
    description:
      "Learn how behavioral momentum works as a proactive antecedent strategy to support compliance and engagement.",
    sections: [
      {
        title: "Antecedent Control Strategies: Behavioral Momentum",
        paragraphs: [
          "Antecedent control strategies modify the environment or instructional context before a behavior occurs to increase the likelihood of compliance and success.",
          "Behavioral momentum involves presenting a series of high-probability requests before a lower-probability request. This approach builds engagement and reduces resistance by establishing a pattern of responding.",
          "Effective behavioral momentum reflects planning and sensitivity to learner behavior rather than reliance on reactive strategies.",
        ],
        bullets: [
          "Identify appropriate high-probability tasks",
          "Sequence requests effectively",
          "Deliver instructions clearly and consistently",
          "Monitor learner engagement throughout the sequence",
        ],
      },
    ],
  },
  {
    slug: "using-pre-corrects-to-support-compliance",
    title: "Using Pre-Corrects to Support Compliance",
    description:
      "Understand how pre-corrects prepare learners for expectations before problem behavior occurs.",
    sections: [
      {
        title: "Using Pre-Corrects to Support Compliance",
        paragraphs: [
          "Pre-corrects are proactive statements or prompts delivered before a challenging transition or expectation.",
          "Rather than responding after problem behavior occurs, pre-corrects help learners anticipate what is expected and prepare for upcoming demands. When used effectively, pre-corrects reduce confusion and increase compliance.",
          "Pre-corrects are most effective when paired with reinforcement and clear follow-up expectations.",
        ],
        bullets: [
          "Deliver pre-corrects at appropriate times",
          "Use clear, concise language",
          "Allow adequate processing time",
          "Follow through consistently",
        ],
      },
    ],
  },
  {
    slug: "conducting-preference-assessments-purpose-and-best-practices",
    title: "Conducting Preference Assessments: Purpose and Best Practices",
    description:
      "Review how mini pair-wise preference assessments support data-informed reinforcer decisions.",
    sections: [
      {
        title: "Conducting Preference Assessments: Purpose and Best Practices",
        paragraphs: [
          "Preference assessments are used to identify stimuli that may function as effective reinforcers.",
          "Mini pair-wise preference assessments present options systematically and allow the learner to choose between items. These assessments support data-informed reinforcement decisions rather than assumptions about preference.",
        ],
        bullets: [
          "Neutral presentation of items",
          "Allowing adequate time for selection",
          "Avoiding prompting or bias",
          "Observing patterns across trials",
        ],
      },
    ],
  },
  {
    slug: "prompting-and-prompt-fading-building-independence",
    title: "Prompting and Prompt Fading: Building Independence",
    description:
      "See how prompting and systematic fading help learners build skills without creating prompt dependency.",
    sections: [
      {
        title: "Prompting and Prompt Fading: Building Independence",
        paragraphs: [
          "Prompting supports skill acquisition by providing assistance when a learner cannot yet perform a task independently. Prompt fading ensures that support is gradually removed to avoid prompt dependency.",
        ],
        bullets: [
          "Selecting the least intrusive prompt likely to be effective",
          "Monitoring learner responsiveness",
          "Systematically reducing support",
          "Reinforcing independent responding",
        ],
      },
    ],
  },
  {
    slug: "common-prompting-errors-observed-in-supervision",
    title: "Common Prompting Errors Observed in Supervision",
    description:
      "Review the most common prompting mistakes supervisors identify and correct through modeling and feedback.",
    sections: [
      {
        title: "Common Prompting Errors Observed in Supervision",
        paragraphs: [
          "During supervision, common issues are often identified and addressed through observation, modeling, feedback, and repeated practice.",
        ],
        bullets: [
          "Providing prompts too quickly",
          "Failing to fade prompts systematically",
          "Using inconsistent prompt hierarchies",
          "Reinforcing prompted responses without reinforcing independence",
        ],
      },
    ],
  },
  {
    slug: "why-structured-skill-demonstrations-are-used-in-supervision",
    title: "Why Structured Skill Demonstrations Are Used in Supervision",
    description:
      "Understand why structured skill demonstrations help supervisors evaluate visible competence and decision-making.",
    sections: [
      {
        title: "Why Structured Skill Demonstrations Are Used in Supervision",
        paragraphs: [
          "Structured skill demonstrations allow supervisors to observe specific competencies under controlled conditions. These demonstrations help isolate key decision points and ensure that trainees can apply strategies correctly before working in more complex, naturalistic settings.",
          "The goal is not perfection, but visibility—allowing supervisors to see how trainees think, respond, and adapt in real time.",
        ],
      },
    ],
  },
  {
    slug: "what-supervisors-are-evaluating-during-skill-demonstrations",
    title: "What Supervisors Are Evaluating During Skill Demonstrations",
    description:
      "Explore the process-focused areas supervisors evaluate during structured skill demonstrations.",
    sections: [
      {
        title: "What Supervisors Are Evaluating During Skill Demonstrations",
        paragraphs: [
          "During structured supervision activities, supervisors are not simply checking whether a task is completed. They are evaluating how a supervisee applies behavior-analytic principles under varying conditions.",
          "Supervision emphasizes process, not just outcome.",
        ],
        bullets: [
          "Instructional clarity",
          "Responsiveness to learner behavior",
          "Consistency of implementation",
          "Appropriate use of reinforcement",
          "Ability to remain neutral during non-target behavior",
        ],
      },
    ],
  },
  {
    slug: "evaluating-antecedent-control-strategies-in-practice",
    title: "Evaluating Antecedent Control Strategies in Practice",
    description:
      "See how supervisors assess timing, sequencing, and proactive instruction during antecedent control procedures.",
    sections: [
      {
        title: "Evaluating Antecedent Control Strategies in Practice",
        paragraphs: [
          "Antecedent control strategies, such as behavioral momentum and pre-corrects, are evaluated based on timing, sequencing, and clarity.",
          "Effective antecedent control reflects planning and foresight, not improvisation.",
        ],
        bullets: [
          "Delivers instructions proactively rather than reactively",
          "Selects appropriate high-probability tasks",
          "Maintains engagement across task sequences",
          "Avoids escalating demands unnecessarily",
          "Follows through consistently once expectations are set",
        ],
      },
    ],
  },
  {
    slug: "supervising-behavioral-momentum-implementation",
    title: "Supervising Behavioral Momentum Implementation",
    description:
      "Learn what supervisors watch for when evaluating how behavioral momentum is sequenced and maintained.",
    sections: [
      {
        title: "Supervising Behavioral Momentum Implementation",
        paragraphs: [
          "When behavioral momentum is used, supervisors attend to how the supervisee builds instructional flow.",
          "Strong implementation is characterized by smooth transitions and minimal disruption, even when learner behavior fluctuates.",
        ],
        bullets: [
          "How tasks are sequenced",
          "Whether momentum is maintained",
          "How disengagement is addressed",
          "Whether reinforcement supports continued responding",
        ],
      },
    ],
  },
  {
    slug: "supervising-the-use-of-pre-corrects",
    title: "Supervising the Use of Pre-Corrects",
    description:
      "Review how supervisors evaluate timing, clarity, follow-through, and neutrality when pre-corrects are used.",
    sections: [
      {
        title: "Supervising the Use of Pre-Corrects",
        paragraphs: [
          "Pre-corrects are evaluated based on whether they truly prepare the learner for upcoming expectations.",
          "Effective pre-corrects reduce confusion and increase predictability.",
        ],
        bullets: [
          "Whether pre-corrects are delivered with sufficient lead time",
          "Clarity and brevity of language",
          "Consistency between warnings and follow-through",
          "Neutrality during learner responses",
          "Reinforcement of compliance once the expectation is met",
        ],
      },
    ],
  },
  {
    slug: "what-supervisors-look-for-during-preference-assessments",
    title: "What Supervisors Look for During Preference Assessments",
    description:
      "Understand how supervisors assess the procedure and accuracy of preference assessments, not only the results.",
    sections: [
      {
        title: "What Supervisors Look for During Preference Assessments",
        paragraphs: [
          "Preference assessments are not evaluated solely on results, but on procedure.",
          "Accurate preference assessment supports meaningful reinforcement and reduces reliance on assumptions.",
        ],
        bullets: [
          "Presents items neutrally",
          "Avoids influencing selections",
          "Allows adequate response time",
          "Resets materials consistently",
          "Interprets choice patterns accurately",
        ],
      },
    ],
  },
  {
    slug: "supervising-differential-reinforcement-and-shaping",
    title: "Supervising Differential Reinforcement and Shaping",
    description:
      "Explore how supervisors evaluate reinforcement decisions, adaptability, and progression during shaping procedures.",
    sections: [
      {
        title: "Supervising Differential Reinforcement and Shaping",
        paragraphs: [
          "During shaping procedures, supervisors focus on how reinforcement decisions are made.",
          "This form of supervision highlights clinical judgment and adaptability.",
        ],
        bullets: [
          "Whether approximations are reinforced intentionally",
          "How reinforcement changes as performance improves",
          "Maintenance of instructional control",
          "Neutral responses to non-target behavior",
          "Gradual progression toward the terminal skill",
        ],
      },
    ],
  },
  {
    slug: "supervising-data-collection-and-graphing-skills",
    title: "Supervising Data Collection and Graphing Skills",
    description:
      "Review the supervision points that matter most for accurate observation, recording, graphing, and interpretation.",
    sections: [
      {
        title: "Supervising Data Collection and Graphing Skills",
        paragraphs: [
          "Supervisors closely evaluate how supervisees observe, record, and represent data.",
          "Data integrity is emphasized because clinical decisions depend on it.",
        ],
        bullets: [
          "Accuracy of response classification",
          "Consistency in recording",
          "Ability to collect data during instruction",
          "Correct graphing conventions",
          "Interpretation of trends over time",
        ],
      },
    ],
  },
  {
    slug: "evaluating-prompting-and-prompt-fading",
    title: "Evaluating Prompting and Prompt Fading",
    description:
      "Understand how supervisors assess prompt selection, fading strategy, and independence building.",
    sections: [
      {
        title: "Evaluating Prompting and Prompt Fading",
        paragraphs: [
          "Prompting is assessed not by whether assistance is provided, but by how it is reduced.",
          "Prompt fading reflects a supervisee’s ability to balance support with independence.",
        ],
        bullets: [
          "Selection of appropriate prompt levels",
          "Sensitivity to learner responding",
          "Systematic fading of support",
          "Reinforcement of independent responses",
          "Avoidance of prompt dependency",
        ],
      },
    ],
  },
  {
    slug: "why-structured-supervision-tasks-are-used",
    title: "Why Structured Supervision Tasks Are Used",
    description:
      "Learn why structured supervision tasks improve fairness, visibility, and growth tracking across supervisees.",
    sections: [
      {
        title: "Why Structured Supervision Tasks Are Used",
        paragraphs: [
          "Structured supervision tasks allow supervisors to observe specific competencies under controlled conditions.",
          "The goal is to make supervision transparent, fair, and developmentally appropriate.",
        ],
        bullets: [
          "Create predictable opportunities for skill demonstration",
          "Allow consistent evaluation across supervisees",
          "Highlight decision-making under variable learner behavior",
          "Support objective feedback and growth tracking",
        ],
      },
    ],
  },
  {
    slug: "using-supervisor-focused-educational-resources",
    title: "Using Supervisor-Focused Educational Resources",
    description:
      "Clarify how supervisor-focused educational resources support reflection while still requiring professional judgment.",
    sections: [
      {
        title: "Using Supervisor-Focused Educational Resources",
        paragraphs: [
          "These Educational Resources are designed to clarify supervision expectations and support reflective practice.",
          "They are not intended to replace individualized supervision, professional judgment, or credentialing requirements. Supervisors and supervisees should always align their practices with applicable ethical and regulatory standards.",
        ],
      },
    ],
  },
  {
    slug: "what-effective-supervision-feedback-looks-like",
    title: "What Effective Supervision Feedback Looks Like",
    description:
      "Understand what makes supervisory feedback useful, actionable, and skill-building rather than merely corrective.",
    sections: [
      {
        title: "What Effective Supervision Feedback Looks Like",
        paragraphs: [
          "Effective supervision feedback does more than praise or correct. It helps supervisees understand why a decision was effective and how to improve future performance.",
          "Supervisors are encouraged to comment not only on outcomes, but on the supervisee’s process and choices.",
        ],
        bullets: [
          "Specific and behavior-focused",
          "Timely and consistent",
          "Neutral in tone when addressing errors",
          "Reinforcing of correct decision-making",
          "Oriented toward skill development, not judgment",
        ],
      },
    ],
  },
  {
    slug: "why-supervisors-emphasize-neutrality",
    title: "Why Supervisors Emphasize Neutrality",
    description:
      "Learn why neutrality is repeatedly reinforced across supervision contexts and why it supports ethical practice.",
    sections: [
      {
        title: "Why Supervisors Emphasize Neutrality",
        paragraphs: [
          "Across supervision contexts, neutrality is a recurring theme.",
          "Supervision feedback often highlights moments where the supervisee successfully remained neutral in the presence of distracting, disruptive, or unexpected behavior. This skill is critical for maintaining consistency and ethical practice.",
        ],
        bullets: [
          "Avoid reinforcing problem behavior",
          "Maintain instructional control",
          "Preserve clarity between correct and incorrect responses",
          "Reduce emotional escalation during sessions",
        ],
      },
    ],
  },
  {
    slug: "feedback-that-reinforces-clinical-judgment",
    title: "Feedback That Reinforces Clinical Judgment",
    description:
      "See how supervisors use feedback to strengthen decision-making, confidence, and professional judgment.",
    sections: [
      {
        title: "Feedback That Reinforces Clinical Judgment",
        paragraphs: [
          "Rather than focusing solely on whether a task was completed, supervisors are trained to reinforce decision-making.",
          "Reinforcing these decisions helps supervisees develop confidence and professional judgment.",
        ],
        bullets: [
          "Choosing an appropriate prompt level",
          "Waiting before re-presenting an instruction",
          "Selecting descriptive praise over general praise",
          "Withholding attention during non-target behavior",
          "Adjusting tone based on learner responding",
        ],
      },
    ],
  },
  {
    slug: "using-feedback-to-shape-supervisee-skills",
    title: "Using Feedback to Shape Supervisee Skills",
    description:
      "Review how supervisors use reinforcement principles in feedback to support gradual skill mastery.",
    sections: [
      {
        title: "Using Feedback to Shape Supervisee Skills",
        paragraphs: [
          "Supervision feedback often mirrors the same principles used in teaching clients.",
          "Supervisors may intentionally reinforce partial success to support gradual skill development, especially during complex procedures.",
        ],
        bullets: [
          "Highlights small improvements",
          "Reinforces approximations toward mastery",
          "Encourages continued engagement",
          "Identifies next steps without overwhelming",
        ],
      },
    ],
  },
  {
    slug: "common-elements-of-high-quality-supervisory-feedback",
    title: "Common Elements of High-Quality Supervisory Feedback",
    description:
      "Explore the recurring elements found in clear, effective, and growth-oriented supervisory feedback.",
    sections: [
      {
        title: "Common Elements of High-Quality Supervisory Feedback",
        paragraphs: [
          "Across supervision tasks, effective feedback frequently includes common elements that support integration into ongoing practice.",
        ],
        bullets: [
          "Acknowledgment of what was done well",
          "Clear identification of effective strategies",
          "Brief, actionable suggestions for improvement",
          "Reinforcement of calm, consistent responding",
          "Summary statements that support future sessions",
        ],
      },
    ],
  },
  {
    slug: "feedback-during-differential-reinforcement-and-shaping",
    title: "Feedback During Differential Reinforcement and Shaping",
    description:
      "Understand the technical and interpersonal feedback themes supervisors emphasize during shaping procedures.",
    sections: [
      {
        title: "Feedback During Differential Reinforcement and Shaping",
        paragraphs: [
          "When supervising shaping and differential reinforcement, feedback often focuses on both technical and interpersonal components of implementation.",
        ],
        bullets: [
          "Appropriate use of descriptive praise",
          "Clear differentiation between correct and incorrect responding",
          "Consistency in reinforcement delivery",
          "Maintenance of a neutral demeanor during non-target behavior",
          "Gradual increases in expectations",
        ],
      },
    ],
  },
  {
    slug: "feedback-during-data-collection-and-graphing",
    title: "Feedback During Data Collection and Graphing",
    description:
      "See what supervisors focus on when giving feedback about data accuracy, attention, and consistency.",
    sections: [
      {
        title: "Feedback During Data Collection and Graphing",
        paragraphs: [
          "Supervision feedback in data collection emphasizes accuracy and consistency.",
          "Feedback reinforces that data quality directly affects clinical decision-making.",
        ],
        bullets: [
          "Correct classification of responses",
          "Recording data while teaching",
          "Maintaining focus despite distractions",
          "Consistent stimulus presentation",
          "Accurate representation of data",
        ],
      },
    ],
  },
  {
    slug: "feedback-during-antecedent-control-procedures",
    title: "Feedback During Antecedent Control Procedures",
    description:
      "Review how supervisors guide timing, follow-through, and proactive instruction during antecedent strategies.",
    sections: [
      {
        title: "Feedback During Antecedent Control Procedures",
        paragraphs: [
          "When supervising antecedent strategies such as behavioral momentum or pre-corrects, supervisors often focus on proactive implementation.",
          "Feedback highlights how proactive strategies reduce the need for reactive intervention.",
        ],
        bullets: [
          "Timing of instructions",
          "Clarity and consistency of expectations",
          "Appropriate redirection",
          "Calm responses to non-compliance",
          "Follow-through once expectations are set",
        ],
      },
    ],
  },
  {
    slug: "feedback-during-prompting-and-prompt-fading",
    title: "Feedback During Prompting and Prompt Fading",
    description:
      "Understand how supervisors give feedback about prompt intrusiveness, fading, and independence.",
    sections: [
      {
        title: "Feedback During Prompting and Prompt Fading",
        paragraphs: [
          "Supervisory feedback related to prompting frequently addresses how support is balanced with independence.",
        ],
        bullets: [
          "Selection of least intrusive prompts",
          "Sensitivity to learner responding",
          "Timely fading of support",
          "Reinforcement of independent responses",
          "Avoidance of prompt dependency",
        ],
      },
    ],
  },
  {
    slug: "why-feedback-quantity-and-quality-both-matter",
    title: "Why Feedback Quantity and Quality Both Matter",
    description:
      "Learn why supervision feedback must be frequent enough to guide learning and selective enough to stay meaningful.",
    sections: [
      {
        title: "Why Feedback Quantity and Quality Both Matter",
        paragraphs: [
          "Supervision feedback should be frequent enough to guide learning, but thoughtful enough to be meaningful.",
          "Effective feedback builds competence over time.",
        ],
        bullets: [
          "Comment on key moments rather than everything",
          "Balance praise with corrective guidance",
          "Avoid overwhelming supervisees with excessive critique",
          "Reinforce progress over perfection",
        ],
      },
    ],
  },
  {
    slug: "using-feedback-resources-responsibly",
    title: "Using Feedback Resources Responsibly",
    description:
      "Clarify how feedback resources support supervision understanding without replacing individualized requirements.",
    sections: [
      {
        title: "Using Feedback Resources Responsibly",
        paragraphs: [
          "These Educational Resources are intended to support supervisors and supervisees in understanding feedback expectations and best practices.",
          "They do not replace individualized supervision, ethical obligations, or credentialing requirements. Supervision practices should always align with applicable professional standards and regulatory guidance.",
        ],
      },
    ],
  },
];

export const getEducationalResourceBySlug = (slug: string) =>
  educationalResources.find((item) => item.slug === slug);