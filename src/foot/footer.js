export const displayFooter=(selector)=>{
    const saveFooter=document.querySelector(`${selector}`);
    saveFooter.innerHTML= ` <footer class="page-footer greenproject footergreen">
    <div class="footer-copyright">
      <div class="container black-text">
        © 2021 Copyright Text
      </div>
    </div>
  </footer>`
}
