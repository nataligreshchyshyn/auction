class LotList {
    constructor (lotsUrl, renderContainer) {
        fetch(lotsUrl)
            .then(result => result.json() )
            .then(lots => {
                this.lots = lots;
                this.renderLots(renderContainer, lots);
                this.addEventListeners();
            });
    }
    getLotById(id) {
        return this.lot-list.find(el => el.id === id);
    }
    renderLots(container, lots) {
        let lotListDomString = '';
        lots.forEach(lot => {
            lotListDomString += 
                `<figure>
                    <img src="img/${lot.image}" alt="${lot.title}">
                    <figcaption>${lot.title}</figcaption>
                </figure>`;
        });
        container.html(lotListDomString);
    }
}
