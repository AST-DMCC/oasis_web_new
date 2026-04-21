import React from "react";

function HexIcon({ color }: { color: string }) {
  return (
    <div
      className="mx-auto h-8 w-8 shrink-0"
      style={{
        backgroundColor: color,
        clipPath:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      }}
    />
  );
}

function TextCard({
  text,
  bgClass = "bg-[#ECE7F7]",
  borderColor,
  className = "",
}: {
  text: string;
  bgClass?: string;
  borderColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md px-6 py-5 text-center text-[15px] leading-7 text-[#222] shadow-sm ${bgClass} ${className}`}
      style={borderColor ? { borderBottom: `3px solid ${borderColor}` } : {}}
    >
      {text}
    </div>
  );
}

export default function SupervisorProceduresStructuredSkillEvaluationPage() {
  return (
    <section className="w-full bg-[#F3F3F3] px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-10 text-center text-[32px] font-semibold leading-tight text-black md:text-[40px]">
          Supervisor Procedures and Structured Skill Evaluation
        </h1>

        <div className="mx-auto max-w-[1120px] border-b-[3px] border-[#B9A0FF] pb-4">
          <h2 className="mb-6 text-center text-[24px] font-semibold text-black md:text-[28px]">
            Supervisor Procedures and Structured Skill Evaluation
          </h2>
          <p className="mb-6 text-left text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
            OASIS-S provides supervisors with a structured framework for
            conducting supervision that emphasizes direct observation,
            consistency, and skill-based evaluation. Supervisor procedures are
            designed to support reliable assessment of supervisee performance
            across a range of applied behavior analysis skills, while still
            allowing flexibility to adapt to individual supervision contexts.
          </p>

          <p className="mb-12 text-left text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
            Rather than relying on informal impressions or unstructured
            observation, supervision on OASIS-S is organized around clearly
            defined skill areas and consistent evaluation practices. This
            approach supports fairness, clarity, and meaningful professional
            development for supervisees.
          </p>

          <h3 className="mb-10 text-center text-[24px] font-semibold text-black md:text-[28px]">
            Structuring Supervision Sessions
          </h3>

          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16">
            <div className="flex items-start justify-center gap-4">
              <div className="pt-1">
                <HexIcon color="#9CC9EA" />
              </div>
              <p className="max-w-[360px] text-left text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                Supervision sessions on OASIS-S are intentionally skill-focused
                and time-limited. Each session is organized around a specific
                target skill that is appropriate to the supervisee’s current
                level of training and experience. By identifying the focus of
                supervision in advance, supervisors and supervisees enter each
                session with shared expectations.
              </p>
            </div>

            <div className="flex items-start justify-center gap-4">
              <div className="pt-1">
                <HexIcon color="#D96CB2" />
              </div>
              <p className="max-w-[360px] text-left text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                During a session, supervisors observe the supervisee demonstrate
                the selected skill and evaluate performance using standardized
                criteria. Feedback is then provided based on what was directly
                observed, allowing supervision time to be used efficiently and
                purposefully.
              </p>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <div className="flex items-start justify-center gap-4">
                <div className="pt-1">
                  <HexIcon color="#5B3DF5" />
                </div>
                <p className="max-w-[360px] text-left text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                  This consistent session structure helps ensure that
                  supervision remains focused on skill development rather than
                  general discussion, while also supporting transparency in how
                  performance is evaluated.
                </p>
              </div>
            </div>
          </div>

          <h3 className="mb-8 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
            Using Task Analyses to Guide Observation
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch">
            <div className="flex flex-col gap-5">
              <TextCard
                text="Task analyses are a core component of supervisor procedures on OASIS-S. Instead of relying on global judgments, supervisors use task analyses to evaluate performance based on clearly defined, observable components of each skill."
                bgClass="bg-[#ECE7F7] text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
              />

              <TextCard
                text="Task analyses are used across multiple skill areas, including reinforcement procedures, data collection and graphing, antecedent strategies, preference assessments, and prompting and prompt fading."
                bgClass="bg-transparent text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
                borderColor="#F0B429 "
              />
            </div>

            <div className="h-full">
              <div className="flex h-full">
                <TextCard
                  text="By breaking complex skills into smaller, observable elements, task analyses allow supervisors to identify strengths, pinpoint areas for refinement, and provide feedback that is specific and actionable. This approach also supports consistent scoring across supervision sessions and helps track skill development over time."
                  bgClass="bg-[#ECE7F7] h-full flex items-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
                />
              </div>
            </div>
          </div>

          <h3 className="mb-8 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
            Evaluating Skill Implementation
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <TextCard
              text="Supervisor procedures on OASIS-S emphasize evaluating how a skill is implemented, not simply whether it occurs. Supervisors attend to factors such as clarity of instruction, timing and appropriateness of reinforcement, accuracy of data collection, and responsiveness to learner behavior."
              bgClass="bg-[#DDEAF4] text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
            />

            <TextCard
              text="Evaluation is grounded in observable actions rather than intent, effort, or outcome alone. This focus supports objective assessment and helps supervisees develop technical precision and professional judgment as their skills advance."
              bgClass="bg-[#DDEAF4] text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
            />
          </div>

          <h3 className="mb-10 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
            Supporting Skill Development Through Feedback
          </h3>

          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-0">
            <div className="flex items-start justify-center gap-4">
              <div className="pt-1">
                <HexIcon color="#9CC9EA" />
              </div>
              <p className="max-w-[360px] text-left text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                Feedback is an essential part of the supervision process on
                OASIS-S. Supervisor procedures are designed to support feedback
                that is directly linked to observed performance and aligned with
                task analysis criteria.
              </p>
            </div>

            <div className="flex items-start justify-center gap-4">
              <div className="pt-1">
                <HexIcon color="#D96CB2" />
              </div>
              <p className="max-w-[360px] text-left text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
                Effective feedback helps supervisees understand what aspects of
                their performance to continue, what to refine, and how to adjust
                their practice in future opportunities. Over time, this process
                supports steady improvement rather than one-time performance
                correction.
              </p>
            </div>
          </div>

          <h3 className="mb-8 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
            Consistency Across Supervisors and Sessions
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <TextCard
              text="Using shared procedures and task analyses promotes consistency across supervisors, settings, and supervision sessions. This consistency helps ensure that supervisees are evaluated using comparable criteria, regardless of who is providing supervision."
              bgClass="bg-[#F1E8C8] text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
            />

            <TextCard
              text="At the same time, professional judgment remains essential. The procedures used on OASIS-S provide a framework to guide supervision, not a rigid script that replaces clinical decision-making or individualized support."
              bgClass="bg-[#F1E8C8] text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
            />
          </div>

          <h3 className="mb-8 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
            Flexibility Within a Structured Framework
          </h3>

          
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="md:flex-[1.6]">
              <TextCard
                text="While supervision on OASIS-S follows a structured format, supervisors retain flexibility in selecting skills, adapting practice scenarios, and responding to supervisee needs. The framework is designed to support a wide range of supervision contexts while maintaining a shared foundation for evaluation and feedback."
                bgClass="bg-[#EED9E7] text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
                className="h-full"
              />
            </div>

            <div className="md:flex-[0.9]">
              <TextCard
                text="This balance allows supervision to remain both rigorous and responsive, supporting high standards without sacrificing individualization."
                bgClass="bg-[#EED9E7] text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
                className="h-full"
              />
            </div>
          </div>

          <h3 className="mb-6 mt-14 text-center text-[24px] font-semibold text-black md:text-[28px]">
            Responsible Use of Supervisor Procedures
          </h3>

          <p className="mx-auto max-w-[1080px] text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]">
            Supervisor procedures and task analyses on OASIS-S are intended to
            support effective supervision practices. They do not replace
            professional training requirements, ethical guidelines, or
            credentialing standards. Supervisors remain responsible for ensuring
            that their supervision practices align with applicable professional,
            ethical, and regulatory expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
