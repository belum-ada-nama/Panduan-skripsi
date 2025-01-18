import SectionTitle from "./SectionTitle";
import IconNotebookLM from "../assets/iconTools/notebooklm.svg"
import IconMendeley from "../assets/iconTools/mendeley.svg"
import IconConnectedPapers from "../assets/iconTools/Connected_Papers.svg"
import IconSciHub from "../assets/iconTools/Sci-Hub.svg"
import IconFigma from "../assets/iconTools/figma.svg"
import IconEraser from "../assets/iconTools/Eraser.svg"
import IconCanva from "../assets/iconTools/canva.svg"
import IconPublish from "../assets/iconTools/publish_on_paper.svg"
import IconScispace from "../assets/iconTools/scispace.svg"
import IconClaude from "../assets/iconTools/claude.svg"
import IconPerplexity from "../assets/iconTools/perplexity.svg"
import IconChatGPT from "../assets/iconTools/chatgpt.svg"
import IconGitHubCopilot from "../assets/iconTools/github-copilot-icon 1.svg"
import IconKaggle from "../assets/iconTools/kaggle.svg"
import IconGoogleColab from "../assets/iconTools/colab.svg"
import IconRoboflow from "../assets/iconTools/robloxflow.svg"
import IconAIStudio from "../assets/iconTools/aistudiogoogle.svg"
import IconSpotify from "../assets/iconTools/spotify.svg"
import IconYoutubeMusic from "../assets/iconTools/youtube_music.svg"
import { FaArrowRightLong } from "react-icons/fa6";
import { forwardRef } from "react";
const toolCategories = [
    {
        title: "Publikasi dan Riset",
        tools: [
            { title: "Publish or Perish", icon: IconPublish, link: "https://www.harzing.com/pop.htm" },
            { title: "Google NotebookLM", icon: IconNotebookLM, link: "https://notebooklm.google/" },
            { title: "Mendeley", icon: IconMendeley, link: "https://www.mendeley.com/" },
            { title: "Connected Papers", icon: IconConnectedPapers, link: "https://www.connectedpapers.com/" },
            { title: "Sci-Hub", icon: IconSciHub, link: "https://sci-hub.se/" },
        ],
    },
    {
        title: "Alat Desain dan Presentasi",
        tools: [
            { title: "Figma", icon: IconFigma, link: "https://www.figma.com/" },
            { title: "Eraser.io", icon: IconEraser, link: "https://www.eraser.io/" },
            { title: "Canva", icon: IconCanva, link: "https://www.canva.com/" },
        ],
    },
    {
        title: "Referensi Artikel",
        tools: [
            { title: "IEEE", icon: null, link: "https://ieeexplore.ieee.org/" },
            { title: "Science Direct", icon: null, link: "https://www.sciencedirect.com/" },
            { title: "Paper With Code", icon: null, link: "https://www.paperwithcode.com/" },
            { title: "Arxiv", icon: null, link: "https://arxiv.org/" },
            { title: "Springer", icon: null, link: "https://link.springer.com/" },
            { title: "Google Scholar", icon: null, link: "https://scholar.google.com/" },
            { title: "Sage Jurnal", icon: null, link: "https://journals.sagepub.com/" },
            { title: "Director Of Open Access Journals", icon: null, link: "https://doaj.org/" },
        ],
    },
    {
        title: "Untuk Review",
        tools: [
            { title: "Scispace", icon: IconScispace, link: "https://www.scispace.com/" },
        ],
    },
    {
        title: "Alat untuk Pemrograman dan Data Science",
        tools: [
            { title: "Claude AI", icon: IconClaude, link: "https://claude.ai/" },
            { title: "Perplexity AI", icon: IconPerplexity, link: "https://www.perplexity.ai/" },
            { title: "Chat GPT", icon: IconChatGPT, link: "https://chat.openai.com/" },
        ],
    },
    {
        title: "Penyemangat tapi bukan doi",
        tools: [
            { title: "GitHub Copilot", icon: IconGitHubCopilot, link: "https://copilot.github.com/" },
            { title: "Kaggle", icon: IconKaggle, link: "https://www.kaggle.com/" },
            { title: "Google Colab", icon: IconGoogleColab, link: "https://colab.research.google.com/" },
            { title: "Roboflow", icon: IconRoboflow, link: "https://roboflow.com/" },
            { title: "AI Studio (Google AI Platform)", icon: IconAIStudio, link: "https://ai.google/" },
        ],
    },
    {
        title: "Penyemangat tapi bukan doi",
        tools: [
            { title: "Spotify", icon: IconSpotify, link: "https://www.spotify.com/" },
            { title: "Youtube Music", icon: IconYoutubeMusic, link: "https://music.youtube.com/" },
        ],
    },
];
interface SectionToolsHelperProps {
    ref?: React.RefObject<HTMLDivElement>;
  }
 
const SectionToolsHelper = forwardRef<HTMLDivElement, SectionToolsHelperProps>((_, ref) => {
    return (
      <div ref={ref} className="w-full pb-20 bg-[#060A16] lg:w-[1051px] mx-auto">
        <div className="text-center px-6 py-14 space-y-6 ">
          <SectionTitle
            title="Tools Helper Skripsi"
            description="Platform atau aplikasi AI yang dirancang untuk membantu mahasiswa dalam menyelesaikan Skripsi dengan lebih efisien dan terorganisir"
          />
        </div>
  
        <div className="px-6 columns-1 md:columns-2 space-y-6">
          {toolCategories.map((category, index) => (
            <div
              key={index}
              className="break-inside-avoid p-6 rounded-xl space-y-6 bg-gray-900"
            >
              <h2 className="text-xl text-center font-bold">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.tools.map((tool, idx) => (
                  <ListIcon key={idx} title={tool.title} icon={tool.icon} link={tool.link} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  });
  
  export default SectionToolsHelper;
  
  interface ListIconProps {
    title: string;
    icon: string | null;
    link: string;
  }
  
  function ListIcon({ title, icon, link }: ListIconProps) {
    return (
      <a href={link} target="_blank" className="flex  items-center pb-4 justify-between px-4">
        <div className="flex items-center gap-6">
          {icon && <img className="w-8 h-8 lg:w-14 lg:h-14" src={icon} alt={title} />}
          <h1>{title}</h1>
        </div>
        <FaArrowRightLong />
      </a>
    );
  }