export default class DataService {
  _data = {
    projectRepo: "https://github.com/spencer-hong",
    react95Repo: "https://github.com/React95/React95",
    musicitems: [
      {
        id: "video5",
        name: "Still Life.mp4",
        icon: "quartz_200",
        url: "fCECnGZXEbg ",
      },
      {
        id: "video1",
        name: "Isn't she lovely.mp4",
        icon: "quartz_200",
        url: "3DnauBiIjzk",
      },
      {
        id: "video2",
        name: "Dilemma.mp4",
        icon: "quartz_201",
        url: "NfF9dMV8DN0",
      },
      {
        id: "video3",
        name: "Close to you.mp4",
        icon: "quartz_202",
        url: "caNwN1ENMzE",
      },
      {
        id: "video4",
        name: "Bohemian Rhapsody.mp4",
        icon: "quartz_203",
        url: "1dRmR_Zvqng",
      },
    ],
    items: [
      {
        id: "about",
        name: "About.txt",
        icon: "info_bubble",
        content: {
          paragraphs: [
            "Hi! I'm Spencer, and I'm a PhD candidate at Northwestern University specializing in document intelligence, NLP, and large language models.",
            "Here, you'll find both my technical and creative projects that showcase a little bit of who I am.",
            "You might have seen me present in front of the National Institutes of Health, collaborate with journalists, or lead the development of a large multi-modal AI framework dedicated to archives.",
            "When I'm not working, you'll most likely find me playing fingerstyle guitar, doing crossfit at BluPrint, and reading 한강 (Nobel Prize in Literature 2024) poetry.",
            "Looking forward to talking with you!",
          ],
        },
      },
      {
        id: "resume",
        name: "Resume.txt",
        icon: "notepad_2",
        content: {
          resumeLink:
            "https://scholar.google.com/citations?user=kBjiJb8AAAAJ&hl=en&authuser=2",
          workExperience: [
            {
              jobTitle: "PhD Data Scientist at AI Foundations",
              company: "Capital One",
              location: "New York City, NY",
              period:
                "May 2024 - Aug 2024 (FT); Aug 2024 - Current (consulting); Joining FT in 2025",
              accomplishments: [
                "Developed and evaluated novel retrieval-augmented generation (RAG) models to reduce average handling time for hundreds of active bank agents.",
                "Engineered patent-pending system to detect hallucinations from large language models.",
                "Created refusal-aware LLM evaluators that profiled pretraining data regimes.",
                "Increased information retrieval speed by 400% using tensor parallelism and look-up methods.",
              ],
            },
            {
              jobTitle: "Senior Deep Learning Engineer",
              company: "Renota",
              location: "Evanston, IL",
              period: "Dec 2022 - Dec 2023",
              accomplishments: [
                "Led all technical projects in generative AI model training & testing in AWS to automate math homework grading.",
                "Designed and deployed a LLM to detect OCR errors for student handwriting, reaching 92% detection rate.",
                "Migrated training and testing workflows to AWS, led to 60% faster cycle time.",
                "Led the company direction as part of the core team with the CEO and COO. Managed junior engineers and mentored several interns in training and deploying LLMs.",
              ],
            },
            {
              jobTitle: "PhD Candidate & Ryan Fellow",
              company: "Northwestern University",
              location: "Chicago, IL",
              period: "AUG 2020 – PRESENT",
              accomplishments: [
                "First PhD student in National Institutes of Health history to present in front of the National Advisory Council for Human Genome Research.",
                "Designed, implemented, and led the efforts to uncover fundamental funding mechanisms at the National Institutes of Health through more than two milion unstructured, privileged documents.",
                "Trained multimodal deep learning models for PII redaction, entity disambiguation, handwriting separation, scan segmentation, document categorization, and topic mapping.",
                "Developed the first LLM agentic RAG system to answer biomedical questions without scientific bias using hundreds of public data sources.",
                "Led a team of ethicists, archivists, historians, and engineers for the first data-driven investigation of a major scientific funding agency in the US.",
              ],
            },
            {
              jobTitle: "Consultant",
              company: "US Air Force Research Laboratory",
              location: "Dayton, OH",
              period: "MAY 2019 – MAY 2020",
              accomplishments: [
                "Advised modeling efforts to detect chemical toxicity for unknown chemical structures using machine learning.",
                "Created an Bayesian optimization pipeline for hyperparameter tuning to save 4,300 hours of grid search time.",
                "Engineered novel features derived solely from chemical structure to detect toxicity at 85% detection rate.",
              ],
            },
          ],
          education: [
            {
              credit:
                "Doctorate of Philosophy in Chemical and Biological Engineering",
              place: "Northwestern University, Evanston IL",
              gpa: "Presidential Fellowship Finalist",
              period: "AUG 2020 - MAY 2025 (EXPECTED)",
            },
            {
              credit:
                "Bachelor of Science in Chemical and Biomolecular Engineering",
              place: "Cornell University, Ithaca NY",
              gpa: "Magna Cum Laude (top 10%)",
              period: "SEPT 2016 – JUN 2020",
            },
          ],
        },
      },
      {
        id: "projects",
        name: "Projects.txt",
        icon: "flying_through_space_100",
        content: {
          projects: [
            {
              title: "Langas AI",
              description:
                "Boutique consultancy for LLM training & deployment, causal inference, and reinforcement learning.",
              myRole: "Co-founder",
              url: "https://langas.ai",
            },
            {
              title: "Archiverse",
              description:
                "An universal pipeline of document intelligence for archives and libraries. ",
              myRole: "Lead developer/architect. Foundation for my PhD thesis.",
              techStack: "Docker, Python, Dagster, Neo4J",
              url: "Project currently private. Currently under publication.",
            },
            {
              title: "Meta Llama Impact Grant - Knight Lab",
              description:
                "Creating a generative AI solution for local newsrooms to tailor content to specific audiences.",
              myRole: "Architect, co-PI, author",
              techStack: "Llama, AWS, PyTorch",
              url: "https://ai.meta.com/llama/llama-impact-grants/",
            },
            {
              title: "Kaytoo",
              description:
                "NLP-powered mobile platform that tailors motivational tactics and breaks down goals into daily tasks.",
              myRole: "Co-founder, CTO, lead web developer",
              techStack: "Docker, AWS, InVision, Python",
              url: "https://kaytoo-app.com",
            },
          ],
        },
      },
      {
        id: "words",
        name: "Words.txt",
        icon: "file_pen",
        content: {
          projects: [
            // {
            //   title: "cursive",
            //   author: "spencer",
            //   lines: [
            //     "writing in between the lines, a tight fit.",
            //     "my g’s had to come back to the floor.",
            //     "my i’s had to be dotted before the ceiling. ",
            //     "why can’t my j’s just justify on its own?",
            //     "they left a path fo me to follow",
            //     "only to take away what paths I had left.",
            //   ],
            //   // url: "https://youtu.be/QAhvvQQurw4",
            // },
            // {
            //   title: "누구나 그렇게 서른이 된다",
            //   author: "편채원",
            //   lines: [
            //     "세상에 당연한 건 없었다.",
            //     "고된 시간을 견뎌낸 꽃이라 해서",
            //     "모두가 제때 열매를 맺는 것은 아니었으니까.",
            //     "---",
            //     "조금 느리고 서투르면 어때.",
            //     "우리의 서른은, 아직 피어나는 중인 걸.",
            //   ],
            //   // url: "https://youtu.be/UOx2Axm0tWI",
            // },
            {
              title: "시멘트",
              author: "유용주",
              lines: [
                "부드러운 것이 강하다.",
                "자신이 가루가 될 때 까지 철저하게",
                "부서져본 사람만이 그걸 안다",
              ],
              // url: "https://youtu.be/hzpt3fQjY9U?t=740",
            },
             {
              title: "untitled",
              author: "Wynton Marsalis",
              lines: [
                "\"Is jazz music more for the listener or the player?\"",
                "Music is always for the listener",
                "but the first listener is the player.",
              ],
              // url: "https://youtu.be/hzpt3fQjY9U?t=740",
            },
            // {
            //   title: "삶이 그대를 속일지라도",
            //   author: "아논",
            //   lines: [
            //     "삶이 그대를 속일지라도",
            //     "슬퍼하거나 노하지 말아라.",
            //     "슬픈 날엔 참고 견디라.",
            //     "즐거운 날이 오고야 말리니.",
            //     "---",
            //     "마음은 미래를 바라느니",
            //     "현재는 한없이 우울한 것.",
            //     "모든 것 하염없이 사라지나",
            //     "지나가 버린 것 그리움이 되리니.",
            //   ],
            //   // url: "https://youtu.be/OHORwLnHIEw?t=1690",
            // },
            // {
            //   title: "그 꽃",
            //   author: "서덕준",
            //   lines: [
            //     "사랑하는 사람의",
            //     "눈길 한번 받고 싶어 수많은 날을",
            //     "눈물로 빚어놓은 아픔일테니",
            //     "그리움을 펼쳐놓은 절규일테니",
            //     "---",
            //     "그 마음, 꺾지 말아줘요",
            //   ],
            //   // url: "https://www.youtube.com/watch?v=UOx2Axm0tWI",
            // },
          ],
        },
      },
      {
        id: "skills",
        name: "Skills.txt",
        icon: "progman_11",
        content: {
          hard: [
            {
              name: "Python",
              progress: 100,
            },
            {
              name: "Docker",
              progress: 90,
            },
            {
              name: "Git",
              progress: 90,
            },
            {
              name: "PyTorch",
              progress: 70,
            },
            {
              name: "Spark",
              progress: 50,
            },
            {
              name: "SQL",
              progress: 50,
            },
            {
              name: "Dagster",
              progress: 40,
            },
            {
              name: "Rust",
              progress: 40,
            },
            {
              name: "LangChain & LangGraph",
              progress: 30,
            },
            {
              name: "AWS",
              progress: 30,
            },
          ],
          soft: "Korean (native), French (B2), Japanese (N5)",
        },
      },
      {
        id: "contact",
        name: "Contact.txt",
        icon: "inetcfg_2301",
        content: {
          emailText: "If you want to discuss more, shoot me an email at ",
          email: "spencerhong@u.northwestern.edu",
          socialText: "Or you can reach me through social media:",
          social: [
            {
              name: "FaLinkedin",
              link: "https://www.linkedin.com/in/hongspencer/",
            },
            {
              name: "FaGithub",
              link: "https://github.com/spencer-hong",
            },
            {
              name: "FaTwitter",
              link: "https://twitter.com/spencercodes",
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }

  getMusicItems() {
    return this._data.musicitems.map(({ id, name, icon }) => ({
      id,
      name,
      icon,
    }));
  }

  getMusicItem(id) {
    return this._data.musicitems.find((x) => x.id === id);
  }
}
