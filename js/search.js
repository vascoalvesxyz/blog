function filterList() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("itemList");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      
      // split filter by spaces, gives ["app", "MN"] in your example  
      let filters = filter.split(" ") 

      filters = filters.filter(f => f.length)   

      let shouldDisplay = true
      // test each filter and store true only if string contains all filter
      filters.forEach(filt => {
        shouldDisplay = shouldDisplay && txtValue.toUpperCase().includes(filt)
      })
      
      // update visibility
      // set visible if the string include all filters
      // or if there is no filter
      li[i].style.display = (shouldDisplay || filters.length === 0) ? "" : "none";
    }
  }
