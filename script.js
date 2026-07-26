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
  morrow: { number: '01', title: 'SztuCode', subtitle: '本地 AI Coding Agent', description: 'SztuCode 是从零构建的本地 AI Coding Agent，面向 Claude Code、Codex 类产品的核心运行机制探索。采用“常驻 Daemon + Textual TUI 多客户端”架构，解决长任务执行、工具安全调用和复杂执行过程难以观测的问题，支持流式推理、权限审批、多 Agent 协作及 MCP 扩展。', role: '独立开发者', stack: 'Python', year: '2026.06–至今', link: 'https://github.com/rojim666/SztuCode', images: ['imgs/SztuCode/SztuCode1.png'] },
  radio: { number: '02', title: 'AgentHub', subtitle: '多 Agent AI 协作工作台', description: '基于“字节全栈挑战赛 AgentHub 多 Agent 协作平台”课题开发，面向单一 AI 助手难以完成复杂研发任务、执行过程不透明的问题，构建 IM 式多 Agent 协作工作台。用户可在群聊中提出目标，由 Manager 协调 Codex、Claude Code、OpenCode 等 Coding Agent 在独立任务会话中完成代码生成、文件编辑和工具调用，并查看执行进度、产物与最终结果。', role: '核心开发 / 开源贡献者', stack: 'TypeScript', year: '2026.05–至今  ', link: 'https://github.com/metrogg/AgentHub', images: ['imgs/AgentHub/AgentHub.png'] },
  data: { number: '03', title: 'UT-bench', subtitle: 'Agent 单测生成评测', description: '基于“腾讯mini项目—多模型单测生成效果横向评测”课题开发，是一个基于 Go 的 AI 单元测试生成评测平台，面向不同 LLM、CLI Coding Agent 及其 Skill 在生成单测时，只能看代码输出、难以在相同数据集和工具链下公平比较的问题，平台将“模型/Agent/Skill”统一抽象为被测对象，自动完成数据集发现、测试生成、编译/测试/覆盖率/变异测试、失败归因、报告与 SQLite 结果沉淀，帮助团队进行模型选型、Agent/Skill 方案对比和持续质量监控。', role: '核心开发', stack: 'Go', year: '2026.04-至今', link: 'https://git.tencent.com/ut/ut-bench', images: ['imgs/UT-bench/UT-bench.png'] },
  pulse: { number: '04', title: '红柚起始页', subtitle: '简洁、美观、实用的浏览器起始页', description: '一个注重效率与视觉体验的浏览器起始页，为日常浏览提供清晰、舒适的入口。', role: '独立开发者', stack: 'Web Frontend', year: '2025.04-至今', link: 'https://github.com/rojim666/RedyouBeginning', images: ['imgs/Redyoubegging/Redyoubegging.png'] }
};

