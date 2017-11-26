# searchFilter

Search elements and filter these elements

## Example

```code

$(document).on("keyup",function(){
    searchFilter.data(searchElement, mainElement, subElements, searching);
});

With test parameter

$(document).on("keyup",function(){
    searchFilter.data("#search","#list",".list__element","span");
});

```