(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return`<span class="material-icons-round mi">${e}</span>`}var t=[{label:`Tỉnh / Thành phố`,items:[{code:`HCM`,name:`TP. Hồ Chí Minh`},{code:`HAN`,name:`Hà Nội`},{code:`DAN`,name:`Đà Nẵng`}]},{label:`Quận / Huyện`,items:[{code:`Q1`,name:`Quận 1`},{code:`Q3`,name:`Quận 3`},{code:`Q7`,name:`Quận 7`},{code:`BT`,name:`Bình Thạnh`},{code:`TD`,name:`Tân Bình`}]},{label:`Đơn vị quản lý`,items:[{code:`DV01`,name:`Chi nhánh Trung tâm`},{code:`DV02`,name:`Chi nhánh Phía Bắc`},{code:`DV03`,name:`Chi nhánh Phía Nam`}]},{label:`Loại trạm`,items:[{code:`CAT01`,name:`Trạm áp lực`},{code:`CAT02`,name:`Trạm đo lưu lượng`},{code:`CAT03`,name:`Trạm Logger`}]},{label:`Trạm`,items:[{code:`1020`,name:`1020 – 10M345B (SOFREL)`},{code:`1022`,name:`1022 – 10N234B (Logger PHT)`},{code:`1035`,name:`1035 – 10P456C (DMA Zone 3)`},{code:`1048`,name:`1048 – 10Q789D (Offline)`},{code:`1055`,name:`1055 – 10R111E (Zone 5)`}]}],n=[{id:`s1`,code:`1020`,name:`10M345B (SOFREL)`,status:`on`,time:`22-04-2026 14:00`,params:[{label:`Áp lực vào (m)`,value:27.1},{label:`Áp lực ra (m)`,value:17.94,span:`2col`},{label:`Lưu lượng thuận (m³/h)`,value:83.2},{label:`Lưu lượng nghịch (m³/h)`,value:0,state:`zero`},{label:`Sản lượng (m³)`,value:0,state:`zero`}]},{id:`s2`,code:`1022`,name:`10N234B (Logger PHT)`,status:`on`,time:`22-04-2026 14:30`,params:[{label:`Vận tốc (m/s)`,value:.43},{label:`Pin Logger (Vol)`,value:12.21,span:`2col`},{label:`Áp lực vào (m)`,value:23.7},{label:`Áp lực ra (m)`,value:15.48,span:`2col`},{label:`Lưu lượng thuận (m³/h)`,value:48.92},{label:`Sản lượng (m³)`,value:`2,209.861`}]},{id:`s3`,code:`1035`,name:`10P456C (DMA Zone 3)`,status:`amber`,time:`22-04-2026 13:45`,params:[{label:`Áp lực vào (m)`,value:42.5,state:`warn`},{label:`Áp lực ra (m)`,value:18.3,span:`2col`},{label:`Lưu lượng thuận (m³/h)`,value:127.6},{label:`Sản lượng (m³)`,value:`8,432.1`}]},{id:`s4`,code:`1048`,name:`10Q789D (Offline)`,status:`off`,time:`21-04-2026 08:00`,params:[{label:`Trạng thái`,value:`Mất kết nối`,state:`danger`}]}];function r(e){return`<span class="${`param-badge${e.state?` ${e.state}`:``}`}">${e.value}</span>`}function i(e){return[`Áp lực vào (m)`,`Áp lực ra (m)`,`Lưu lượng thuận (m³/h)`,`Lưu lượng nghịch (m³/h)`].includes(e)}function a(e){let t=e.filter(e=>i(e.label));return t.length===0?``:`
    <div class="card-metrics">
      ${t.map(e=>`
        <div class="metric-item">
          <span class="metric-label">${e.label}</span>
          ${r(e)}
        </div>
      `).join(``)}
    </div>`}function o(e){let t=`<div class="params">`,n=0;for(;n<e.length;){let i=e[n],a=e[n+1];i.span===`2col`&&a&&a.span===`2col`?(t+=`
        <div class="param-2col">
          <div class="param-row">
            <span class="param-label">${i.label}</span>
            ${r(i)}
          </div>
          <div class="param-row">
            <span class="param-label">${a.label}</span>
            ${r(a)}
          </div>
        </div>`,n+=2):(t+=`
        <div class="param-row">
          <span class="param-label">${i.label}</span>
          ${r(i)}
        </div>`,n++)}return t+=`</div>`,t}function s(t){let n=t.status===`off`?`status-dot off`:t.status===`amber`?`status-dot amber`:`status-dot`,r=t.status===`off`?`card-accent-bar red`:t.status===`amber`?`card-accent-bar amber`:`card-accent-bar`;return`
    <div class="station-card" id="card-${t.id}" data-station-id="${t.id}">
      <div class="${r}"></div>
      <div class="card-body">
        <div class="card-header">
          <div class="card-title-group">
            <div class="${n}"></div>
            <div class="station-name">${t.code} – ${t.name}</div>
          </div>
          <div class="card-side">
            <div class="card-meta">
              ${e(`schedule`)} ${t.time}
            </div>
            <div class="card-actions">
              <button class="action-btn" title="Chi tiết trạm" data-open-detail="${t.id}">${e(`expand_more`)}</button>
              <button class="action-btn" title="Xem biểu đồ">${e(`show_chart`)}</button>
            </div>
          </div>
        </div>
        ${a(t.params)}
      </div>
    </div>`}function c(){let t=n.map(s).join(``);return`
  <div class="screen-wrap">
    <span class="screen-label">Màn hình chính · Tức thời</span>
    <div class="phone">
      <div class="notch"></div>

      <!-- Status Bar -->
      <div class="status-bar">
        <span>14:00</span>
        <div class="status-bar-right">
          ${e(`signal_cellular_4_bar`)}
          ${e(`wifi`)}
          ${e(`battery_full`)}
        </div>
      </div>

      <!-- App Bar -->
      <div class="app-bar">
        <button class="icon-btn" id="btn-menu">${e(`menu`)}</button>
        <span class="title">Dữ Liệu Tức Thời</span>
        <div class="user-chip">
          <div class="avatar">U</div>
          <span>User Viewer</span>
          ${e(`expand_more`)}
        </div>
        <span class="flag-icon">🇻🇳</span>
      </div>

      <!-- Scrollable Body -->
      <div class="body" id="phone-body">

      <!-- Search Row -->
      <div class="search-row">
        <div class="search-bar">
          ${e(`search`)}
          <input id="search-input" placeholder="Tìm kiếm trạm..." />
        </div>
        <button class="filter-trigger" id="btn-filter" title="Bộ lọc nâng cao">
          ${e(`tune`)}
        </button>
      </div>

      <!-- Quick-filter Chip Strip -->
      <div class="chip-strip">
        <button class="qchip active" id="chip-all" data-filter="all">Tất cả</button>
        <button class="qchip" id="chip-connected" data-filter="connected">${e(`circle`)} Kết nối</button>
        <button class="qchip" id="chip-disconnected" data-filter="disconnected">${e(`cancel`)} Mất kết nối</button>
        <button class="qchip" id="chip-exceeded" data-filter="exceeded">${e(`warning`)} Vượt ngưỡng</button>
        <button class="qchip" id="chip-today" data-filter="today">${e(`today`)} Hôm nay</button>
      </div>

      <!-- Sheet Backdrop -->
      <div class="sheet-backdrop" id="sheet-backdrop"></div>

      <!-- Advanced Filter Bottom Sheet -->
      <div class="bottom-sheet" id="bottom-sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title">
          Bộ lọc nâng cao
          <button class="sheet-close" id="btn-sheet-close">${e(`close`)}</button>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-label">Trạng thái kết nối</div>
          <div class="sheet-chips">
            <div class="sheet-chip active" data-group="status" data-val="all">Tất cả</div>
            <div class="sheet-chip" data-group="status" data-val="connected">Kết nối</div>
            <div class="sheet-chip" data-group="status" data-val="disconnected">Mất kết nối</div>
          </div>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-label">Mức độ vượt ngưỡng</div>
          <div class="sheet-chips">
            <div class="sheet-chip active" data-group="exceed" data-val="all">Tất cả</div>
            <div class="sheet-chip" data-group="exceed" data-val="normal">Bình thường</div>
            <div class="sheet-chip" data-group="exceed" data-val="exceeded">Vượt ngưỡng</div>
          </div>
        </div>

        <div class="sheet-divider"></div>

        <div class="sheet-section">
          <div class="sheet-section-label">Lọc theo trạm</div>
          <div class="sheet-row" id="btn-open-station-sheet">
            <span id="station-selection-label">Chọn trạm...</span>
            <div class="sheet-row-right">
              <span id="station-selection-count" class="selection-badge" style="display:none"></span>
              ${e(`chevron_right`)}
            </div>
          </div>
        </div>

        <div class="sheet-divider"></div>

        <div class="sheet-section">
          <div class="sheet-section-label">Sắp xếp</div>
          <div class="sheet-row"><span>Áp lực vào – Thấp → Cao</span><div class="sheet-row-right">${e(`arrow_upward`)}</div></div>
          <div class="sheet-row"><span>Áp lực vào – Cao → Thấp</span><div class="sheet-row-right">${e(`arrow_downward`)}</div></div>
          <div class="sheet-row"><span>Áp lực ra – Thấp → Cao</span><div class="sheet-row-right">${e(`arrow_upward`)}</div></div>
          <div class="sheet-row"><span>Áp lực ra – Cao → Thấp</span><div class="sheet-row-right">${e(`arrow_downward`)}</div></div>
        </div>

        <div class="sheet-divider"></div>

        <div class="sheet-section">
          <div class="sheet-row">
            <span>Hiển thị trạm không có dữ liệu</span>
            <div class="toggle-switch" id="toggle-nodata"></div>
          </div>
        </div>

        <div class="sheet-actions">
          <button class="btn-sheet-reset" id="btn-sheet-reset">Xóa bộ lọc</button>
          <button class="btn-sheet-apply" id="btn-sheet-apply">Áp dụng</button>
        </div>
      </div>

      <!-- Station Drill-down Sheet (Level 2) -->
      <div class="bottom-sheet station-sheet" id="station-sheet">
        <div class="sheet-handle"></div>
        <div class="station-sheet-header">
          <button class="icon-btn" id="btn-station-back">${e(`arrow_back`)}</button>
          <div class="station-sheet-title" id="station-sheet-title">Lọc theo trạm</div>
          <button class="sheet-close" id="btn-station-close">${e(`close`)}</button>
        </div>

        <div class="station-breadcrumb" id="station-breadcrumb"></div>

        <div class="station-sheet-search">
          <div class="search-bar" style="margin:0">
            ${e(`search`)}
            <input id="station-search-input" placeholder="Tìm trong danh sách..." />
          </div>
        </div>

        <div class="drill-level-label" id="drill-level-label">Chọn Tỉnh / Thành phố</div>
        <div class="drill-list" id="drill-list"></div>

        <div class="selected-tags" id="selected-tags" style="display:none">
          <div class="sheet-section-label" style="margin-bottom:8px">Đã chọn</div>
          <div class="tags-wrap" id="tags-wrap"></div>
        </div>

        <div class="sheet-actions" style="padding-top:12px">
          <button class="btn-sheet-reset" id="btn-station-clear">Xóa chọn</button>
          <button class="btn-sheet-apply" id="btn-station-apply">Áp dụng</button>
        </div>
      </div>

      <div class="bottom-sheet realtime-detail-sheet" id="realtime-detail-sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title">
          <span id="realtime-detail-title">Chi tiáº¿t tráº¡m</span>
          <button class="sheet-close" id="btn-realtime-detail-close">${e(`close`)}</button>
        </div>
        <div class="realtime-detail-head">
          <div class="realtime-detail-status" id="realtime-detail-status"></div>
          <div class="realtime-detail-time" id="realtime-detail-time"></div>
        </div>
        <div class="sheet-section">
          <div class="sheet-section-label">Chỉ số</div>
          <div id="realtime-detail-params"></div>
        </div>
      </div>

      <!-- Export FAB -->
      <button class="export-fab" id="btn-export" title="Xuất file">
        ${e(`file_download`)}
      </button>

        <!-- Stats Bar -->
        <div class="stats-bar">
          ${e(`hub`)} Tổng trạm: <strong id="count-label">164</strong>
        </div>

        <!-- Station Cards -->
        <div class="station-list" id="station-list">
          ${t}
          <p class="no-data" id="no-data" style="display:none">Không có trạm nào phù hợp</p>
        </div>

      </div><!-- /body -->

      <!-- Bottom Nav -->
      <div class="bottom-nav">
        <div class="nav-item" id="nav-home">${e(`home`)} <span>Trang chủ</span></div>
        <div class="nav-item active" id="nav-realtime">${e(`bolt`)} <span>Tức thời</span></div>
        <div class="nav-item" id="nav-map">${e(`map`)} <span>Bản đồ</span></div>
        <div class="nav-item" id="nav-settings">${e(`settings`)} <span>Cài đặt</span></div>
      </div>

    </div><!-- /phone -->
  </div>`}function l(){function r(){document.getElementById(`sheet-backdrop`)?.classList.add(`open`)}function i(){let e=document.getElementById(`bottom-sheet`)?.classList.contains(`open`),t=document.getElementById(`station-sheet`)?.classList.contains(`open`),n=document.getElementById(`realtime-detail-sheet`)?.classList.contains(`open`);!e&&!t&&!n&&document.getElementById(`sheet-backdrop`)?.classList.remove(`open`)}function a(t){let n=document.getElementById(`realtime-detail-title`),r=document.getElementById(`realtime-detail-status`),i=document.getElementById(`realtime-detail-time`),a=document.getElementById(`realtime-detail-params`);if(n&&(n.textContent=`${t.code} - ${t.name}`),i&&(i.innerHTML=`${e(`schedule`)} ${t.time}`),r){let e=t.status===`off`?`Mất kết nối`:t.status===`amber`?`Vượt ngưỡng`:`Kết nối tốt`;r.className=`realtime-detail-status ${t.status}`,r.innerHTML=`<span class="detail-status-dot"></span>${e}`}a&&(a.innerHTML=o(t.params))}function s(e){let t=n.find(t=>t.id===e);t&&(a(t),document.getElementById(`realtime-detail-sheet`)?.classList.add(`open`),r())}function c(){document.getElementById(`realtime-detail-sheet`)?.classList.remove(`open`),i()}document.getElementById(`search-input`)?.addEventListener(`input`,e=>{let t=e.target.value.toLowerCase().trim(),r=0;n.forEach(e=>{let n=document.getElementById(`card-${e.id}`),i=!t||e.code.toLowerCase().includes(t)||e.name.toLowerCase().includes(t);n&&(n.style.display=i?``:`none`),i&&r++});let i=document.getElementById(`count-label`);i&&(i.textContent=String(r));let a=document.getElementById(`no-data`);a&&(a.style.display=r===0?``:`none`)}),document.querySelectorAll(`.qchip`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.qchip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.filter,r=document.getElementById(`count-label`),i=t===`all`?n:t===`connected`?n.filter(e=>e.status===`on`):t===`disconnected`?n.filter(e=>e.status===`off`):t===`exceeded`?n.filter(e=>e.status===`amber`):n;n.forEach(e=>{let t=document.getElementById(`card-${e.id}`);t&&(t.style.display=i.includes(e)?``:`none`)}),r&&(r.textContent=String(i.length))})});let l=()=>{r(),document.getElementById(`bottom-sheet`)?.classList.add(`open`)},u=()=>{document.getElementById(`bottom-sheet`)?.classList.remove(`open`),i()};document.getElementById(`btn-filter`)?.addEventListener(`click`,l),document.getElementById(`btn-sheet-close`)?.addEventListener(`click`,u),document.getElementById(`sheet-backdrop`)?.addEventListener(`click`,()=>{u(),y(),c()}),document.getElementById(`btn-sheet-apply`)?.addEventListener(`click`,u),document.getElementById(`btn-sheet-reset`)?.addEventListener(`click`,()=>{document.querySelectorAll(`.sheet-chip`).forEach(e=>{e.classList.remove(`active`),e.dataset.val===`all`&&e.classList.add(`active`)}),_(),u()}),document.querySelectorAll(`.sheet-chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.group;document.querySelectorAll(`.sheet-chip[data-group="${t}"]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)})}),document.getElementById(`toggle-nodata`)?.addEventListener(`click`,e=>{e.currentTarget.classList.toggle(`on`)}),document.getElementById(`btn-export`)?.addEventListener(`click`,()=>{alert(`Xuất file · Export dialog sẽ mở ở đây`)}),document.getElementById(`btn-realtime-detail-close`)?.addEventListener(`click`,c),document.querySelectorAll(`.station-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.stationId;t&&s(t)})}),document.querySelectorAll(`[data-open-detail]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.openDetail;n&&s(n)})}),document.querySelectorAll(`.action-btn[title="Xem biá»ƒu Ä‘á»“"]`).forEach(e=>{e.addEventListener(`click`,e=>{e.stopPropagation()})});let d=0,f=[],p=new Set;function m(e=``){let n=document.getElementById(`drill-list`),r=t[d],i=d===t.length-1;n.innerHTML=r.items.filter(t=>!e||t.name.toLowerCase().includes(e.toLowerCase())).map(e=>{let t=i&&p.has(e.code);return`
        <div class="drill-item${t?` checked`:``}" data-code="${e.code}" data-name="${e.name}">
          <div class="drill-item-left">
            <span class="material-icons-round mi drill-item-icon">${i?`router`:`folder_open`}</span>
            <span class="drill-item-name">${e.name}</span>
          </div>
          <div class="drill-item-right">
            ${i?`<span class="drill-check material-icons-round mi">${t?`check_circle`:`radio_button_unchecked`}</span>`:`<span class="material-icons-round mi" style="color:var(--text-muted);font-size:18px">chevron_right</span>`}
          </div>
        </div>`}).join(``);let a=document.getElementById(`selected-tags`),o=document.getElementById(`tags-wrap`);a.style.display=i&&p.size>0?``:`none`,o.innerHTML=Array.from(p).map(e=>{let n=t[4].items.find(t=>t.code===e);return n?`<span class="station-tag" data-code="${e}">${n.name} <span class="tag-remove material-icons-round mi">close</span></span>`:``}).join(``),n.querySelectorAll(`.drill-item`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.code,r=t.dataset.name;i?(p.has(n)?p.delete(n):p.add(n),m(e),g()):(f.push(r),d++,h())})}),o.querySelectorAll(`.tag-remove`).forEach(t=>{t.addEventListener(`click`,n=>{n.stopPropagation();let r=t.closest(`.station-tag`).dataset.code;p.delete(r),m(e),g()})})}function h(){let e=t[d];document.getElementById(`drill-level-label`).textContent=e.label;let n=document.getElementById(`station-breadcrumb`);n.innerHTML=f.map((e,t)=>`<span class="bc-item${t===f.length-1?` bc-active`:``}" data-depth="${t}">${e}</span>`+(t<f.length-1?`<span class="bc-sep material-icons-round mi">chevron_right</span>`:``)).join(``),n.style.display=f.length?``:`none`,document.getElementById(`btn-station-back`).style.visibility=d>0?`visible`:`hidden`,document.getElementById(`station-search-input`).value=``,m(),n.querySelectorAll(`.bc-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.depth||`0`);d=t+1,f=f.slice(0,t+1),h()})})}function g(){let e=document.getElementById(`station-selection-label`),n=document.getElementById(`station-selection-count`);p.size===0?(e.textContent=`Chọn trạm...`,e.style.color=`var(--text-muted)`,n.style.display=`none`):(e.textContent=p.size===1?t[4].items.find(e=>e.code===Array.from(p)[0])?.name||`Đã chọn`:`${p.size} trạm được chọn`,e.style.color=`var(--accent)`,n.textContent=String(p.size),n.style.display=`inline-flex`)}function _(){p.clear(),f=[],d=0,g()}let v=()=>{d=0,f=[],document.getElementById(`station-sheet`)?.classList.add(`open`),r(),h()},y=()=>{document.getElementById(`station-sheet`)?.classList.remove(`open`),i()};document.getElementById(`btn-open-station-sheet`)?.addEventListener(`click`,()=>{u(),v()}),document.getElementById(`btn-station-back`)?.addEventListener(`click`,()=>{d>0&&(d--,f.pop(),h())}),document.getElementById(`btn-station-close`)?.addEventListener(`click`,y),document.getElementById(`btn-station-apply`)?.addEventListener(`click`,()=>{g(),y()}),document.getElementById(`btn-station-clear`)?.addEventListener(`click`,()=>{p.clear(),m(),g()}),document.getElementById(`station-search-input`)?.addEventListener(`input`,e=>{m(e.target.value)}),[`nav-home`,`nav-realtime`,`nav-map`,`nav-settings`].forEach(e=>{document.getElementById(e)?.addEventListener(`click`,()=>{document.querySelectorAll(`#alert-body ~ .bottom-nav .nav-item, .phone:first-of-type .nav-item`).forEach(e=>e.classList.remove(`active`)),document.getElementById(e)?.classList.add(`active`)})})}var u=[{id:`a1`,stationName:`1014 - 10J23A ( Logger PHT )`,status:`disconnect`,statusLabel:`Mất kết nối`,transferTime:`21-04-2026 15:40`,timeAgo:`1 ngày trước`,description:`Mất kết nối từ`},{id:`a2`,stationName:`ĐHKH_BVTV_02 ( PWC Log )`,status:`disconnect`,statusLabel:`Mất kết nối`,transferTime:`19-04-2026 22:12`,timeAgo:`3 ngày trước`,description:`Mất kết nối từ`},{id:`a3`,stationName:`ĐHKH CC KHUÔNG VIỆT ( PHAM LAM )`,status:`disconnect`,statusLabel:`Mất kết nối`,transferTime:`12-01-2026 05:00`,timeAgo:`3 tháng trước`,description:`Mất kết nối từ`},{id:`a4`,stationName:`ĐHKH_BO TƯ LỆNH ( PWC Log )`,status:`connected`,statusLabel:`Đã kết nối`,transferTime:`22-04-2026 08:00`,timeAgo:`14 giờ trước`,description:`Trạm có lưu lượng thuận bằng 0 liên tiếp trong 48 giờ`},{id:`a5`,stationName:`1035 - 10P456C ( DMA Zone 3 )`,status:`exceed`,statusLabel:`Vượt ngưỡng`,transferTime:`22-04-2026 13:45`,timeAgo:`2 giờ trước`,description:`Vượt ngưỡng tham số`,paramExceed:[`Áp lực vào (P1) = 42.5 m ↱ (ngưỡng tối đa: 40 m)`,`Lưu lượng thuận (Q1) = 127.6 m³/h ↱ (ngưỡng tối đa: 100 m³/h)`]}];function d(t){let n=t.status===`disconnect`,r=t.status===`exceed`,i=n?`wifi_off`:r?`warning`:`wifi`,a=n?`alert-status disconnect`:r?`alert-status exceed`:`alert-status connected`,o=t.paramExceed?.map(t=>`<div class="alert-param-row">
       ${e(`arrow_upward`)}<span>${t}</span>
     </div>`).join(``)??``,s=n?`<div class="alert-body">
         <span class="alert-body-prefix">${t.description}</span>
         ${e(`schedule`)}
         <span class="alert-time">${t.transferTime}</span>
         <span class="alert-ago">&nbsp;&ndash;&nbsp;${t.timeAgo}</span>
       </div>`:r?`<div class="alert-body">
         <span class="alert-body-prefix">${t.description}</span>
         ${e(`schedule`)}
         <span class="alert-time">${t.transferTime}</span>
         <span class="alert-ago">&nbsp;&ndash;&nbsp;${t.timeAgo}</span>
       </div>
       <div class="alert-params">${o}</div>`:`<div class="alert-body">
         <span class="alert-body-text">${t.description}</span>
       </div>`;return`
    <div class="alert-card" id="acard-${t.id}" data-status="${t.status}">
      <div class="alert-card-header">
        <span class="alert-station-name">${t.stationName}</span>
        <span class="${a}">
          ${e(i)}
          ${t.statusLabel}
        </span>
      </div>
      ${s}
    </div>`}function f(){let t=u.map(d).join(``),n=u.length;return`
  <div class="screen-wrap">
    <span class="screen-label">Dashboard · Cảnh báo</span>
    <div class="phone">
      <div class="notch"></div>

      <!-- Status Bar (shared) -->
      <div class="status-bar">
        <span>14:00</span>
        <div class="status-bar-right">
          ${e(`signal_cellular_4_bar`)}
          ${e(`wifi`)}
          ${e(`battery_full`)}
        </div>
      </div>

      <!-- App Bar (identical to Tức thời) -->
      <div class="app-bar">
        <button class="icon-btn" id="abtn-menu">${e(`menu`)}</button>
        <span class="title">Dashboard</span>
        <div class="user-chip">
          <div class="avatar">U</div>
          <span>User Viewer</span>
          ${e(`expand_more`)}
        </div>
        <span class="flag-icon">🇻🇳</span>
      </div>

      <!-- Scrollable Body -->
      <div class="body" id="alert-body">

        <!-- Blue section banner (Cảnh báo widget header) -->
        <div class="alert-page-header">
          <span class="alert-page-title">${e(`notifications_active`)} Cảnh báo</span>
          <span class="alert-count-badge" id="alert-count-badge">${n}</span>
        </div>

        <!-- Filter row: search + failure-type chips -->
        <div class="alert-filter-row">
          <div class="search-bar" style="flex:1">
            ${e(`search`)}
            <input id="alert-search" placeholder="Nhập tên trạm để tìm kiếm..." />
          </div>
          <div class="alert-type-chips">
            <button class="alert-chip active" id="achip-all"  data-afilter="all">Tất cả</button>
            <button class="alert-chip"        id="achip-dis"  data-afilter="disconnect">${e(`wifi_off`)} Thiết bị</button>
            <button class="alert-chip"        id="achip-exc"  data-afilter="exceed">${e(`warning`)} Tham số</button>
          </div>
        </div>

        <!-- Alert cards -->
        <div class="alert-list" id="alert-list">
          ${t}
          <p class="no-data" id="alert-no-data" style="display:none">Không có cảnh báo nào phù hợp</p>
        </div>

      </div><!-- /body -->

      <!-- Bottom Nav (shared style) -->
      <div class="bottom-nav">
        <div class="nav-item active" id="anav-home">${e(`home`)} <span>Trang chủ</span></div>
        <div class="nav-item" id="anav-realtime">${e(`bolt`)} <span>Tức thời</span></div>
        <div class="nav-item" id="anav-map">${e(`map`)} <span>Bản đồ</span></div>
        <div class="nav-item" id="anav-settings">${e(`settings`)} <span>Cài đặt</span></div>
      </div>

    </div><!-- /phone -->
  </div>`}function p(){document.getElementById(`alert-search`)?.addEventListener(`input`,t=>{let n=t.target.value.toLowerCase().trim();e(document.querySelector(`.alert-chip.active`)?.dataset.afilter??`all`,n)}),document.querySelectorAll(`.alert-chip`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`.alert-chip`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),e(t.dataset.afilter??`all`,document.getElementById(`alert-search`)?.value.toLowerCase().trim()??``)})});function e(e,t){let n=0;u.forEach(r=>{let i=document.getElementById(`acard-${r.id}`),a=!t||r.stationName.toLowerCase().includes(t),o=e===`all`||r.status===e,s=a&&o;i&&(i.style.display=s?``:`none`),s&&n++});let r=document.getElementById(`alert-count-badge`);r&&(r.textContent=String(n));let i=document.getElementById(`alert-no-data`);i&&(i.style.display=n===0?``:`none`)}[`anav-home`,`anav-realtime`,`anav-map`,`anav-settings`].forEach(e=>{document.getElementById(e)?.addEventListener(`click`,()=>{[`anav-home`,`anav-realtime`,`anav-map`,`anav-settings`].forEach(e=>document.getElementById(e)?.classList.remove(`active`)),document.getElementById(e)?.classList.add(`active`)})})}var m=[{id:`h1`,stationCode:`1014`,stationName:`1014 - 10J23A (Logger PHT)`,alertType:`disconnect`,alertTypeLabel:`Mất kết nối`,startTime:`2026-04-21`,startDisplay:`21-04-2026 15:40`,endDisplay:`22-04-2026 08:12`,duration:`16 giờ 32 phút`,description:`Mất kết nối thiết bị`,resolvedBy:`Hệ thống tự khôi phục`},{id:`h2`,stationCode:`1035`,stationName:`1035 - 10P456C (DMA Zone 3)`,alertType:`exceed`,alertTypeLabel:`Vượt ngưỡng`,startTime:`2026-04-22`,startDisplay:`22-04-2026 13:45`,endDisplay:`22-04-2026 15:10`,duration:`1 giờ 25 phút`,description:`Áp lực vượt ngưỡng (P1 = 42.5 m)`,resolvedBy:void 0},{id:`h3`,stationCode:`1048`,stationName:`1048 - 10Q789D (Offline)`,alertType:`disconnect`,alertTypeLabel:`Mất kết nối`,startTime:`2026-04-19`,startDisplay:`19-04-2026 22:12`,endDisplay:`20-04-2026 06:00`,duration:`7 giờ 48 phút`,description:`Mất kết nối thiết bị`,resolvedBy:`Kỹ thuật viên xử lý`},{id:`h4`,stationCode:`1022`,stationName:`1022 - 10N234B (Logger PHT)`,alertType:`zero_flow`,alertTypeLabel:`Lưu lượng bằng 0`,startTime:`2026-04-20`,startDisplay:`20-04-2026 00:00`,endDisplay:`22-04-2026 08:00`,duration:`56 giờ`,description:`Lưu lượng thuận bằng 0 liên tiếp`,resolvedBy:void 0},{id:`h5`,stationCode:`1020`,stationName:`1020 - 10M345B (SOFREL)`,alertType:`exceed`,alertTypeLabel:`Vượt ngưỡng`,startTime:`2026-04-18`,startDisplay:`18-04-2026 09:30`,endDisplay:`18-04-2026 11:00`,duration:`1 giờ 30 phút`,description:`Lưu lượng thuận vượt ngưỡng (Q1 = 135 m³/h)`,resolvedBy:`Tự động phân tích`},{id:`h6`,stationCode:`1035`,stationName:`1035 - 10P456C (DMA Zone 3)`,alertType:`disconnect`,alertTypeLabel:`Mất kết nối`,startTime:`2026-04-15`,startDisplay:`15-04-2026 03:20`,endDisplay:`15-04-2026 07:45`,duration:`4 giờ 25 phút`,description:`Mất kết nối tạm thời`,resolvedBy:`Hệ thống tự khôi phục`}],h=[{code:`1014`,name:`1014 - 10J23A (Logger PHT)`,district:`Quận 1`,unit:`Chi nhánh TT`,category:`Logger`},{code:`1020`,name:`1020 - 10M345B (SOFREL)`,district:`Quận 3`,unit:`Chi nhánh TT`,category:`Áp lực`},{code:`1022`,name:`1022 - 10N234B (Logger PHT)`,district:`Quận 7`,unit:`Chi nhánh TT`,category:`Logger`},{code:`1035`,name:`1035 - 10P456C (DMA Zone 3)`,district:`Bình Thạnh`,unit:`Chi nhánh PN`,category:`Lưu lượng`},{code:`1048`,name:`1048 - 10Q789D (Offline)`,district:`Tân Bình`,unit:`Chi nhánh PB`,category:`Áp lực`},{code:`1055`,name:`1055 - 10R111E (Zone 5)`,district:`Quận 7`,unit:`Chi nhánh PN`,category:`Lưu lượng`}];function g(t){let n=t.alertType===`disconnect`?`wifi_off`:t.alertType===`exceed`?`warning`:`water_drop`,r=t.alertType===`disconnect`?`hbadge disconnect`:t.alertType===`exceed`?`hbadge exceed`:`hbadge zero`,i=t.resolvedBy?`<div class="hcard-resolved">${e(`check_circle`)} ${t.resolvedBy}</div>`:`<div class="hcard-open">${e(`pending`)} Chưa xử lý</div>`;return`
    <div class="hcard" id="hcard-${t.id}" data-code="${t.stationCode}" data-date="${t.startTime}">
      <div class="hcard-head">
        <span class="hcard-name">${t.stationName}</span>
        <span class="${r}">${e(n)} ${t.alertTypeLabel}</span>
      </div>
      <div class="hcard-body">
        <div class="hcard-row">${e(`schedule`)}<span class="hcard-time">${t.startDisplay}</span>${e(`arrow_forward`)}<span class="hcard-time">${t.endDisplay}</span></div>
        <div class="hcard-row">${e(`timer`)}<span class="hcard-duration">${t.duration}</span></div>
        <div class="hcard-desc">${t.description}</div>
      </div>
      <div class="hcard-footer">${i}</div>
    </div>`}function _(){let t=m.map(g).join(``);return`
  <div class="screen-wrap">
    <span class="screen-label">Lịch sử Cảnh báo</span>
    <div class="phone" id="history-phone">
      <div class="notch"></div>
      <div class="status-bar"><span>14:00</span><div class="status-bar-right">${e(`signal_cellular_4_bar`)} ${e(`wifi`)} ${e(`battery_full`)}</div></div>
      <div class="app-bar">
        <button class="icon-btn" id="hbtn-back">${e(`arrow_back`)}</button>
        <span class="title">Lịch sử Cảnh báo</span>
        <div class="user-chip"><div class="avatar">U</div><span>User Viewer</span>${e(`expand_more`)}</div>
        <span class="flag-icon">🇻🇳</span>
      </div>

      <div class="body" id="history-body">
        <div class="search-row">
          <div class="search-bar">
            ${e(`search`)}
            <input id="hs-search" placeholder="Tìm theo mã hoặc tên trạm..." />
            <button class="hs-clear-search" id="hs-clear-search" style="display:none">${e(`close`)}</button>
          </div>
          <button class="filter-trigger" id="hs-btn-filter" title="Bộ lọc nâng cao">
            ${e(`tune`)}
            <span class="filter-badge" id="hs-filter-badge" style="display:none">0</span>
          </button>
        </div>

        <div class="chip-strip">
          <button class="qchip active" data-hs-quick="all">Tất cả</button>
          <button class="qchip" data-hs-quick="disconnect">${e(`wifi_off`)} Mất kết nối</button>
          <button class="qchip" data-hs-quick="exceed">${e(`warning`)} Vượt ngưỡng</button>
          <button class="qchip" data-hs-quick="zero_flow">${e(`water_drop`)} Lưu lượng 0</button>
          <button class="qchip" data-hs-quick="today">${e(`today`)} Hôm nay</button>
        </div>

        <div class="hs-active-chips" id="hs-active-chips" style="display:none"></div>
        <div class="stats-bar">${e(`history`)} Kết quả: <strong id="hs-count">${m.length}</strong> cảnh báo</div>
        <div class="hcard-list" id="hcard-list">${t}<p class="no-data" id="hs-no-data" style="display:none">Không tìm thấy lịch sử cảnh báo</p></div>
      </div>

      <div class="sheet-backdrop" id="hs-backdrop"></div>

      <div class="bottom-sheet" id="hs-bottom-sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title">
          Bộ lọc nâng cao
          <button class="sheet-close" id="hs-filter-close">${e(`close`)}</button>
        </div>

        <div class="sheet-section">
          <div class="sheet-section-label">Loại cảnh báo</div>
          <div class="sheet-chips">
            <div class="sheet-chip active" data-group="alert-type" data-val="all">Tất cả</div>
            <div class="sheet-chip" data-group="alert-type" data-val="disconnect">Mất kết nối</div>
            <div class="sheet-chip" data-group="alert-type" data-val="exceed">Vượt ngưỡng</div>
            <div class="sheet-chip" data-group="alert-type" data-val="zero_flow">Lưu lượng 0</div>
          </div>
        </div>

        <div class="sheet-divider"></div>

        <div class="sheet-section">
          <div class="sheet-section-label">Lọc theo trạm</div>
          <div class="sheet-row" id="hs-open-station">
            <span id="hs-station-label">Chọn trạm...</span>
            <div class="sheet-row-right">
              <span id="hs-station-count" class="selection-badge" style="display:none"></span>
              ${e(`chevron_right`)}
            </div>
          </div>
        </div>

        <div class="sheet-divider"></div>

        <div class="sheet-section">
          <div class="sheet-section-label">Khoảng thời gian</div>
          <div class="sheet-row" id="hs-open-date-sheet">
            <span id="hs-range-label">Chọn khoảng thời gian...</span>
            <div class="sheet-row-right">
              <span class="selection-badge" id="hs-date-count" style="display:none">1</span>
              ${e(`chevron_right`)}
            </div>
          </div>
        </div>

        <div class="sheet-actions">
          <button class="btn-sheet-reset" id="hs-reset">Xóa bộ lọc</button>
          <button class="btn-sheet-apply" id="hs-apply">Áp dụng</button>
        </div>
      </div>

      <div class="bottom-sheet station-sheet" id="hs-station-sheet">
        <div class="sheet-handle"></div>
        <div class="station-sheet-header">
          <button class="icon-btn" id="hs-drill-back" style="visibility:hidden">${e(`arrow_back`)}</button>
          <div class="station-sheet-title">Chọn trạm</div>
          <button class="sheet-close" id="hs-station-close">${e(`close`)}</button>
        </div>
        <div class="station-sheet-search"><div class="search-bar" style="margin:0">${e(`search`)}<input id="hs-inner-search" placeholder="Tìm mã / tên / quận / đơn vị..." /></div></div>
        <div class="station-breadcrumb" id="hs-breadcrumb" style="display:none"></div>
        <div class="drill-level-label" id="hs-drill-label">Tỉnh / Thành phố</div>
        <div class="drill-list" id="hs-drill-list"></div>
        <div class="selected-tags" id="hs-selected-tags" style="display:none">
          <div class="sheet-section-label" style="margin-bottom:8px">Đã chọn</div>
          <div class="tags-wrap" id="hs-tags-wrap"></div>
        </div>
        <div class="sheet-actions" style="padding-top:12px">
          <button class="btn-sheet-reset" id="hs-sel-clear">Xóa chọn</button>
          <button class="btn-sheet-apply" id="hs-sel-apply">Áp dụng</button>
        </div>
      </div>

      <div class="bottom-sheet" id="hs-date-sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title">
          Chọn khoảng thời gian
          <button class="sheet-close" id="hs-date-close">${e(`close`)}</button>
        </div>
        <div class="hs-calendar">
          <div class="cal-header"><button class="cal-nav" id="cal-prev">${e(`chevron_left`)}</button><span class="cal-month-label" id="cal-month-label"></span><button class="cal-nav" id="cal-next">${e(`chevron_right`)}</button></div>
          <div class="cal-weekdays"><span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span></div>
          <div class="cal-grid" id="cal-grid"></div>
          <div class="cal-hint" id="cal-hint">Chọn ngày bắt đầu</div>
        </div>
        <div class="sheet-actions">
          <button class="btn-sheet-reset" id="hs-range-clear">Xóa ngày</button>
          <button class="btn-sheet-apply" id="hs-date-apply">Áp dụng</button>
        </div>
      </div>

      <div class="bottom-nav">
        <div class="nav-item" id="hnav-home">${e(`home`)} <span>Trang chủ</span></div>
        <div class="nav-item" id="hnav-realtime">${e(`bolt`)} <span>Tức thời</span></div>
        <div class="nav-item" id="hnav-map">${e(`map`)} <span>Bản đồ</span></div>
        <div class="nav-item" id="hnav-settings">${e(`settings`)} <span>Cài đặt</span></div>
      </div>
    </div>
  </div>`}function v(){let n=0,r=[],i=new Set,a=``,o=``,s=new Date,c=`all`,l=[`Tháng 1`,`Tháng 2`,`Tháng 3`,`Tháng 4`,`Tháng 5`,`Tháng 6`,`Tháng 7`,`Tháng 8`,`Tháng 9`,`Tháng 10`,`Tháng 11`,`Tháng 12`];function u(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function d(e){if(!e)return``;let[t,n,r]=e.split(`-`);return`${r}/${n}/${t}`}function f(){return u(new Date)}function p(){return document.querySelector(`.sheet-chip[data-group="alert-type"].active`)?.dataset.val??`all`}function g(){let e=0;return p()!==`all`&&e++,i.size>0&&e++,(a||o)&&e++,e}function _(){let e=document.getElementById(`hs-filter-badge`),t=document.getElementById(`hs-btn-filter`);if(!e||!t)return;let n=g();e.textContent=String(n),e.style.display=n?`flex`:`none`,t.classList.toggle(`has-active`,n>0)}function v(){let e=document.getElementById(`cal-grid`),t=document.getElementById(`cal-month-label`),n=document.getElementById(`cal-hint`);if(!e||!t||!n)return;let r=s.getFullYear(),i=s.getMonth();t.textContent=`${l[i]} ${r}`,n.textContent=a?o?``:`Chọn ngày kết thúc`:`Chọn ngày bắt đầu`,n.style.display=!a||!o?``:`none`;let c=(new Date(r,i,1).getDay()+6)%7,d=new Date(r,i+1,0).getDate(),p=``;for(let e=0;e<c;e++)p+=`<span class="cal-empty"></span>`;for(let e=1;e<=d;e++){let t=u(new Date(r,i,e)),n=`cal-day`;t===a&&(n+=` cal-start`),t===o&&(n+=` cal-end`),a&&o&&t>a&&t<o&&(n+=` cal-in-range`),t===f()&&(n+=` cal-today`),p+=`<span class="${n}" data-iso="${t}">${e}</span>`}e.innerHTML=p,e.querySelectorAll(`.cal-day`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.iso;!a||a&&o?(a=t,o=``):t<a?(o=a,a=t):o=t,y(),v()})})}function y(){let e=document.getElementById(`hs-range-label`),t=document.getElementById(`hs-date-count`);!e||!t||(!a&&!o?(e.textContent=`Chọn khoảng thời gian...`,e.style.color=`var(--text-muted)`,t.style.display=`none`):a&&!o?(e.textContent=`Từ ${d(a)} – ...`,e.style.color=`var(--accent)`,t.style.display=`inline-flex`):(e.textContent=`${d(a)} – ${d(o)}`,e.style.color=`var(--accent)`,t.style.display=`inline-flex`),_())}let b=()=>{document.getElementById(`hs-backdrop`)?.classList.add(`open`),document.getElementById(`hs-bottom-sheet`)?.classList.add(`open`)},x=()=>{document.getElementById(`hs-bottom-sheet`)?.classList.remove(`open`),!document.getElementById(`hs-station-sheet`)?.classList.contains(`open`)&&!document.getElementById(`hs-date-sheet`)?.classList.contains(`open`)&&document.getElementById(`hs-backdrop`)?.classList.remove(`open`)},S=()=>{n=0,r=[],document.getElementById(`hs-station-sheet`)?.classList.add(`open`),document.getElementById(`hs-backdrop`)?.classList.add(`open`),O()},C=()=>{document.getElementById(`hs-station-sheet`)?.classList.remove(`open`),!document.getElementById(`hs-bottom-sheet`)?.classList.contains(`open`)&&!document.getElementById(`hs-date-sheet`)?.classList.contains(`open`)&&document.getElementById(`hs-backdrop`)?.classList.remove(`open`)},w=()=>{s=new Date(a||f()),document.getElementById(`hs-date-sheet`)?.classList.add(`open`),document.getElementById(`hs-backdrop`)?.classList.add(`open`),v()},T=()=>{document.getElementById(`hs-date-sheet`)?.classList.remove(`open`),!document.getElementById(`hs-bottom-sheet`)?.classList.contains(`open`)&&!document.getElementById(`hs-station-sheet`)?.classList.contains(`open`)&&document.getElementById(`hs-backdrop`)?.classList.remove(`open`)};function E(){let t=(document.getElementById(`hs-search`)?.value??``).toLowerCase().trim(),n=p(),r=Array.from(i),s=f(),l=0;m.forEach(e=>{let i=document.getElementById(`hcard-${e.id}`),u=h.find(t=>t.code===e.stationCode),d=[e.stationCode,e.stationName,u?.district??``,u?.unit??``,u?.category??``].join(` `).toLowerCase(),f=c===`all`?!0:c===`today`?e.startTime===s:e.alertType===c,p=(!t||d.includes(t))&&f&&(n===`all`||e.alertType===n)&&(r.length===0||r.includes(e.stationCode))&&(!a||e.startTime>=a)&&(!o||e.startTime<=o);i&&(i.style.display=p?``:`none`),p&&l++});let u=document.getElementById(`hs-count`);u&&(u.textContent=String(l));let g=document.getElementById(`hs-no-data`);g&&(g.style.display=l===0?``:`none`);let v=document.getElementById(`hs-active-chips`);if(!v)return;let b=[];if(t&&b.push(`<span class="af-chip">${e(`search`)} "${t}" <button class="af-rm" data-rm="q">×</button></span>`),c!==`all`){let t=c===`today`?`today`:c===`disconnect`?`wifi_off`:c===`exceed`?`warning`:`water_drop`,n=c===`today`?`Hôm nay`:c===`disconnect`?`Mất kết nối`:c===`exceed`?`Vượt ngưỡng`:`Lưu lượng 0`;b.push(`<span class="af-chip">${e(t)} ${n} <button class="af-rm" data-rm="quick">×</button></span>`)}if(n!==`all`){let t=n===`disconnect`?`wifi_off`:n===`exceed`?`warning`:`water_drop`,r=n===`disconnect`?`Mất kết nối`:n===`exceed`?`Vượt ngưỡng`:`Lưu lượng 0`;b.push(`<span class="af-chip">${e(t)} ${r} <button class="af-rm" data-rm="type">×</button></span>`)}r.length&&b.push(`<span class="af-chip">${e(`account_tree`)} ${r.length} trạm <button class="af-rm" data-rm="sta">×</button></span>`),(a||o)&&b.push(`<span class="af-chip">${e(`date_range`)} ${d(a)||`...`} – ${d(o)||`...`} <button class="af-rm" data-rm="date">×</button></span>`),v.innerHTML=b.join(``),v.style.display=b.length?``:`none`,v.querySelectorAll(`.af-rm`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.rm;if(t===`q`){let e=document.getElementById(`hs-search`);e&&(e.value=``);let t=document.getElementById(`hs-clear-search`);t&&(t.style.display=`none`)}t===`quick`&&(c=`all`,document.querySelectorAll(`[data-hs-quick]`).forEach(e=>e.classList.remove(`active`)),document.querySelector(`[data-hs-quick="all"]`)?.classList.add(`active`)),t===`type`&&document.querySelectorAll(`.sheet-chip[data-group="alert-type"]`).forEach(e=>{e.classList.remove(`active`),e.dataset.val===`all`&&e.classList.add(`active`)}),t===`sta`&&(i.clear(),k()),t===`date`&&(a=``,o=``,y()),E()})}),_()}function D(e=``){let a=document.getElementById(`hs-drill-list`);if(!a)return;let o=n===t.length-1;a.innerHTML=t[n].items.filter(t=>{if(!e)return!0;let n=e.toLowerCase();if(o){let e=h.find(e=>e.code===t.code);return[t.code,t.name,e?.district??``,e?.unit??``,e?.category??``].join(` `).toLowerCase().includes(n)}return t.name.toLowerCase().includes(n)||t.code.toLowerCase().includes(n)}).map(e=>{let t=o&&i.has(e.code),n=o?h.find(t=>t.code===e.code):null,r=n?`<span class="drill-item-meta">${n.district} · ${n.category}</span>`:``;return`<div class="drill-item${t?` checked`:``}" data-code="${e.code}" data-name="${e.name}">
        <div class="drill-item-left"><span class="material-icons-round mi drill-item-icon">${o?`router`:`folder_open`}</span><div><span class="drill-item-name">${e.name}</span>${r}</div></div>
        <div class="drill-item-right">${o?`<span class="drill-check material-icons-round mi">${t?`check_circle`:`radio_button_unchecked`}</span>`:`<span class="material-icons-round mi" style="color:var(--text-muted);font-size:18px">chevron_right</span>`}</div>
      </div>`}).join(``);let s=document.getElementById(`hs-selected-tags`),c=document.getElementById(`hs-tags-wrap`);s&&c&&(s.style.display=o&&i.size>0?``:`none`,c.innerHTML=Array.from(i).map(e=>{let t=h.find(t=>t.code===e);return t?`<span class="station-tag" data-code="${e}">${t.name} <span class="tag-remove material-icons-round mi">close</span></span>`:``}).join(``),c.querySelectorAll(`.tag-remove`).forEach(t=>{t.addEventListener(`click`,n=>{n.stopPropagation(),i.delete(t.closest(`.station-tag`).dataset.code),D(e),k()})})),a.querySelectorAll(`.drill-item`).forEach(t=>{t.addEventListener(`click`,()=>{let a=t.dataset.code,s=t.dataset.name;o?(i.has(a)?i.delete(a):i.add(a),D(e),k()):(r.push(s),n++,O())})})}function O(){let e=document.getElementById(`hs-drill-label`),i=document.getElementById(`hs-breadcrumb`),a=document.getElementById(`hs-drill-back`),o=document.getElementById(`hs-inner-search`);!e||!i||!a||(e.textContent=t[n].label,i.innerHTML=r.map((e,t)=>`<span class="bc-item${t===r.length-1?` bc-active`:``}" data-depth="${t}">${e}</span>${t<r.length-1?`<span class="bc-sep material-icons-round mi">chevron_right</span>`:``}`).join(``),i.style.display=r.length?``:`none`,a.style.visibility=n>0?`visible`:`hidden`,o&&(o.value=``),D(),i.querySelectorAll(`.bc-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.depth||`0`,10);n=t+1,r=r.slice(0,t+1),O()})}))}function k(){let e=document.getElementById(`hs-station-label`),t=document.getElementById(`hs-station-count`);!e||!t||(i.size===0?(e.textContent=`Chọn trạm...`,e.style.color=`var(--text-muted)`,t.style.display=`none`):(e.textContent=i.size===1?h.find(e=>e.code===Array.from(i)[0])?.name??`Đã chọn`:`${i.size} trạm được chọn`,e.style.color=`var(--accent)`,t.textContent=String(i.size),t.style.display=`inline-flex`),_())}let A,j;document.getElementById(`hs-btn-filter`)?.addEventListener(`click`,b),document.getElementById(`hs-filter-close`)?.addEventListener(`click`,x),document.getElementById(`hs-open-station`)?.addEventListener(`click`,()=>{x(),S()}),document.getElementById(`hs-open-date-sheet`)?.addEventListener(`click`,()=>{x(),w()}),document.getElementById(`hs-station-close`)?.addEventListener(`click`,C),document.getElementById(`hs-date-close`)?.addEventListener(`click`,T),document.getElementById(`hs-backdrop`)?.addEventListener(`click`,()=>{x(),C(),T()}),document.getElementById(`hs-search`)?.addEventListener(`input`,e=>{let t=e.target.value,n=document.getElementById(`hs-clear-search`);n&&(n.style.display=t?``:`none`),clearTimeout(A),A=setTimeout(()=>E(),250)}),document.getElementById(`hs-clear-search`)?.addEventListener(`click`,()=>{let e=document.getElementById(`hs-search`);e&&(e.value=``),document.getElementById(`hs-clear-search`).style.display=`none`,E()}),document.querySelectorAll(`[data-hs-quick]`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`[data-hs-quick]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),c=e.dataset.hsQuick??`all`,E()})}),document.querySelectorAll(`.sheet-chip[data-group="alert-type"]`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.sheet-chip[data-group="alert-type"]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),_()})}),document.getElementById(`hs-apply`)?.addEventListener(`click`,()=>{x(),E()}),document.getElementById(`hs-reset`)?.addEventListener(`click`,()=>{let e=document.getElementById(`hs-search`);e&&(e.value=``),document.getElementById(`hs-clear-search`).style.display=`none`,i.clear(),a=``,o=``,c=`all`,document.querySelectorAll(`[data-hs-quick]`).forEach(e=>e.classList.remove(`active`)),document.querySelector(`[data-hs-quick="all"]`)?.classList.add(`active`),document.querySelectorAll(`.sheet-chip[data-group="alert-type"]`).forEach(e=>{e.classList.remove(`active`),e.dataset.val===`all`&&e.classList.add(`active`)}),k(),y(),v(),x(),T(),E()}),document.getElementById(`hs-range-clear`)?.addEventListener(`click`,()=>{a=``,o=``,y(),v(),E()}),document.getElementById(`hs-date-apply`)?.addEventListener(`click`,()=>{y(),T(),E()}),document.getElementById(`cal-prev`)?.addEventListener(`click`,()=>{s=new Date(s.getFullYear(),s.getMonth()-1,1),v()}),document.getElementById(`cal-next`)?.addEventListener(`click`,()=>{s=new Date(s.getFullYear(),s.getMonth()+1,1),v()}),document.getElementById(`hs-sel-apply`)?.addEventListener(`click`,()=>{k(),C(),E()}),document.getElementById(`hs-sel-clear`)?.addEventListener(`click`,()=>{i.clear(),D(),k()}),document.getElementById(`hs-drill-back`)?.addEventListener(`click`,()=>{n>0&&(n--,r.pop(),O())}),document.getElementById(`hs-inner-search`)?.addEventListener(`input`,e=>{clearTimeout(j),j=setTimeout(()=>D(e.target.value),200)}),k(),y(),E(),[`hnav-home`,`hnav-realtime`,`hnav-map`,`hnav-settings`].forEach(e=>{document.getElementById(e)?.addEventListener(`click`,()=>{[`hnav-home`,`hnav-realtime`,`hnav-map`,`hnav-settings`].forEach(e=>document.getElementById(e)?.classList.remove(`active`)),document.getElementById(e)?.classList.add(`active`)})})}function y(){return`
  <div class="spec-panel">
    <h3>${e(`palette`)} Design Specs</h3>

    <div class="spec-section">
      <h4>Colour Palette</h4>
      <div class="color-swatch"><div class="swatch" style="background:#0288D1"></div> Accent – #0288D1</div>
      <div class="color-swatch"><div class="swatch" style="background:#E1F5FE;border-color:#B3E5FC"></div> Accent Lt – #E1F5FE</div>
      <div class="color-swatch"><div class="swatch" style="background:#F7F9FC;border-color:#E2E8F0"></div> Surface – #F7F9FC</div>
      <div class="color-swatch"><div class="swatch" style="background:#2E7D32"></div> Connected – #2E7D32</div>
      <div class="color-swatch"><div class="swatch" style="background:#C62828"></div> Disconnected – #C62828</div>
      <div class="color-swatch"><div class="swatch" style="background:#E65100"></div> Warning – #E65100</div>
    </div>

    <div class="divider-spec"></div>

    <div class="spec-section">
      <h4>Typography</h4>
      <div class="spec-row"><span>App Title</span> <code>Inter 700 / 17px</code></div>
      <div class="spec-row"><span>Station Name</span> <code>Inter 600 / 12.5px</code></div>
      <div class="spec-row"><span>Param Label</span> <code>Inter 400 / 11.5px</code></div>
      <div class="spec-row"><span>Badge Value</span> <code>JetBrains 700 / 12px</code></div>
      <div class="spec-row"><span>Timestamp</span> <code>JetBrains 400 / 10px</code></div>
    </div>

    <div class="divider-spec"></div>

    <div class="spec-section">
      <h4>Spacing &amp; Radius</h4>
      <div class="spec-row"><span>Card radius</span> <code>14px</code></div>
      <div class="spec-row"><span>Badge radius</span> <code>20px (pill)</code></div>
      <div class="spec-row"><span>Card gap</span> <code>10px</code></div>
      <div class="spec-row"><span>Card padding</span> <code>11px 12px</code></div>
      <div class="spec-row"><span>Accent bar</span> <code>4px wide</code></div>
    </div>

    <div class="divider-spec"></div>

    <div class="spec-section">
      <h4>Icons</h4>
      <div class="spec-row"><span>Library</span> <code>Material Icons Round</code></div>
      <div class="spec-row"><span>Nav size</span> <code>22px</code></div>
      <div class="spec-row"><span>Inline size</span> <code>16–18px</code></div>
    </div>

    <div class="divider-spec"></div>

    <div class="spec-section">
      <h4>Flutter Mapping</h4>
      <div class="spec-row"><span>Card</span> <code>Card + InkWell</code></div>
      <div class="spec-row"><span>Search</span> <code>TextField</code></div>
      <div class="spec-row"><span>Filter chip</span> <code>DropdownButton</code></div>
      <div class="spec-row"><span>Badge</span> <code>Container + Text</code></div>
      <div class="spec-row"><span>Station list</span> <code>ListView.builder</code></div>
      <div class="spec-row"><span>Bottom nav</span> <code>NavigationBar (M3)</code></div>
    </div>
  </div>`}function b(){let e=document.getElementById(`app`);e.innerHTML=`
    <div class="page-header">
      <h1>📱 PHUWACO – Mobile UI Prototype</h1>
      <p>Dữ Liệu Tức Thời · Flutter + Material Design 3 · Light Mode</p>
    </div>

    <div class="proto-grid">
      ${c()}
      ${f()}
      ${_()}
      ${y()}
    </div>

    <div class="legend">
      <div class="legend-item"><div class="legend-dot" style="background:#2E7D32"></div> Kết nối</div>
      <div class="legend-item"><div class="legend-dot" style="background:#C62828"></div> Mất kết nối</div>
      <div class="legend-item"><div class="legend-dot" style="background:#E65100"></div> Vượt ngưỡng</div>
      <div class="legend-item"><span class="legend-pill" style="background:#0288D1;color:#fff">27.1</span> Giá trị bình thường</div>
      <div class="legend-item"><span class="legend-pill" style="background:#ECEFF1;color:#78909C">0</span> Giá trị = 0</div>
    </div>`,l(),p(),v()}b();