Object.assign(projectDetails.morrow, {
  images: ['imgs/SztuCode/SztuCode1.png', 'imgs/SztuCode/SztuCode2.png', 'imgs/SztuCode/SztuCode3.png', 'imgs/SztuCode/SztuCode4.png', 'imgs/SztuCode/SztuCode5.png', 'imgs/SztuCode/SztuCode6.png', 'imgs/SztuCode/SztuCode7.png'],
  video: 'https://easylink.cc/y6v7j8'
});
Object.assign(projectDetails.radio, {
  images: ['imgs/AgentHub/AgentHub.png', 'imgs/AgentHub/AgentHub2.png', 'imgs/AgentHub/AgentHub3.png', 'imgs/AgentHub/AgentHub4.png', 'imgs/AgentHub/AgentHub5.png', 'imgs/AgentHub/AgentHub6.png', 'imgs/AgentHub/AgentHub7.png', 'imgs/AgentHub/AgentHub8.png', 'imgs/AgentHub/AgentHub9.png', 'imgs/AgentHub/AgentHub10.png', 'imgs/AgentHub/AgentHub11.png', 'imgs/AgentHub/AgentHub12.png', 'imgs/AgentHub/AgentHub13.png', 'imgs/AgentHub/AgentHub14.png', 'imgs/AgentHub/AgentHub15.png', 'imgs/AgentHub/AgentHub16.png'],
  video: 'https://easylink.cc/b7y9ck'
});
Object.assign(projectDetails.data, {
  images: ['imgs/UT-bench/UT-bench.png', 'imgs/UT-bench/UT-bench1.png', 'imgs/UT-bench/UT-bench2.png', 'imgs/UT-bench/UT-bench3.png', 'imgs/UT-bench/UT-bench4.png', 'imgs/UT-bench/UT-bench5.png', 'imgs/UT-bench/UT-bench6.png', 'imgs/UT-bench/UT-bench7.png', 'imgs/UT-bench/UT-bench8.png', 'imgs/UT-bench/UT-bench9.png', 'imgs/UT-bench/UT-bench10.png', 'imgs/UT-bench/UT-bench11.png', 'imgs/UT-bench/UT-bench12.png', 'imgs/UT-bench/UT-bench13.png', 'imgs/UT-bench/UT-bench14.png', 'imgs/UT-bench/UT-bench15.png', 'imgs/UT-bench/UT-bench16.png'],
  video: 'https://easylink.cc/foawx3'
});
Object.assign(projectDetails.pulse, {
  images: ['imgs/Redyoubegging/Redyoubegging.png', 'imgs/Redyoubegging/Redyoubegging1.png', 'imgs/Redyoubegging/Redyoubegging2.png', 'imgs/Redyoubegging/Redyoubegging3.png', 'imgs/Redyoubegging/Redyoubegging4.png', 'imgs/Redyoubegging/Redyoubegging5.png', 'imgs/Redyoubegging/Redyoubegging6.png', 'imgs/Redyoubegging/Redyoubegging7.png'],
  video: 'https://easylink.cc/mb5uyg'
});

const modal = document.querySelector('.project-modal');
const modalTitle = document.querySelector('#modal-title');
const modalKicker = document.querySelector('.modal-kicker b');
const modalSubtitle = document.querySelector('.modal-subtitle');
const modalDescription = document.querySelector('.modal-description');
const modalRole = document.querySelector('.modal-role');
const modalStack = document.querySelector('.modal-stack');
const modalYear = document.querySelector('.modal-year');
const modalLink = document.querySelector('.modal-link');
const modalPanel = document.querySelector('.modal-panel');
const modalTabs = document.querySelectorAll('[data-modal-tab]');
const modalPanes = document.querySelectorAll('[data-modal-pane]');
const galleryImage = document.querySelector('.gallery-current-image');
const galleryDots = document.querySelector('.gallery-dots');
const projectVideoLink = document.querySelector('.project-video-link');
const projectVideoPoster = document.querySelector('.project-video-poster');
const lightbox = document.querySelector('.image-lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const resumeModal = document.querySelector('.resume-modal');
const resumeTrigger = document.querySelector('[data-open-resume]');
const resumeViewer = document.querySelector('.resume-viewer');
const resumeImage = resumeViewer.querySelector('img');
let lastTrigger;
let lastResumeTrigger;
let resumeScale = 100;
let currentDetail;
let currentImageIndex = 0;
let activePane = 'details';
let turningPage;

const applyModalPane = (name) => {
  modalTabs.forEach((tab) => {
    const active = tab.dataset.modalTab === name;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  modalPanes.forEach((pane) => pane.classList.toggle('active', pane.dataset.modalPane === name));
  if (name !== 'video' && projectVideoLink) projectVideoLink.style.display = 'none';
  else if (projectVideoLink) {
    projectVideoLink.style.display = '';
    // 切到视频 tab 时才加载封面
    if (projectVideoPoster && currentDetail?.images?.length && !projectVideoPoster.src) {
      projectVideoPoster.src = currentDetail.images[0];
    }
  }
  activePane = name;
};

const showModalPane = (name, animate = true) => {
  if (name === activePane && animate) return;
  if (!animate || !modal.classList.contains('open')) {
    applyModalPane(name);
    return;
  }
  turningPage?.remove();
  const bounds = modalPanel.getBoundingClientRect();
  turningPage = modalPanel.cloneNode(true);
  turningPage.className = 'modal-panel page-turn-copy article-page-turn';
  turningPage.setAttribute('aria-hidden', 'true');
  Object.assign(turningPage.style, {
    position: 'fixed',
    left: `${bounds.left}px`,
    top: `${bounds.top}px`,
    width: `${bounds.width}px`,
    height: `${bounds.height}px`,
    margin: '0',
    transform: 'none'
  });
  document.body.appendChild(turningPage);
  applyModalPane(name);
  requestAnimationFrame(() => turningPage?.classList.add('turn-away'));
  turningPage.addEventListener('animationend', () => {
    turningPage?.remove();
    turningPage = null;
  }, { once: true });
};

const renderGallery = () => {
  const images = currentDetail?.images ?? [];
  const image = images[currentImageIndex];
  galleryImage.src = image ?? '';
  galleryImage.alt = `${currentDetail?.title ?? '项目'} 图片 ${currentImageIndex + 1}`;
  galleryDots.replaceChildren(...images.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `gallery-dot${index === currentImageIndex ? ' active' : ''}`;
    dot.setAttribute('aria-label', `查看第 ${index + 1} 张图片`);
    dot.addEventListener('click', () => { currentImageIndex = index; renderGallery(); });
    return dot;
  }));
};

const closeLightbox = () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
};

