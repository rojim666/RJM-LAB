const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.16 });
document.querySelectorAll('.reveal, .reveal-card').forEach((el) => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
const progress = document.querySelector('.progress i');
const loader = document.querySelector('.loader');

window.addEventListener('load', () => setTimeout(() => loader.classList.add('done'), 800));
window.addEventListener('pointermove', (event) => {
  glow.style.opacity = '1';
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / scrollable) * 100}%`;
}, { passive: true });

document.querySelectorAll('.visual').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = card.getBoundingClientRect();
    const rotateY = ((event.clientX - box.left) / box.width - .5) * 5;
    const rotateX = ((event.clientY - box.top) / box.height - .5) * -5;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
  });
  card.addEventListener('pointerleave', () => { card.style.transform = ''; });
});

const projectDetails = {
  morrow: { number: '01', title: 'SztuCode', subtitle: '本地 AI Coding Agent', description: 'SztuCode 是从零构建的本地 AI Coding Agent，面向 Claude Code、Codex 类产品的核心运行机制探索。采用“常驻 Daemon + Textual TUI 多客户端”架构，解决长任务执行、工具安全调用和复杂执行过程难以观测的问题，支持流式推理、权限审批、多 Agent 协作及 MCP 扩展。', role: '独立开发者', stack: 'Python', year: '2026.06–至今', link: 'https://github.com/rojim666/SztuCode' },
  radio: { number: '02', title: 'AgentHub', subtitle: '多 Agent AI 协作工作台', description: '基于“字节全栈挑战赛 AgentHub 多 Agent 协作平台”课题开发，面向单一 AI 助手难以完成复杂研发任务、执行过程不透明的问题，构建 IM 式多 Agent 协作工作台。用户可在群聊中提出目标，由 Manager 协调 Codex、Claude Code、OpenCode 等 Coding Agent 在独立任务会话中完成代码生成、文件编辑和工具调用，并查看执行进度、产物与最终结果。', role: '核心开发 / 开源贡献者', stack: 'TypeScript', year: '2026.05–至今  ', link: 'https://github.com/metrogg/AgentHub' },
  data: { number: '03', title: 'UT-bench', subtitle: 'Agent 单测生成评测', description: '基于“腾讯mini项目—多模型单测生成效果横向评测”课题开发，是一个基于 Go 的 AI 单元测试生成评测平台，面向不同 LLM、CLI Coding Agent 及其 Skill 在生成单测时，只能看代码输出、难以在相同数据集和工具链下公平比较的问题，平台将“模型/Agent/Skill”统一抽象为被测对象，自动完成数据集发现、测试生成、编译/测试/覆盖率/变异测试、失败归因、报告与 SQLite 结果沉淀，帮助团队进行模型选型、Agent/Skill 方案对比和持续质量监控。', role: '核心开发', stack: 'Go', year: '2026.04-至今', link: 'https://git.tencent.com/ut/ut-bench' },
  pulse: { number: '04', title: '红柚起始页', subtitle: '简洁、美观、实用的浏览器起始页', description: '一个注重效率与视觉体验的浏览器起始页，为日常浏览提供清晰、舒适的入口。', role: '独立开发者', stack: 'Web Frontend', year: '2025.04-至今', link: 'https://github.com/rojim666/RedyouBeginning' }
};

const modal = document.querySelector('.project-modal');
const modalTitle = document.querySelector('#modal-title');
const modalKicker = document.querySelector('.modal-kicker b');
const modalSubtitle = document.querySelector('.modal-subtitle');
const modalDescription = document.querySelector('.modal-description');
const modalRole = document.querySelector('.modal-role');
const modalStack = document.querySelector('.modal-stack');
const modalYear = document.querySelector('.modal-year');
const modalLink = document.querySelector('.modal-link');
let lastTrigger;

const closeModal = () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastTrigger?.focus();
};

document.querySelectorAll('.project .visual').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    lastTrigger = link;
    const detail = projectDetails[link.closest('.project').dataset.project];
    modalTitle.textContent = detail.title;
    modalKicker.textContent = detail.number;
    modalSubtitle.textContent = detail.subtitle;
    modalDescription.textContent = detail.description;
    modalRole.textContent = detail.role;
    modalStack.textContent = detail.stack;
    modalYear.textContent = detail.year;
    modalLink.href = detail.link;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  });
});

document.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
