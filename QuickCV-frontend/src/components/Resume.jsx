import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Resume = ({ data }) => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
     contentRef: resumeRef,
    documentTitle: data.personalInformation.fullName || "Resume",
  });
  
  return (
    <>
      <div
        ref={resumeRef}
        className="resume-container bg-white text-black max-w-[210mm] min-h-[297mm] mx-auto p-6 text-sm leading-relaxed"
      >
        {/* Header Section */}
        <div className="text-center mb-3">
        <h1 className="text-2xl font-bold">
          {data.personalInformation.fullName}
        </h1>
        <p className="text-sm mt-1">
        {[
          data.personalInformation.location,
          data.personalInformation.email,
          data.personalInformation.phoneNumber,
          data.personalInformation.gitHub,
          data.personalInformation.linkedIn,
        ]
        .filter(Boolean)
        .join(" | ")}
        </p>

      </div>

        {/* Summary Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">{data.summary}</p>
        </section>

        <div className=" "></div>

        {/* Skills Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">Skills</h2>
          <ul className="grid grid-cols-3 gap-x-4 gap-y-1 mt-1">
        {data.skills.map((skill, index) => (
        <li key={index}>
        {skill.title}
        </li>
        ))}
        </ul>
        </section>

        <div className=" "></div>

        {/* Experience Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">Experience</h2>
          {data.experience.map((exp, index) => (
          <div key={index} className="mt-2">
          <div className="flex justify-between font-semibold">
            <span>{exp.jobTitle} - {exp.company}</span>
            <span className="text-xs">{exp.duration}</span>
          </div>
          <p className="text-xs italic">
          {exp.location}
        </p>
        <p className="text-sm mt-1">
          {exp.responsibility}
        </p>
      </div>
      ))}
    </section>

        <div className=" "></div>

        {/* Education Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">Education</h2>
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="    border-gray-300 dark:border-gray-700"
            >
              <h4 className="text-xl font-bold">{edu.degree}</h4>
              <p className="text-gray-500">
                {edu.university}, {edu.location}
              </p>
              <p className="text-gray-400">
                🎓 Graduation Year: {edu.graduationYear}
              </p>
            </div>
          ))}
        </section>

        <div className=" "></div>

        {/* Certifications Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">
            Certifications
          </h2>
          {data.certifications.map((cert, index) => (
            <div
              key={index}
              className="     border-gray-300 dark:border-gray-700"
            >
              <h4 className="text-xl font-bold">{cert.title}</h4>
              <p className="text-gray-500">
                {cert.issuingOrganization} - {cert.year}
              </p>
            </div>
          ))}
        </section>

        <div className=" "></div>

        {/* Projects Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">Projects</h2>
          {data.projects.map((proj, index) => (
            <div
              key={index}
              className="     border-gray-300 dark:border-gray-700"
            >
              <h4 className="text-xl font-bold">{proj.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">
                {proj.description}
              </p>
              <p className="text-gray-500">
                🛠 Technologies: {proj.technologiesUsed.join(", ")}
              </p>
              {proj.githubLink && (
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  🔗 GitHub Link
                </a>
              )}
            </div>
          ))}
        </section>

        <div className=" "></div>

        {/* Achievements Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">
            Achievements
          </h2>
          {data.achievements.map((ach, index) => (
            <div
              key={index}
              className="     border-gray-300 dark:border-gray-700"
            >
              <h4 className="text-xl font-bold">{ach.title}</h4>
              <p className="text-gray-500">{ach.year}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {ach.extraInformation}
              </p>
            </div>
          ))}
        </section>

        <div className=" "></div>

        {/* Languages Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">Languages</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {data.languages.map((lang, index) => (
              <li key={index}>{lang.name}</li>
            ))}
          </ul>
        </section>

        <div className=" "></div>

        {/* Interests Section */}
        <section>
          <h2 className="text-base font-bold border-b pb-1 mt-3">Interests</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {data.interests.map((interest, index) => (
              <li key={index}>{interest.name}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="flex justify-center mt-4 ">
        <div onClick={handlePrint} className="btn btn-primary">
  Download PDF
</div>
      </section>
    </>
  );
};

export default Resume;