const closeResume = () => {
  resumeModal.classList.remove('open');
  resumeModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lastResumeTrigger?.focus();
};

const setResumeScale = (scale) => {
  resumeScale = Math.min(220, Math.max(70, scale));
  resumeImage.style.width = `${resumeScale}%`;
};

const changeGalleryImage = (direction) => {
  const count = currentDetail?.images?.length ?? 0;
  if (!count) return;
  currentImageIndex = (currentImageIndex + (direction === 'next' ? 1 : -1) + count) % count;
  renderGallery();
  if (lightbox.classList.contains('open')) {
    lightboxImage.src = galleryImage.src;
    lightboxImage.alt = galleryImage.alt;
  }
};

const closeModal = () => {
  turningPage?.remove();
  turningPage = null;
  closeLightbox();
  if (projectVideoLink) projectVideoLink.style.display = 'none';
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
    currentDetail = detail;
    currentImageIndex = 0;
    renderGallery();
    if (projectVideoLink) {
      projectVideoLink.style.display = detail.video ? '' : 'none';
      if (detail.video) {
        projectVideoLink.href = detail.video;
      } else {
        projectVideoLink.removeAttribute('href');
      }
      // 封面图延迟到切换视频 tab 时加载
      if (projectVideoPoster) projectVideoPoster.removeAttribute('src');
    }
    showModalPane('details', false);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  });
});

modalTabs.forEach((tab) => tab.addEventListener('click', () => showModalPane(tab.dataset.modalTab)));
document.querySelectorAll('[data-gallery-direction]').forEach((button) => button.addEventListener('click', () => {
  changeGalleryImage(button.dataset.galleryDirection);
}));
document.querySelector('.gallery-image').addEventListener('click', () => {
  lightboxImage.src = galleryImage.src;
  lightboxImage.alt = galleryImage.alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
});
document.querySelectorAll('[data-close-lightbox]').forEach((element) => element.addEventListener('click', closeLightbox));
document.querySelectorAll('[data-lightbox-direction]').forEach((button) => button.addEventListener('click', () => {
  changeGalleryImage(button.dataset.lightboxDirection);
}));
resumeTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  lastResumeTrigger = resumeTrigger;
  resumeModal.classList.add('open');
  resumeModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setResumeScale(100);
  resumeViewer.scrollTo({ top: 0, left: 0 });
  resumeModal.querySelector('.resume-close').focus();
});
document.querySelectorAll('[data-close-resume]').forEach((element) => element.addEventListener('click', closeResume));
document.querySelectorAll('[data-resume-zoom]').forEach((button) => button.addEventListener('click', () => {
  const action = button.dataset.resumeZoom;
  setResumeScale(action === 'in' ? resumeScale + 20 : action === 'out' ? resumeScale - 20 : 100);
}));
document.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => {
  if (lightbox.classList.contains('open')) {
    if (event.key === 'ArrowLeft') changeGalleryImage('previous');
    else if (event.key === 'ArrowRight') changeGalleryImage('next');
    else if (event.key === 'Escape') closeLightbox();
  } else if (event.key === 'Escape' && resumeModal.classList.contains('open')) closeResume();
  else if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
