import React from "react";

const workflowCards = [
  "Supervision on OASIS-S is organized around clearly defined skill areas. Each supervision cycle begins by identifying a specific skill or procedure that will be the focus of practice. This ensures that supervision sessions are intentional and aligned with learning goals rather than driven by convenience or habit.",
  "Following this initial assessment, supervisees engage in guided practice. Practice activities may include video-recorded demonstrations of the target skill, allowing supervisors to observe real examples of implementation even when live observation is not feasible.",
  "In many cases, supervision begins with an initial assessment or pre-test to establish a baseline level of performance. This allows supervisors to tailor feedback and guidance to the supervisee’s current level of skill and experience.",
  "Supervisors then review submitted materials and provide feedback that focuses on observable behavior, decision-making, and quality of implementation. This feedback supports reflection and refinement before the supervisee moves forward.",
];

const videoItems = [
  {
    color: "#9CC9EA",
    text: "Video submission is a core component of the OASIS-S supervision process. Video allows supervisors to observe authentic examples of skill implementation and provides supervisees with feedback that is directly tied to their own performance.",
  },
  {
    color: "#D96CB2",
    text: "Using video supports supervision by expanding opportunities for observation, allowing feedback to be more precise, and supporting reflection on practice. Over time, video also creates a record of skill development that can be revisited as supervisees progress.",
  },
  {
    color: "#5B3DF5",
    text: "Video is intended to supplement, not replace, other supervision activities. It serves as a tool to enhance observation and feedback within a broader supervision framework.",
  },
];

const feedbackCards = [
  "After feedback is provided, supervisees are expected to review comments carefully and apply guidance during future practice opportunities. Supervision on OASIS-S is designed to be iterative, meaning skills are refined over time rather than mastered in a single attempt.",
  "This ongoing cycle of practice, feedback, and adjustment supports confidence, professional judgment, and consistent improvement. Supervisees are encouraged to view feedback as part of a continuous learning process rather than a final evaluation.",
];

const superviseeItems = [
  {
    color: "#9CC9EA",
    text: "Effective supervision requires active participation. Supervisees are expected to engage with assigned materials, submit practice demonstrations as required, review feedback thoughtfully, and communicate with supervisors when clarification is needed.",
  },
  {
    color: "#D96CB2",
    text: "Supervision on OASIS-S is most effective when supervisees prepare for supervision activities, submit materials in a timely manner, reflect on feedback, and apply guidance in future practice. Asking questions and seeking clarification are encouraged as part of the learning process.",
  },
];

function HexIcon({ color }: { color: string }) {
  return (
    <div
      className="mx-auto mb-6 h-8 w-8"
      style={{
        backgroundColor: color,
        clipPath:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      }}
    />
  );
}

// function InfoCard({
//   text,
//   borderColor = "#EAB308",
// }: {
//   text: string;
//   borderColor?: string;
// }) {
//   return (
//     <div className="rounded-md bg-[#EDE7F8] px-6 py-5 text-center text-[15px] leading-7 text-[#222] border-b-[3px] shadow-sm">
//       <div style={{ borderColor }} className="hidden" />
//       {text}
//     </div>
//   );
// }

export default function UnderstandingTheSupervisionProcessPage() {
  return (
    <section className="w-full bg-[#F3F3F3] px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-10 text-center text-[34px] font-semibold leading-tight text-black md:text-[42px]">
          How Supervision Works
        </h1>

        <div className="mx-auto max-w-[1120px] rounded-[2px] border-b-[3px] border-[#B9A0FF] pb-1">
          <div className="px-2 md:px-4">
            <h2 className="mb-6 text-center text-[24px] font-semibold text-black md:text-[28px]">
              Understanding the Supervision Process on OASIS-S
            </h2>

            <p className="mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
              OASIS-S uses a structured supervision workflow designed to support
              skill development through assessment, practice, feedback, and
              review. This process helps ensure that supervision is consistent,
              observable, and focused on professional growth rather than task
              completion alone.
            </p>

            <p className="mb-12 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
              Supervision on the platform follows a clear, repeatable cycle.
              Each cycle begins with identifying a target skill, continues
              through guided practice and feedback, and concludes with review
              and evaluation of progress. This structure allows both
              supervisees and supervisors to understand what is expected at each
              stage of supervision and how learning unfolds over time.
            </p>

            <h3 className="mb-8 text-center text-[24px] font-semibold text-black md:text-[28px]">
              The Supervision Workflow: From Skill Selection to Review
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-md border-b-[3px] border-[#F0B429] bg-[#EDE7F8] px-6 py-5 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                {workflowCards[0]}
              </div>

              <div className="rounded-md border-b-[3px] border-[#F0B429] bg-[#EDE7F8] px-6 py-5 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                {workflowCards[1]}
              </div>

              <div className="rounded-md border-b-[3px] border-[#F0B429] bg-transparent px-3 py-4 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                {workflowCards[2]}
              </div>

              <div className="rounded-md border-b-[3px] border-[#F0B429] bg-transparent px-3 py-4 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                {workflowCards[3]}
              </div>
            </div>

            <h3 className="mb-10 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
              The Role of Video in Supervision
            </h3>

            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16">
              <div className="mx-auto max-w-[420px] text-center">
                <HexIcon color="#9CC9EA" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                  {videoItems[0].text}
                </p>
              </div>

              <div className="mx-auto max-w-[420px] text-center">
                <HexIcon color="#D96CB2" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                  {videoItems[1].text}
                </p>
              </div>

              <div className="mx-auto max-w-[420px] text-center md:col-span-2">
                <HexIcon color="#5B3DF5" />
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                  {videoItems[2].text}
                </p>
              </div>
            </div>

            <h3 className="mb-8 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
              Reviewing Feedback and Continuing Skill Development
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {feedbackCards.map((item, index) => (
                <div
                  key={index}
                  className="rounded-md bg-[#EDE7F8] px-6 py-5 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
                >
                  {item}
                </div>
              ))}
            </div>

            <h3 className="mb-10 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
              What Is Expected of Supervisees
            </h3>

            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20">
              {superviseeItems.map((item, index) => (
                <div key={index} className="mx-auto max-w-[430px] text-center">
                  <HexIcon color={item.color} />
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mb-6 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
              Why a Structured Supervision Process Matters
            </h3>

            <div className="mx-auto max-w-[1120px]   pb-4">
              <p className="mb-6 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                A structured supervision process helps ensure that learning is
                intentional, observable, and responsive to individual needs. By
                organizing supervision around defined skills and feedback
                cycles, OASIS-S supports consistency across supervisors while
                still allowing for individualized guidance.
              </p>

              <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                This approach helps shift supervision away from passive
                participation and toward active skill development, supporting
                meaningful professional growth over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}