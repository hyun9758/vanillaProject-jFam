import"./reset-9GtOEJoH.js";/* empty css              */import{p as d}from"./pocketbase-v9INCz3k.js";import{s as l}from"./storage-9woz5qE_.js";const c=document.querySelector(".input-id"),a=document.querySelector(".id-input-condition"),s=document.querySelector(".input-password"),r=document.querySelector(".password-input-condition"),h=document.querySelector(".login-button"),n=document.querySelector(".auto-login-img");let o=!1,i=!1;function p(t){return/^[a-zA-Z0-9]{6,12}$/.test(String(t).toLowerCase())}function f(t){return/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(String(t).toLowerCase())}const m=async(t,e)=>{try{return await d.collection("users").authWithPassword(t,e)}catch{return window.alert("일치하는 회원정보가 없습니다. 아이디, 비밀번호를 다시 확인해주세요."),!1}};function w(){o=p(c.value),o?a.textContent="":a.textContent="영문 또는 영문, 숫자 조합 6~12자리로 입력해주세요."}function g(t){const e=t.target;i=f(e.value),i?r.textContent="":r.textContent="특수문자(~!@#$%^&*) 포함 6~16자리로 입력해주세요."}async function k(t){if(o&&i){t.preventDefault();const e=await m(c.value,s.value);e?(l("auth",{isAuth:!0,userData:e}),window.location.href="/src/pages/main/index.html"):alert("일치하는 회원정보가 없습니다. 아이디, 비밀번호를 다시 확인해주세요.")}else alert("아이디나 비밀번호 형식을 맞춰주세요.")}function v(){n.id==="auto-unchecked"?(n.src="/images/check_filled_blue.svg",n.id="auto-checked",n.alt="체크박스 활성화"):(n.src="/images/check_filled_white.svg",n.id="auto-unchecked",n.alt="체크박스 비활성화")}c.addEventListener("input",w);s.addEventListener("input",g);h.addEventListener("click",k);n.addEventListener("click",v);