var searchFilter = searchFilter ||  {};

searchFilter.data = function (searchElement, mainElement, subElements, searching) {

    var search = $(searchElement),
        container = $(mainElement),
        sub = container.find($(subElements)),
        filterSearch = search.val().toLowerCase();

    for (i = 0; i < sub.length; i++) {

        var element = sub.eq(i).find(searching).eq(0);

        if (element.text().toLowerCase().indexOf(filterSearch) > -1) {

            sub.eq(i).find(searching).eq(0).css("display", "block");

        } else {

            sub.eq(i).find(searching).eq(0).css("display", "none");

        }

    }

}