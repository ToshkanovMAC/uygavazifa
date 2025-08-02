function fltrNpagn(params){
    const{name, price, page=1, take=10} = params
    let filter = {}
    if(name)filter.name = name
    if(price)filter.price = price
    if(page)filter.page = page
    if(take)filter.take = take

    return filter
}

module.exports = fltrNpagn