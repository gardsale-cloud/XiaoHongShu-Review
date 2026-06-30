(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();const l={data:null,activeView:"dashboard",activeCategoryId:null,activeChatId:null,activeTab:"tab-analysis",searchQuery:"",outcomeFilter:"all",lang:"ru",activeServiceType:"wedding"},n={ru:{title:"Аудит продаж",subtitle:"Wedding / Bride",statBooked:"Сделки",statConv:"Конверсия",dashTitle:"Категории ошибок",dashDesc:"Выберите тип ошибки для детального изучения проблемных диалогов",serviceWedding:"Свадебные",serviceOther:"Другие услуги",btnBack:"Назад",btnToList:"К списку",searchPlaceholder:"Поиск по имени или тексту чата...",filterAll:"Все",filterNoReply:"No Reply",filterBooked:"Booked",filterInquired:"Inquired",filterObjection:"Objection",tabAnalysis:"Разбор",tabChat:"Чат",tabScreenshots:"Скриншоты",cardEssence:"Суть ошибки",cardFix:"Как исправить",cardScript:"Что ответить",scriptLabel:"RU (Перевод скрипта)",btnCopy:"Копировать",copiedMsg:"Скрипт скопирован в буфер! / 话术已复制！",noChats:"Диалоги не найдены",noScreenshots:"Нет оригинальных скриншотов для этого диалога",emptyHistory:"История переписки пуста",senderClient:"Клиент",senderArtist:"Мастер",errorLabel:"⚠️ Проблемная реплика",onlyText:"📝 Только текст",hasScreenshots:"📷 Скриншоты",messagesCount:"сообщений",slideText:"Слайд {current} из {total}",customRepliesTitle:"Ваши варианты ответа",customRepliesEmpty:"Вы пока не добавили свои варианты ответа.",customReplyPlaceholder:"Введите ваш вариант ответа...",customReplyAdd:"Добавить",customReplyCopied:"Ваш ответ скопирован!",catTitles:{"Сухие ответы (Односложные и неклиентоориентированные)":"Сухие ответы (Односложные и неклиентоориентированные)","Мгновенный сброс цены (Price Dumping)":"Мгновенный сброс цены (Price Dumping)","Нет гибкости по датам и расписанию":"Нет гибкости по датам и расписанию","Долгие ответы (Задержки в коммуникации)":"Долгие ответы (Задержки в коммуникации)","Логистические барьеры и доплаты за выезд (Logistics & Travel Fees)":"Логистические барьеры и доплаты за выезд (Logistics & Travel Fees)","Ошибки при презентации портфолио (Lazy Portfolio Presentation)":"Ошибки при презентации портфолио (Lazy Portfolio Presentation)","Неумение отрабатывать возражения по цене (Poor Price Objection Handling)":"Неумение отрабатывать возражения по цене (Poor Price Objection Handling)","Передача контактов (Блокировки и увод трафика)":"Передача контактов (Блокировки и увод трафика)"},catDescs:{"Сухие и односложные ответы создают у клиента ощущение, что мастер не заинтересован в работе. В премиум-сегменте клиенты ожидают высокого уровня сервиса и вовлеченности с первых сообщений.":"Сухие и односложные ответы создают у клиента ощущение, что мастер не заинтересован в работе. В премиум-сегменте клиенты ожидают высокого уровня сервиса и вовлеченности с первых сообщений.","Отправка цены сразу после вопроса клиента без приветствия и выявления потребностей.":"Отправка цены сразу после вопроса клиента без приветствия и выявления потребностей.","Резкий отказ при занятой дате вместо предложения альтернатив.":"Резкий отказ при занятой дате вместо предложения альтернатив.","Задержка с ответом на часы или дни, когда клиент вынужден пинговать мастера.":"Задержка с ответом на часы или дни, когда клиент вынужден пинговать мастера.","Жесткие условия по оплате проезда и транспортных расходов.":"Жесткие условия по оплате проезда и транспортных расходов.","Лень при показе работ, отсылка искать самостоятельно в профиле.":"Лень при показе работ, отсылка искать самостоятельно в профиле.","Неумение защищать стоимость услуги при сомнениях клиента.":"Неумение защищать стоимость услуги при сомнениях клиента.","Трудности с обходом блокировок и передачей WeChat контактов.":"Трудности с обходом блокировок и передачей WeChat контактов."},modalTitle:"Руководство и легенда",modalBody:`
      <div class="help-section">
        <h4>Как устроено приложение</h4>
        <p>Кликните по любой карточке категории на главном дашборде, чтобы увидеть список чатов. В деталях диалога используйте вкладки сверху для переключения режимов.</p>
      </div>
      <div class="help-section">
        <h4>Диагностика ошибок</h4>
        <p>Нажмите вкладку <strong>«Чат»</strong>, чтобы изучить переписку. Ответ с ошибкой выделен красной рамкой с пометкой <strong>⚠️ Проблемная реплика</strong>. На вкладке <strong>«Разбор»</strong> дается объяснение и готовый скрипт, который можно скопировать.</p>
      </div>
      <div class="help-section">
        <h4>Цветовая легенда статусов</h4>
        <ul class="legend-list">
          <li class="legend-item">
            <div class="legend-dot-wrapper"><span class="status-dot no-reply"></span></div>
            <div class="legend-text"><strong>No Reply (Красный)</strong>Клиент ушел после отправки цены в лоб или сухого ответа.</div>
          </li>
          <li class="legend-item">
            <div class="legend-dot-wrapper"><span class="status-dot booked"></span></div>
            <div class="legend-text"><strong>Booked (Зеленый)</strong>Клиент успешно совершил покупку или добавил WeChat мастера.</div>
          </li>
          <li class="legend-item">
            <div class="legend-dot-wrapper"><span class="status-dot inquired"></span></div>
            <div class="legend-text"><strong>Inquired (Желтый)</strong>Клиент получил ответы на свои вопросы, но не совершил сделку.</div>
          </li>
          <li class="legend-item">
            <div class="legend-dot-wrapper"><span class="status-dot objection"></span></div>
            <div class="legend-text"><strong>Objection (Синий)</strong>Клиент выразил сомнение по поводу цены ("дорого", "скидка").</div>
          </li>
        </ul>
      </div>
    `},zh:{title:"销售审计看板",subtitle:"婚礼跟妆业务",statBooked:"已成单",statConv:"转化率",dashTitle:"错误类别",dashDesc:"选择错误类型以详细分析对话中的沟通硬伤",serviceWedding:"婚礼跟妆",serviceOther:"其他服务",btnBack:"返回",btnToList:"返回列表",searchPlaceholder:"通过客户名称或聊天词句搜索...",filterAll:"全部",filterNoReply:"无回复",filterBooked:"已成交",filterInquired:"仅咨询",filterObjection:"嫌贵",tabAnalysis:"话术诊断",tabChat:"聊天对话",tabScreenshots:"对话截图",cardEssence:"错误本质",cardFix:"改进原则",cardScript:"话术脚本",scriptLabel:"ZH (Скрипт в чат)",btnCopy:"复制",copiedMsg:"话术已复制！/ Скрипт скопирован в буфер!",noChats:"未找到对话记录",noScreenshots:"该对话暂无截图",emptyHistory:"聊天记录为空",senderClient:"客户",senderArtist:"化妆师",errorLabel:"⚠️ 问题回复",onlyText:"📝 纯文本",hasScreenshots:"📷 包含截图",messagesCount:"条消息",slideText:"第 {current} 张，共 {total} 张",customRepliesTitle:"自定义回复",customRepliesEmpty:"您尚未添加自定义回复。",customReplyPlaceholder:"请输入您的回复...",customReplyAdd:"添加",customReplyCopied:"已复制您的回复！",catTitles:{"Сухие ответы (Односложные и неклиентоориентированные)":"敷衍回复 (单字及非客向回复)","Мгновенный сброс цены (Price Dumping)":"瞬间低价抛售 (未做价值铺垫直接报价)","Нет гибкости по датам и расписанию":"档期安排缺乏灵活性 (机械化拒绝)","Долгие ответы (Задержки в коммуникации)":"回复不及时 (回复拖延)","Логистические барьеры и доплаты за выезд (Logistics & Travel Fees)":"物流障碍与出场费 (加收车费门槛)","Ошибки при презентации портфолио (Lazy Portfolio Presentation)":"作品集展示错误 (懒于展示案例)","Неумение отрабатывать возражения по цене (Poor Price Objection Handling)":"价格异议处理不当 (面对嫌贵时应对无力)","Передача контактов (Блокировки и увод трафика)":"平台引流违规 (微信联系方式封锁)"},catDescs:{"Сухие и односложные ответы создают у клиента ощущение, что мастер не заинтересован в работе. В премиум-сегменте клиенты ожидают высокого уровня сервиса и вовлеченности с первых сообщений.":"敷衍和单字回复会让客户觉得化妆师态度傲慢或对订单不感兴趣。在高端市场，客户期望从第一条信息开始就获得专业且热情的服务。","Отправка цены сразу после вопроса клиента без приветствия и выявления потребностей.":"客户刚提问就直接报出底价，没有问候和需求挖掘，使得服务贬值，客户只看到冰冷数字随之流失。","Резкий отказ при занятой дате вместо предложения альтернатив.":"在档期已满时生硬拒绝，而不是主动提供备用方案（如调整时间、推荐助理等），导致潜客流失。","Задержка с ответом на часы или дни, когда клиент вынужден пинговать мастера.":"回复极其缓慢，客户需要反复催促，这在筹备婚礼的焦虑期会让客户觉得化妆师不可靠。","Жесткие условия по оплате проезда и транспортных расходов.":"在首条回复就生硬地把车费、打车费等杂费抛出，这不仅破坏了沟通温度，还给新娘增添了物流顾虑。","Лень при показе работ, отсылка искать самостоятельно в профиле.":"懒得主动发送匹配 of 客照，而是让客户自己去小红书主页翻找，增加了客户的筛选成本。","Неумение защищать стоимость услуги при сомнениях клиента.":"面对客户嫌贵或要求打折时手足无措，要么直接降价贬值，要么傲慢沉默。","Трудности с обходом блокировок и передачей WeChat контактов.":"由于违规发送微信号直接导致小红书平台警告或限流，从而使热点线索在临门一脚时直接蒸发。"},modalTitle:"使用指南与图例说明",modalBody:`
      <div class="help-section">
        <h4>应用结构说明</h4>
        <p>点击主看板的任何错误类别卡片，即可进入对话列表。点击进入具体对话后，使用顶部的选项卡切换不同的诊断视图。</p>
      </div>
      <div class="help-section">
        <h4>错误话术诊断</h4>
        <p>点击<strong>“聊天记录”</strong>选项卡可查看原始对话，存在硬伤的话术会以红色虚线框和<strong>⚠️ 问题回复</strong>标记高亮显示。在<strong>“话术分析”</strong>选项卡中可以阅读改进建议，并一键复制优化后的中文/俄文脚本。</p>
      </div>
      <div class="help-section">
        <h4>对话状态颜色图例</h4>
        <ul class="legend-list">
          <li class="legend-item">
            <div class="legend-dot-wrapper"><span class="status-dot no-reply"></span></div>
            <div class="legend-text"><strong>No Reply (红色)</strong>化妆师直接报价或敷衍回复后，客户流失且未再回复。</div>
          </li>
          <li class="legend-item">
            <div class="legend-dot-wrapper"><span class="status-dot booked"></span></div>
            <div class="legend-text"><strong>Booked (绿色)</strong>成功下单，或者客户成功添加了化妆师的微信。</div>
          </li>
          <li class="legend-item">
            <div class="legend-dot-wrapper"><span class="status-dot inquired"></span></div>
            <div class="legend-text"><strong>Inquired (黄色)</strong>普通咨询，解答了客户疑问但未下单。</div>
          </li>
          <li class="legend-item">
            <div class="legend-dot-wrapper"><span class="status-dot objection"></span></div>
            <div class="legend-text"><strong>Objection (蓝色)</strong>客户对价格提出异议（嫌贵、索要折扣等）。</div>
          </li>
        </ul>
      </div>
    `}},t={app:document.getElementById("app"),dashboardView:document.getElementById("dashboard-view"),listView:document.getElementById("list-view"),detailsView:document.getElementById("details-view"),categoriesContainer:document.getElementById("categories-container"),chatsContainer:document.getElementById("chats-container"),chatMessagesContainer:document.getElementById("chat-messages-container"),screenshotsGallery:document.getElementById("screenshots-gallery"),statBookedCount:document.getElementById("stat-booked-count"),statConversion:document.getElementById("stat-conversion"),listCategoryTitle:document.getElementById("list-category-title"),listCategoryDesc:document.getElementById("list-category-desc"),chatTitleId:document.getElementById("chat-title-id"),chatOutcomeBadge:document.getElementById("chat-outcome-badge"),screenshotsCount:document.getElementById("screenshots-count"),analysisEssence:document.getElementById("analysis-essence"),analysisFix:document.getElementById("analysis-fix"),lblCardEssence:document.getElementById("lbl-card-essence"),lblCardFix:document.getElementById("lbl-card-fix"),analysisScript:document.getElementById("analysis-script"),lblScriptLang:document.getElementById("lbl-script-lang"),lblCardScript:document.getElementById("lbl-card-script"),btnCopyScript:document.getElementById("btn-copy-script"),lblBtnCopyText:document.getElementById("lbl-btn-copy-text"),btnBackToDashboard:document.getElementById("btn-back-to-dashboard"),btnBackToList:document.getElementById("btn-back-to-list"),searchInput:document.getElementById("search-input"),outcomeFilterPills:document.querySelectorAll(".filter-pill"),tabButtons:document.querySelectorAll(".tab-button"),tabPanes:document.querySelectorAll(".tab-pane"),btnCopyZh:document.getElementById("btn-copy-zh"),btnCopyRu:document.getElementById("btn-copy-ru"),btnLangToggle:document.getElementById("btn-lang-toggle"),toast:document.getElementById("toast"),btnHelpToggle:document.getElementById("btn-help-toggle"),helpDialog:document.getElementById("help-dialog"),btnCloseModal:document.getElementById("btn-close-modal"),helpModalBody:document.getElementById("help-modal-body"),lblModalTitle:document.getElementById("lbl-modal-title"),serviceTabs:document.querySelectorAll(".service-tab"),lblServiceWedding:document.getElementById("lbl-service-wedding"),lblServiceOther:document.getElementById("lbl-service-other"),customRepliesList:document.getElementById("custom-replies-list"),txtCustomReply:document.getElementById("txt-custom-reply"),btnAddReply:document.getElementById("btn-add-reply"),lblCustomRepliesTitle:document.getElementById("lbl-custom-replies-title"),lblBtnAddReply:document.getElementById("lbl-btn-add-reply")};async function R(){try{const e=await fetch("app_data.json?v="+Date.now());if(!e.ok)throw new Error("Failed to load data.");l.data=await e.json(),M(),x(),_()}catch(e){console.error("Init error:",e),t.categoriesContainer.innerHTML=`<div class="loading-spinner" style="color: var(--primary);">Failed to load data: ${e.message}</div>`}}function M(){if(!l.data||!l.data.chats)return;const e=l.data.chats.length,s=l.data.chats.filter(c=>c.outcome==="Booked / WeChat Added").length,i=e>0?Math.round(s/e*100):0;t.statBookedCount&&(t.statBookedCount.textContent=s),t.statConversion&&(t.statConversion.textContent=`${i}%`)}function x(){const e=l.lang;document.getElementById("lbl-app-title").textContent=n[e].title,document.getElementById("lbl-app-subtitle").textContent=n[e].subtitle;const s=document.getElementById("lbl-stat-booked"),i=document.getElementById("lbl-stat-conv");s&&(s.textContent=n[e].statBooked),i&&(i.textContent=n[e].statConv);const c=document.getElementById("lbl-dash-title"),a=document.getElementById("lbl-dash-desc");c&&(c.textContent=n[e].dashTitle),a&&(a.textContent=n[e].dashDesc),t.lblServiceWedding&&(t.lblServiceWedding.textContent=n[e].serviceWedding),t.lblServiceOther&&(t.lblServiceOther.textContent=n[e].serviceOther),document.getElementById("lbl-btn-back-dash").textContent=n[e].btnBack,document.getElementById("lbl-btn-back-list").textContent=n[e].btnToList,t.searchInput.placeholder=n[e].searchPlaceholder,document.getElementById("lbl-filter-all").textContent=n[e].filterAll,document.getElementById("lbl-filter-no-reply").textContent=n[e].filterNoReply,document.getElementById("lbl-filter-booked").textContent=n[e].filterBooked,document.getElementById("lbl-filter-inquired").textContent=n[e].filterInquired,document.getElementById("lbl-filter-objection").textContent=n[e].filterObjection,document.getElementById("lbl-tab-analysis").textContent=n[e].tabAnalysis,document.getElementById("lbl-tab-chat").textContent=n[e].tabChat;const o=document.getElementById("lbl-tab-screenshots");if(o&&(o.childNodes[0].textContent=n[e].tabScreenshots+" ("),t.lblBtnCopyText&&(t.lblBtnCopyText.textContent=n[e].btnCopy),t.lblCardScript&&(t.lblCardScript.textContent=n[e].cardScript),t.lblScriptLang&&(t.lblScriptLang.textContent=n[e].scriptLabel),t.lblModalTitle.textContent=n[e].modalTitle,t.helpModalBody.innerHTML=n[e].modalBody,t.btnLangToggle.textContent=e==="ru"?"ZH":"RU",l.activeView==="dashboard")E();else if(l.activeView==="list")y();else if(l.activeView==="details"){const r=l.data.chats.find(u=>u.id===l.activeChatId);r&&(B(r),L(r),T(r),b(r.id))}}function E(){if(!l.data)return;t.categoriesContainer.innerHTML="";const e=l.lang;l.data.categories.forEach(s=>{const c=l.data.chats.filter(u=>{if(u.service_type!==l.activeServiceType)return!1;const d=s.title.split("(")[0].trim().toLowerCase();return u.categories.some(p=>{const g=p.toLowerCase();return d.includes(g)||g.includes(d)})||u.category_title===s.title}).length,a=n[e].catTitles[s.title]||s.title,o=n[e].catDescs[s.description]||s.description,r=document.createElement("div");r.className="category-card",r.setAttribute("data-cat-id",s.id),r.innerHTML=`
      <div class="category-card-content">
        <h3>${a}</h3>
        <p>${o}</p>
      </div>
      <div class="category-badge-area">
        <span class="count-badge">${c}</span>
        <svg class="icon-arrow-right" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    `,r.addEventListener("click",()=>{O(s.id)}),t.categoriesContainer.appendChild(r)})}function O(e){l.activeCategoryId=e,y(),h("list")}function y(){if(!l.data||l.activeCategoryId===null)return;const e=l.data.categories.find(o=>o.id===l.activeCategoryId);t.chatsContainer.innerHTML="";const s=l.lang,i=n[s].catTitles[e.title]||e.title,c=n[s].catDescs[e.description]||e.description;t.listCategoryTitle.textContent=i,t.listCategoryDesc.textContent=c;const a=l.data.chats.filter(o=>{if(o.service_type!==l.activeServiceType)return!1;const r=e.title.split("(")[0].trim().toLowerCase();if(!(o.categories.some(d=>{const p=d.toLowerCase();return r.includes(p)||p.includes(r)})||o.category_title===e.title)||l.outcomeFilter!=="all"&&o.outcome!==l.outcomeFilter)return!1;if(l.searchQuery){const d=l.searchQuery.toLowerCase(),p=o.id.toLowerCase().includes(d),g=o.outcome.toLowerCase().includes(d),S=o.messages.some(f=>f.text&&f.text.toLowerCase().includes(d)),k=o.script_zh&&o.script_zh.toLowerCase().includes(d)||o.script_ru&&o.script_ru.toLowerCase().includes(d);return p||g||S||k}return!0});if(a.length===0){t.chatsContainer.innerHTML=`
      <div class="empty-state">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span>${n[s].noChats}</span>
      </div>
    `;return}a.forEach(o=>{const r=document.createElement("div");r.className="chat-card";const u=o.screenshots.length>0?n[s].hasScreenshots:n[s].onlyText;r.innerHTML=`
      <div class="chat-card-info">
        <div class="chat-card-title">
          <span class="badge-index">${s==="ru"?"Чат":"对话"} ${o.num}</span>
          <span>${o.id}</span>
        </div>
        <div class="chat-card-meta">
          <span class="status-dot ${v(o.outcome)}"></span>
          <span>${o.messages.length} ${n[s].messagesCount}</span>
          <span>${u}</span>
        </div>
      </div>
      <span class="outcome-badge ${v(o.outcome)}">${I(o.outcome)}</span>
    `,r.addEventListener("click",()=>{A(o.id)}),t.chatsContainer.appendChild(r)})}function A(e){l.activeChatId=e;const s=l.data.chats.find(i=>i.id===e);t.chatTitleId.textContent=s.id,t.chatOutcomeBadge.textContent=I(s.outcome),t.chatOutcomeBadge.className=`outcome-badge ${v(s.outcome)}`,t.screenshotsCount.textContent=s.screenshots.length,B(s),L(s),T(s),b(s.id),w("tab-analysis"),h("details")}function B(e){const s=l.lang;t.lblCardEssence&&(t.lblCardEssence.textContent=n[s].cardEssence),t.lblCardFix&&(t.lblCardFix.textContent=n[s].cardFix),s==="ru"?(t.analysisEssence.textContent=e.essence_ru||"Нет описания.",t.analysisFix.textContent=e.fix_ru||"Нет рекомендаций.",t.analysisEssence.classList.remove("zh-text"),t.analysisFix.classList.remove("zh-text")):(t.analysisEssence.textContent=e.essence_zh||"无中文分析。",t.analysisFix.textContent=e.fix_zh||"无中文建议。",t.analysisEssence.classList.add("zh-text"),t.analysisFix.classList.add("zh-text")),s==="ru"?(t.analysisScript.textContent=e.script_ru||"Нет перевода话术。",t.analysisScript.classList.remove("zh-text")):(t.analysisScript.textContent=e.script_zh||"无话术。",t.analysisScript.classList.add("zh-text"))}function L(e){t.chatMessagesContainer.innerHTML="";const s=l.lang;if(!e.messages||e.messages.length===0){t.chatMessagesContainer.innerHTML=`
      <div class="empty-state">
        <span>${n[s].emptyHistory}</span>
      </div>
    `;return}e.messages.forEach(i=>{const c=i.sender.includes("Artist")||i.sender.includes("Makeup")||i.sender.includes("Photographer"),a=c?n[s].senderArtist:n[s].senderClient,o=c?"artist-row":"client-row",r=i.text.trim().toLowerCase(),u=e.problem_reply_zh&&r.includes(e.problem_reply_zh.trim().toLowerCase()),d=e.problem_reply_ru&&r.includes(e.problem_reply_ru.trim().toLowerCase()),p=c&&(u||d),g=document.createElement("div");g.className=`chat-bubble-row ${o} ${p?"has-error":""}`,g.innerHTML=`
      <div class="chat-bubble">
        ${p?`<span class="error-badge">${n[s].errorLabel}</span>`:""}
        <span class="chat-bubble-sender">${a}</span>
        <p class="chat-bubble-text zh-text">${i.text}</p>
        ${i.timestamp?`<span class="chat-bubble-time">${i.timestamp}</span>`:""}
      </div>
    `,t.chatMessagesContainer.appendChild(g)}),setTimeout(()=>{t.chatMessagesContainer.scrollTop=t.chatMessagesContainer.scrollHeight},100)}function T(e){t.screenshotsGallery.innerHTML="";const s=l.lang;if(!e.screenshots||e.screenshots.length===0){t.screenshotsGallery.innerHTML=`
      <div class="empty-state">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <span>${n[s].noScreenshots}</span>
      </div>
    `;return}e.screenshots.forEach((i,c)=>{const a=document.createElement("div");a.className="screenshot-wrapper";const o=n[s].slideText.replace("{current}",c+1).replace("{total}",e.screenshots.length);a.innerHTML=`
      <img src="/${i}" alt="Screenshot ${c+1}" loading="lazy">
      <span class="screenshot-label">${o}</span>
    `,a.addEventListener("click",()=>{a.classList.toggle("fullscreen")}),t.screenshotsGallery.appendChild(a)})}const m="xhs_custom_replies";function P(e){try{return JSON.parse(localStorage.getItem(m)||"{}")[e]||[]}catch{return[]}}function $(e,s){const i=JSON.parse(localStorage.getItem(m)||"{}");i[e]||(i[e]=[]),i[e].push({id:Date.now(),text:s,createdAt:new Date().toISOString()}),localStorage.setItem(m,JSON.stringify(i))}function D(e,s){const i=JSON.parse(localStorage.getItem(m)||"{}");i[e]&&(i[e]=i[e].filter(c=>c.id!==s),i[e].length===0&&delete i[e],localStorage.setItem(m,JSON.stringify(i)))}function b(e){const s=t.customRepliesList,i=l.lang;s.innerHTML="",t.lblCustomRepliesTitle&&(t.lblCustomRepliesTitle.textContent=n[i].customRepliesTitle),t.txtCustomReply&&(t.txtCustomReply.placeholder=n[i].customReplyPlaceholder),t.lblBtnAddReply&&(t.lblBtnAddReply.textContent=n[i].customReplyAdd);const c=P(e);if(c.length===0){s.innerHTML=`
      <div class="custom-replies-empty">
        <span>${n[i].customRepliesEmpty}</span>
      </div>
    `;return}c.forEach((a,o)=>{const r=document.createElement("div");r.className="custom-reply-item",r.innerHTML=`
      <span class="custom-reply-index">${o+1}</span>
      <p class="custom-reply-text">${H(a.text)}</p>
      <div class="custom-reply-actions">
        <button class="btn-copy-reply" title="${n[i].btnCopy}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
        <button class="btn-delete-reply" title="Удалить">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `,r.querySelector(".btn-copy-reply").addEventListener("click",()=>{navigator.clipboard.writeText(a.text).then(()=>{C(n[l.lang].customReplyCopied)})}),r.querySelector(".btn-delete-reply").addEventListener("click",()=>{D(e,a.id),b(e)}),s.appendChild(r)})}function H(e){const s=document.createElement("div");return s.textContent=e,s.innerHTML}function v(e){return e==="No Client Reply"?"no-reply":e==="Booked / WeChat Added"?"booked":e==="Inquired (No order)"?"inquired":e==="Price Objection"?"objection":""}function I(e){const s=l.lang;return e==="No Client Reply"?n[s].filterNoReply:e==="Booked / WeChat Added"?n[s].filterBooked:e==="Inquired (No order)"?n[s].filterInquired:e==="Price Objection"?n[s].filterObjection:e}function h(e){l.activeView=e,t.dashboardView.classList.toggle("active",e==="dashboard"),t.listView.classList.toggle("active",e==="list"),t.detailsView.classList.toggle("active",e==="details");const s=document.querySelector(".view-section.active");s&&(s.scrollTop=0)}function w(e){l.activeTab=e,t.tabButtons.forEach(s=>{s.classList.toggle("active",s.getAttribute("data-tab")===e)}),t.tabPanes.forEach(s=>{s.classList.toggle("active",s.getAttribute("id")===e)})}function _(){t.btnLangToggle.addEventListener("click",()=>{l.lang=l.lang==="ru"?"zh":"ru",x()}),t.serviceTabs.forEach(e=>{e.addEventListener("click",()=>{t.serviceTabs.forEach(s=>s.classList.remove("active")),e.classList.add("active"),l.activeServiceType=e.getAttribute("data-service"),E()})}),t.btnBackToDashboard.addEventListener("click",()=>{h("dashboard")}),t.btnBackToList.addEventListener("click",()=>{h("list")}),t.searchInput.addEventListener("input",e=>{l.searchQuery=e.target.value,y()}),t.outcomeFilterPills.forEach(e=>{e.addEventListener("click",()=>{t.outcomeFilterPills.forEach(s=>s.classList.remove("active")),e.classList.add("active"),l.outcomeFilter=e.getAttribute("data-filter"),y()})}),t.tabButtons.forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("data-tab");w(s)})}),t.btnCopyScript.addEventListener("click",()=>{F(t.analysisScript.textContent)}),t.btnHelpToggle.addEventListener("click",()=>{t.helpDialog.showModal()}),t.btnCloseModal.addEventListener("click",()=>{t.helpDialog.close()}),t.helpDialog.addEventListener("click",e=>{const s=t.helpDialog.getBoundingClientRect();s.top<=e.clientY&&e.clientY<=s.top+s.height&&s.left<=e.clientX&&e.clientX<=s.left+s.width||t.helpDialog.close()}),t.btnAddReply.addEventListener("click",()=>{const e=t.txtCustomReply.value.trim();!e||!l.activeChatId||($(l.activeChatId,e),t.txtCustomReply.value="",b(l.activeChatId))}),t.txtCustomReply.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.key==="Enter"&&(e.preventDefault(),t.btnAddReply.click())})}function F(e){navigator.clipboard.writeText(e).then(()=>{C(n[l.lang].copiedMsg)}).catch(s=>{console.error("Copy failed:",s),C("Failed to copy.")})}function C(e){t.toast.textContent=e,t.toast.classList.add("show"),setTimeout(()=>{t.toast.classList.remove("show")},1500)}window.addEventListener("DOMContentLoaded",R);
