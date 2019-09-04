
subMenu = () => {
    document.getElementById("subDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = (e) => {
    if (!e.target.matches('.dropbtn')) {
    let subDropdown = document.getElementById("subDropdown");
      if (subDropdown.classList.contains('show')) {
        subDropdown.classList.remove('show');
      }
    }
  }
