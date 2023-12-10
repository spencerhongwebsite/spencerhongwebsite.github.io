export default class DataService {
  _data = {
    projectRepo: "https://github.com/spencer-hong",
    react95Repo: "https://github.com/React95/React95",
    musicitems: [
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
            "Hi! I'm Spencer, and I'm a PhD candidate at Northwestern University. I specialize in document intelligence, NLP, and deep learning.",
            "Here, you'll find both my technical and creative projects that showcase a little bit of who I am.",
            "You might have seen me present in front of the National Institutes of Health, collaborate with journalists, or lead the largest computational portfolio analysis using multimodal deep learning.",
            "When I'm not working, you'll most likely find me playing fingerstyle guitar, training for the Chicago triathlon, and in deep thought about the lives we lead.",
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
              jobTitle: "PhD Candidate",
              company: "Northwestern University",
              location: "Evanston, IL",
              period: "AUG 2020 – PRESENT",
              accomplishments: [
                "Trained multimodal deep learning models for PII redaction, entity disambiguation, handwriting separation, computer vision, and document categorization, and topic mapping",
                "Led a team of ethicists, archivists, historians, and engineers to handle privileged business data",
                "Responsible for causal, statistical models to determine process behind national scientific funding",
                "First PhD student in history to present at National Advisory Council for Human Genome Research",
                "Technologies used: Python, Rust, Docker, PyTorch",
              ],
            },
            {
              jobTitle: "Computational Research Consultant",
              company: "US Air Force Research Laboratory",
              location: "Dayton, OH",
              period: "MAY 2019 – MAY 2020",
              accomplishments: [
                "Investigating drug interactions with human respiratory complex using computational docking platforms",
                "Created simulations and models for chemical toxicity for candidates of interest",
                "Developed and shipped a Bayesian pipeline for finding optimal machine learning models",
                "Technologies used: Python, QSAR, Molecular Dynamics",
              ],
            },
          ],
          education: [
            {
              credit:
                "Doctorate of Philosophy in Chemical and Biological Engineering",
              place: "Northwestern University, Evanston IL",
              gpa: "3.8/4.0 GPA",
              period: "AUG 2020 - MAY 2025 (EXPECTED)",
            },
            {
              credit:
                "Bachelor of Science in Chemical and Biomolecular Engineering",
              place: "Cornell University, Ithaca NY",
              gpa: "3.75/4.0 GPA",
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
              title: "Tiramisu",
              description:
                "A base-layer-container approach to document management to aid document-based pipelines.",
              myRole: "Lead developer/architect. Foundation for my PhD thesis.",
              techStack: "Docker, Python, Rust, React, PyTorch",
              url: "Project currently private. Currently under review.",
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
        id: "poems",
        name: "Poems.txt",
        icon: "file_pen",
        content: {
          projects: [
            {
              title: "cursive",
              author: "spencer",
              lines: [
                "writing in between the lines, a tight fit.",
                "my g’s had to come back to the floor.",
                "my i’s had to be dotted before the ceiling. ",
                "why can’t my j’s just justify on its own?",
                "they left a path fo me to follow",
                "only to take away what paths I had left.",
              ],
              // url: "https://youtu.be/QAhvvQQurw4",
            },
            {
              title: "누구나 그렇게 서른이 된다",
              author: "편채원",
              lines: [
                "세상에 당연한 건 없었다.",
                "고된 시간을 견뎌낸 꽃이라 해서",
                "모두가 제때 열매를 맺는 것은 아니었으니까.",
                "---",
                "조금 느리고 서투르면 어때.",
                "우리의 서른은, 아직 피어나는 중인 걸.",
              ],
              // url: "https://youtu.be/UOx2Axm0tWI",
            },
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
              title: "삶이 그대를 속일지라도",
              author: "아논",
              lines: [
                "삶이 그대를 속일지라도",
                "슬퍼하거나 노하지 말아라.",
                "슬픈 날엔 참고 견디라.",
                "즐거운 날이 오고야 말리니.",
                "---",
                "마음은 미래를 바라느니",
                "현재는 한없이 우울한 것.",
                "모든 것 하염없이 사라지나",
                "지나가 버린 것 그리움이 되리니.",
              ],
              // url: "https://youtu.be/OHORwLnHIEw?t=1690",
            },
            {
              title: "그 꽃",
              author: "서덕준",
              lines: [
                "사랑하는 사람의",
                "눈길 한번 받고 싶어 수많은 날을",
                "눈물로 빚어놓은 아픔일테니",
                "그리움을 펼쳐놓은 절규일테니",
                "---",
                "그 마음, 꺾지 말아줘요",
              ],
              // url: "https://www.youtube.com/watch?v=UOx2Axm0tWI",
            },
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
              progress: 80,
            },
            {
              name: "Git",
              progress: 80,
            },
            {
              name: "PyTorch",
              progress: 70,
            },
            {
              name: "Natural language processing",
              progress: 70,
            },
            {
              name: "Web scraping & data mining",
              progress: 50,
            },
            {
              name: "Graph-based SQL",
              progress: 50,
            },
            {
              name: "Rust",
              progress: 40,
            },
            {
              name: "TypeScript",
              progress: 30,
            },
            {
              name: "SwiftUI",
              progress: 20,
            },
          ],
          soft: "Korean (native), Agile/scrum, Public speaking, LaTeX, Test-driven development, Thai basil chicken",
        },
      },
      {
        id: "contact",
        name: "Contact.txt",
        icon: "inetcfg_2301",
        content: {
          emailText:
            "If you want to discuss more about any of my projects, shoot me an email at",
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
              name: "FaInstagram",
              link: "https://www.instagram.com/su.spense/",
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
