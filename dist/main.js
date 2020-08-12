!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=e=>{let t=e.title,n=e.description,s=e.dueDate,i=e.priority,d=e.note,a=!1;return{getTitle:()=>t,getDescription:()=>n,getDueDate:()=>s,getPriority:()=>i,getNote:()=>d,editTitle:e=>{t=e},editDescription:e=>{n=e},editDueDate:e=>{s=e},editPriority:e=>{i=e},editNote:e=>{d=e},toggleFinished:()=>{a=!a},isFinished:()=>a,title:t,description:n,dueDate:s,priority:i,note:d,finished:a}},i=(e,t)=>{let n,s=e;n=void 0!==t?[...t]:[];return{getName:function(){return s},editName:function(e){s=e},getItems:()=>n,getItemsNumber:()=>n.length,addItem:e=>{n.unshift(e)},removeItem:e=>{const t=n.findIndex(t=>t.title===e);n.splice(t,1)},removeItemByIndex:function(e){n.splice(e,1)},name:s,items:n}};let d={title:"Task",description:"opis",dueDate:"2020-09-17",priority:"medium",note:"nesto"},a={title:"Zadatak",description:"Nesto",dueDate:"2020-10-21",priority:"high",note:"daaaa"};const o=(()=>{let e=i("Personal"),t=i("Work"),n=i("Grocery store"),o=s(d),r=s(a),l=s(d);e.addItem(o),e.addItem(r),t.addItem(l),t.addItem(r),n.addItem(r),n.addItem(o);let c=[e,t,n];const u=()=>{let e=localStorage.getItem("lists"),t=JSON.parse(e);return c.length=0,t.forEach(e=>{c.push(i(e.name,e.items))}),c};return{getLists:u,addList:e=>{c=u(),c.push(e),localStorage.setItem("lists",JSON.stringify(c))},removeListByName:e=>{const t=c.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase());c.splice(t,1)},getList:function(e){return c.find(t=>t.getName().toLowerCase()===e.toLowerCase())},setListsToStorage:function(){c=u(),localStorage.setItem("lists",JSON.stringify(c))},getListIndex:function(e){return c.findIndex(t=>t.getName().toLowerCase()===e.toLowerCase())},removeListByIndex:function(e){c.splice(e,1)},lists:c}})(),r={addTask:function(e){e.preventDefault();const t=document.querySelector("#title"),n=document.querySelector("#listSelect"),i=document.querySelector("#description"),d=document.querySelector("#dueDate"),a=document.querySelector("#priority"),r=document.querySelector("#note"),c=document.querySelector("#addTask"),u={title:t.value,description:i.value,dueDate:d.value,priority:a.value,note:r.value};if(c.classList.contains("enabled")&&null==n){const e=s(u);console.log(e);const t=p.getCurrentList();console.log(t),t.addItem(e),localStorage.setItem("lists",JSON.stringify(o.lists)),b.renderLists(),b.renderShortcuts(),l.exitModalOnButton(),p.renderListTasks(void 0,t.getName())}else if(c.classList.contains("enabled")&&null!==n)if(""!==n.value){const e=s(u),t=o.getList(n.value);t.addItem(e),localStorage.setItem("lists",JSON.stringify(o.lists)),b.renderLists(),b.renderShortcuts(),l.exitModalOnButton(),p.renderListTasks(void 0,t.getName())}else n.style.backgroundColor="rgba(156, 54, 54, 0.4)";else t.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},l=(()=>{const e=document.querySelector("#tasksContainer");document.querySelector(".taskItem");let t;function n(e){e.target===this&&t.parentNode.removeChild(t)}function s(e){const t=document.querySelector("#title"),n=document.querySelector("#addTask");t.style="",""!==t.value?n.classList.add("enabled"):n.classList.remove("enabled")}return{showModal:function(i){t=document.createElement("div"),t.classList.add("modalBg");const d=document.createElement("div");d.setAttribute("id","modalTask"),d.style.transform="translateX(-50%) translateY(-50%) scale(0.1)";const a=document.createElement("form");a.setAttribute("autocomplete","off");const l=document.createElement("input");let c;if(l.addEventListener("change",s),l.addEventListener("keyup",s),l.addEventListener("keydown",s),setTimeout((function(){l.focus()}),500),l.setAttribute("type","text"),l.setAttribute("id","title"),l.setAttribute("size","20"),l.setAttribute("placeholder","Task name"),l.setAttribute("maxlength","50"),"menuAddTask"===this.getAttribute("id")){c=document.createElement("select"),c.setAttribute("id","listSelect");const e=document.createElement("option");e.setAttribute("selected","selected"),e.setAttribute("hidden","hidden"),e.setAttribute("disabled","disabled"),e.setAttribute("value",""),e.textContent="Choose list:",c.appendChild(e);o.getLists().forEach(e=>{const t=document.createElement("option");t.setAttribute("value",e.getName()),t.textContent=e.getName(),c.appendChild(t)}),d.style.height="60rem",c.addEventListener("click",(function(){c.style=""})),c.addEventListener("mousedown",(function(){c.style=""}))}const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","description"),u.setAttribute("size","20"),u.setAttribute("placeholder","Description");const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("id","dueDate"),m.setAttribute("name","dueDate");const p=document.createElement("select");p.setAttribute("id","priority");const h=document.createElement("option");h.setAttribute("selected","selected"),h.setAttribute("hidden","hidden"),h.setAttribute("disabled","disabled"),h.setAttribute("value",""),h.textContent="Priority";const L=document.createElement("option");L.setAttribute("value","low"),L.textContent="Low";const v=document.createElement("option");v.setAttribute("value","medium"),v.textContent="Medium";const f=document.createElement("option");f.setAttribute("value","high"),f.textContent="High";const b=document.createElement("option");b.setAttribute("value","urgent"),b.textContent="Urgent",p.appendChild(h),p.appendChild(L),p.appendChild(v),p.appendChild(f),p.appendChild(b);const g=document.createElement("textarea");g.setAttribute("id","note"),g.setAttribute("cols","20"),g.setAttribute("rows","5"),g.setAttribute("placeHolder","Note");const C=document.createElement("button");C.setAttribute("id","addTask"),C.textContent="Add task",C.addEventListener("click",r.addTask),a.appendChild(l),"menuAddTask"===this.getAttribute("id")&&a.appendChild(c),a.appendChild(u),a.appendChild(m),a.appendChild(p),a.appendChild(g),a.appendChild(C),d.appendChild(a),t.addEventListener("click",n),t.appendChild(d),e.appendChild(t)},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),c={addTask:function(){const e={title:this.parentNode.querySelector(".quickTaskInput").value,description:"",dueDate:"",priority:"",note:""};if(this.classList.contains("enabled")){const t=s(e),n=p.getCurrentList();n.addItem(t),localStorage.setItem("lists",JSON.stringify(o.lists)),b.renderLists(),b.renderShortcuts(),p.renderListTasks(void 0,n.getName())}},addTaskOnEnter:function(e){const t={title:e.value,description:"",dueDate:"",priority:"",note:""},n=s(t),i=p.getCurrentList();i.addItem(n),localStorage.setItem("lists",JSON.stringify(o.lists)),b.renderLists(),b.renderShortcuts(),p.renderListTasks(void 0,i.getName())}},u={deleteTask:function(e){const t=p.getCurrentList();t.removeItemByIndex(e),localStorage.setItem("lists",JSON.stringify(o.lists)),b.renderLists(),b.renderShortcuts(),p.renderListTasks(void 0,t.name),m.exitModalOnButton()},saveTask:function(e,t){const n=document.querySelector("#title"),s=document.querySelector("#saveTask"),i=p.getCurrentList();s.classList.contains("enabled")?(e.title=t.title,e.description=t.description,e.dueDate=t.dueDate,e.priority=t.priority,e.note=t.note,localStorage.setItem("lists",JSON.stringify(o.lists)),p.renderListTasks(void 0,i.name),m.exitModalOnButton()):n.style.backgroundColor="rgba(156, 54, 54, 0.4)"},toggleFinishedFlag:function(){const e=p.getCurrentList(),t=this.parentNode.dataset.index;e.items[t].finished=!e.items[t].finished,localStorage.setItem("lists",JSON.stringify(o.lists)),1==e.items[t].finished?function(e,t){const n=e.dataset.index,s=t.getItems()[n];t.getItems().splice(n,1),t.getItems().push(s),localStorage.setItem("lists",JSON.stringify(o.lists)),p.renderListTasks(void 0,t.name)}(this.parentNode,e):function(e,t){const n=e.dataset.index,s=t.getItems()[n];t.getItems().splice(n,1),t.getItems().unshift(s),localStorage.setItem("lists",JSON.stringify(o.lists)),p.renderListTasks(void 0,t.name)}(this.parentNode,e)}},m=(()=>{const e=document.querySelector("#tasksContainer");let t;function n(e){e.target===this&&t.parentNode.removeChild(t)}function s(e){const t=document.querySelector("#saveTask");this.style.backgroundColor="",""!==this.value?t.classList.add("enabled"):t.classList.remove("enabled")}return{showInfo:function(i){if("INPUT"===i.target.tagName)return;const d=this.querySelector("p").textContent,a=this.dataset.index,o=p.getCurrentList().items[a];t=document.createElement("div"),t.classList.add("modalBg");const r=document.createElement("div");r.setAttribute("id","taskInfo"),r.style.transform="translateX(-50%) translateY(-50%) scale(0.1)";const l=document.createElement("form"),c=document.createElement("div");c.setAttribute("id","header");const m=document.createElement("h2");m.textContent="TASK DETAILS",c.appendChild(m),r.appendChild(c);const h=document.createElement("div");h.setAttribute("id","taskButtons");const L=document.createElement("button");L.textContent="Delete",L.setAttribute("id","deleteTask"),L.addEventListener("click",(function(){u.deleteTask(a)}));const v=document.createElement("button");v.textContent="Save",v.setAttribute("id","saveTask"),v.classList.add("enabled"),h.appendChild(L),h.appendChild(v);const f=document.createElement("input");f.setAttribute("type","text"),f.setAttribute("id","title"),f.setAttribute("size","20"),f.setAttribute("placeholder","Task name"),f.setAttribute("maxlength","50"),f.addEventListener("change",s),f.addEventListener("keydown",s),f.addEventListener("keyup",s),f.value=""+d,setTimeout((function(){f.focus()}),500);const b=document.createElement("p");b.textContent="Description:";const g=document.createElement("input");g.setAttribute("type","text"),g.setAttribute("id","description"),g.setAttribute("size","20"),g.value=o.description;const C=document.createElement("p");C.textContent="Due date:";const y=document.createElement("input");y.setAttribute("type","date"),y.setAttribute("id","dueDate"),y.setAttribute("name","dueDate"),y.value=o.dueDate;const E=document.createElement("p");E.textContent="Priority:";const k=document.createElement("select");k.setAttribute("id","priority");const A=document.createElement("option");A.setAttribute("selected","selected"),A.setAttribute("hidden","hidden"),A.setAttribute("disabled","disabled"),A.setAttribute("value",""),A.textContent="Priority";const S=document.createElement("option");S.setAttribute("value","low"),S.textContent="Low";const x=document.createElement("option");x.setAttribute("value","medium"),x.textContent="Medium";const I=document.createElement("option");I.setAttribute("value","high"),I.textContent="High";const T=document.createElement("option");T.setAttribute("value","urgent"),T.textContent="Urgent",k.appendChild(A),k.appendChild(S),k.appendChild(x),k.appendChild(I),k.appendChild(T),""!=o.priority&&(k.value=o.priority);const N=document.createElement("p");N.textContent="Note:";const q=document.createElement("textarea");q.setAttribute("id","note"),q.setAttribute("cols","20"),q.setAttribute("rows","5"),q.value=o.note,l.setAttribute("autocomplete","off"),l.appendChild(f),l.appendChild(b),l.appendChild(g),l.appendChild(C),l.appendChild(y),l.appendChild(E),l.appendChild(k),l.appendChild(N),l.appendChild(q),r.appendChild(l),r.appendChild(h),t.addEventListener("click",n),t.appendChild(r),e.appendChild(t),v.addEventListener("click",(function(){let e={title:f.value,description:g.value,dueDate:y.value,priority:k.value,note:q.value};u.saveTask(o,e)}))},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),p=(()=>{const e=document.querySelector("#tasks");let t;const n=()=>{let e=tasks.lastChild;for(;e;)tasks.removeChild(e),e=tasks.lastChild};function s(e){const t=this,n=this.parentNode.querySelector(".up");""!==t.value?(n.classList.add("enabled"),t.classList.add("enabled"),"Enter"===e.key&&c.addTaskOnEnter(t)):(n.classList.remove("enabled"),t.classList.remove("enabled"))}function i(e){e.querySelectorAll("li").forEach(e=>{e.classList.remove("active")})}return{renderListTasks:function(d,a){let r;var p;n(),"LI"===this.tagName&&(i(this.parentNode),this.classList.add("active")),void 0!==d?r=this.firstChild.textContent:(r=a,p=r,document.querySelector("#listsList").querySelectorAll("li").forEach(e=>{e.querySelector("p").textContent===p&&e.classList.add("active")}));const h=document.createElement("div");h.classList.add("listItem");const L=document.createElement("div");L.classList.add("listHeader");const v=document.createElement("h2");v.textContent=r,L.appendChild(v);const f=document.createElement("span");f.classList.add("add"),f.addEventListener("click",l.showModal);const b=document.createElement("i");b.classList.add("fas"),b.classList.add("fa-plus-circle"),f.appendChild(b),L.appendChild(f),h.appendChild(L);const g=o.getList(r).getItems(),C=document.createElement("div");C.classList.add("listTasks");let y=0;g.forEach(e=>{const t=document.createElement("div");t.classList.add("taskDiv"),t.addEventListener("click",m.showInfo),t.setAttribute("data-index",y++);const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id",e.title),n.setAttribute("value",e.title),n.classList.add("checkbox"),n.addEventListener("click",u.toggleFinishedFlag);const s=document.createElement("p");if(s.innerText=e.title,t.append(n),t.appendChild(s),1==e.finished){n.checked=!0,t.classList.add("finished");const e=document.createElement("span");e.classList.add("crossIcon");const s=document.createElement("i");s.classList.add("fas","fa-times-circle"),e.appendChild(s),t.appendChild(e)}else n.checked=!1;C.appendChild(t)}),h.appendChild(C);const E=document.createElement("div");E.classList.add("quickTask");const k=document.createElement("input");k.classList.add("quickTaskInput"),k.setAttribute("type","text"),k.setAttribute("maxlength","50"),k.setAttribute("placeholder","Click to quickly add task"),k.addEventListener("change",s),k.addEventListener("keydown",s),k.addEventListener("keyup",s);const A=document.createElement("span"),S=document.createElement("i");S.classList.add("fas"),S.classList.add("fa-arrow-circle-up"),A.appendChild(S),A.classList.add("up"),A.addEventListener("click",c.addTask),E.appendChild(k),E.appendChild(A),h.appendChild(E),e.appendChild(h),t=o.getList(r)},getCurrentList:()=>t,_deactiveAllLists:i,currentList:t}})(),h={addList:function(e){event.preventDefault();const t=e.value;if(document.querySelector("#createList").classList.contains("enabled")){const e=i(t,[]);o.addList(e),b.renderLists(),b.renderShortcuts(),L.exitModalOnButton()}else e.style.backgroundColor="rgba(156, 54, 54, 0.4)"}},L=(()=>{const e=document.querySelector("#tasksContainer");let t;function n(e){const t=this,n=document.querySelector("#createList");t.style.backgroundColor="",""!==t.value?(n.classList.add("enabled"),"Enter"===e.key&&h.addList(t)):n.classList.remove("enabled")}function s(e){e.target===this&&t.parentNode.removeChild(t)}function i(){t.parentNode.removeChild(t)}return{showModal:function(){t=document.createElement("div"),t.classList.add("modalBg"),t.addEventListener("click",s);const d=document.createElement("div");d.setAttribute("id","modalTask"),d.style.transform="translateX(-50%) translateY(-50%) scale(0.1)",d.style.width="40rem",d.style.height="15rem";const a=document.createElement("form");a.setAttribute("autocomplete","off"),a.style.width="95%",a.setAttribute("onkeydown","return event.key != 'Enter';");const o=document.createElement("input");o.addEventListener("change",n),o.addEventListener("keydown",n),o.addEventListener("keyup",n),o.addEventListener("mousedown",n),o.setAttribute("type","text"),o.setAttribute("id","title"),o.setAttribute("size","20"),o.setAttribute("placeholder","List name"),o.setAttribute("maxlength","23"),o.style.width="100%",o.style.margin="0",setTimeout((function(){o.focus()}),500);const r=document.createElement("div");r.setAttribute("id","modalButtons");const l=document.createElement("button");l.textContent="Cancel",l.setAttribute("id","cancel"),l.addEventListener("click",i);const c=document.createElement("button");c.textContent="Create",c.setAttribute("id","createList"),c.addEventListener("click",(function(){h.addList(o)})),r.appendChild(l),r.appendChild(c),a.appendChild(o),d.appendChild(a),d.appendChild(r),t.appendChild(d),e.appendChild(t)},exitModalOnButton:i}})(),v=(()=>{const e=document.querySelector("#tasksContainer");let t,n,s;function i(){const e=this,t=document.querySelector("#saveList");e.style.backgroundColor="",""!==e.value?(t.classList.add("enabled"),"Enter"===event.key&&f.saveList(s,n,e.value)):t.classList.remove("enabled")}function d(e){e.target===this&&t.parentNode.removeChild(t)}return{showModal:function(){s=this.parentNode,n=this.parentNode.textContent,t=document.createElement("div"),t.classList.add("modalBg"),t.addEventListener("click",d);const a=document.createElement("div");a.setAttribute("id","modalTask"),a.style.transform="translateX(-50%) translateY(-50%) scale(0.1)",a.style.width="40rem",a.style.height="15rem";const o=document.createElement("form");o.setAttribute("autocomplete","off"),o.style.width="95%",o.setAttribute("onkeydown","return event.key != 'Enter';");const r=document.createElement("input");r.addEventListener("change",i),r.addEventListener("keydown",i),r.addEventListener("keyup",i),r.addEventListener("mousedown",i),r.setAttribute("type","text"),r.setAttribute("id","title"),r.setAttribute("size","20"),r.setAttribute("placeholder","List name"),r.setAttribute("maxlength","23"),r.style.width="100%",r.style.margin="0",r.value=""+n,setTimeout((function(){r.focus()}),500);const l=document.createElement("div");l.setAttribute("id","modalButtons");const c=document.createElement("button");c.textContent="Delete",c.setAttribute("id","deleteList"),c.addEventListener("click",(function(){f.deleteList(s)}));const u=document.createElement("button");u.textContent="Save",u.setAttribute("id","saveList"),u.addEventListener("click",(function(){f.saveList(s,n,r.value)})),l.appendChild(c),l.appendChild(u),o.appendChild(r),a.appendChild(o),a.appendChild(l),t.appendChild(a),e.appendChild(t)},exitModalOnButton:function(){t.parentNode.removeChild(t)}}})(),f={saveList:function(e,t,n){const s=e.dataset.index;o.lists[s].name=n,e.childNodes[1].textContent=n,v.exitModalOnButton()},deleteList:function(e){const t=e.dataset.index;e.parentNode.removeChild(e),b.changeDataIndices(),o.removeListByIndex(t),v.exitModalOnButton()},saveEdit:function(){localStorage.setItem("lists",JSON.stringify(o.lists));const e=b.getActiveListName();void 0!==e?(localStorage.setItem("lists",JSON.stringify(o.lists)),b.renderLists(),b.renderShortcuts(),p.renderListTasks(void 0,e)):b.renderLists()},cancelEdit:function(){b.renderLists()}},b=(()=>{function e(){const e=document.querySelector("#listsList"),t=document.querySelector("#shortcutsList"),n=document.querySelector("#icons");"lists"==this.getAttribute("id")?(e.classList.toggle("hide"),e.classList.contains("hide")?setTimeout((function(){e.style.display="none"}),500):e.style.display="block",n.classList.toggle("hide")):"shortcuts"==this.getAttribute("id")&&(t.classList.toggle("hide"),t.classList.contains("hide")?setTimeout((function(){t.style.display="none"}),500):t.style.display="block"),this.firstChild.classList.toggle("fa-chevron-down"),this.firstChild.classList.toggle("fa-chevron-up")}function t(e){e.querySelectorAll("li").forEach(e=>{e.parentNode.removeChild(e)})}function n(){const t=document.querySelector("#listsList").querySelectorAll("li"),s=document.querySelector("#listsHeader");if(document.querySelector("#menu").querySelectorAll(".menu-item").forEach(e=>{e.classList.contains("notOverlay")||e.classList.toggle("overlayed")}),s.classList.toggle("editable"),s.classList.contains("editable")){s.lastElementChild.classList.add("hide"),s.removeChild(s.querySelector(".arrow"));const e=document.createElement("div");e.setAttribute("id","editIcons");const t=document.createElement("i");t.classList.add("fas","fa-times"),t.classList.add("editIcon","editHeader"),t.setAttribute("id","cross"),t.addEventListener("click",f.cancelEdit),t.addEventListener("click",n);const i=document.createElement("i");i.classList.add("fas","fa-check"),i.classList.add("editIcon","editHeader"),i.setAttribute("id","check"),i.addEventListener("click",f.saveEdit),i.addEventListener("click",n),e.appendChild(t),e.appendChild(i),s.appendChild(e)}else{s.removeChild(s.lastElementChild),s.lastElementChild.classList.remove("hide");const t=document.createElement("span");t.classList.add("arrow"),t.setAttribute("id","lists"),t.addEventListener("click",e);const n=document.createElement("i");n.classList.add("fas","fa-chevron-up"),t.appendChild(n),s.insertBefore(t,s.lastElementChild)}"edit"===this.getAttribute("id")&&t.forEach(e=>{if(e.classList.toggle("editable"),e.classList.contains("editable")){e.removeChild(e.lastChild);const t=document.createElement("i");t.classList.add("fas"),t.classList.add("fa-bars"),t.classList.add("dragIcon"),e.insertBefore(t,e.firstChild);const n=document.createElement("img");n.setAttribute("src","./images/edit.svg"),n.classList.add("editIcon"),n.addEventListener("click",v.showModal),e.appendChild(n),e.removeEventListener("click",p.renderListTasks)}else{e.removeChild(e.firstChild),e.removeChild(e.lastChild);const t=document.createElement("span");t.classList.add("taskNumber"),t.textContent=""+o.getList(e.textContent).items.length,e.appendChild(t),e.addEventListener("click",p.renderListTasks)}})}return document.querySelectorAll(".arrow").forEach(t=>{t.addEventListener("click",e)}),document.querySelector("#menuAddTask").addEventListener("click",l.showModal),document.querySelector("#menuBars").addEventListener("click",(function(){const e=document.querySelector("#menu");e.classList.toggle("hide"),e.querySelectorAll(".menu-item").forEach(e=>{e.classList.contains("notHide")?e.classList.toggle("minimize"):e.classList.toggle("hide"),"add"==e.getAttribute("id")&&e.classList.contains("minimize")?e.querySelector("button").innerHTML='<i class="fas fa-plus"></i>':"add"!=e.getAttribute("id")||e.classList.contains("minimize")||(e.querySelector("button").innerHTML='<i class="fas fa-plus"></i> Create a task')})})),document.querySelector("#addList").addEventListener("click",L.showModal),document.querySelector("#edit").addEventListener("click",n),{renderLists:()=>{const e=document.querySelector("#listsList");let n=o.getLists();t(e);let s=0;n.forEach(t=>{const n=document.createElement("li");n.setAttribute("id",t.getName().replace(" ","").toLowerCase());const i=document.createElement("p");i.textContent=t.getName();const d=document.createElement("span");d.classList.add("taskNumber"),d.textContent=""+t.getItems().length,n.setAttribute("data-index",s++),n.appendChild(i),n.appendChild(d),e.appendChild(n),n.addEventListener("click",p.renderListTasks)})},renderShortcuts:()=>{const e=document.createElement("li");e.textContent="Today",e.setAttribute("id","today");const n=document.createElement("li");n.textContent="Next 7 days",n.setAttribute("id","sevenDays");const s=document.createElement("li");s.textContent="All tasks",s.setAttribute("id","allTasks");const i=document.querySelector("#shortcutsList");t(i),i.appendChild(e),i.appendChild(n),i.appendChild(s)},getActiveListName:function(){let e;return document.querySelector("#listsList").querySelectorAll("li").forEach(t=>{t.classList.contains("active")&&(e=t.querySelector("p").textContent,p.currentList=t)}),e},_editableLists:n,changeDataIndices:function(){const e=document.querySelector("#listsList");let t=0;e.querySelectorAll("li").forEach(e=>{e.dataset.index=t++})}}})();window.onload=(o.setListsToStorage(),b.renderLists(),void b.renderShortcuts())}]);