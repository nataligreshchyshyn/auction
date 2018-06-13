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
     addEventListeners() {
        $('#lotInfoModal').on('show.bs.modal', event => {
            const button = $(event.relatedTarget); // Button that triggered the modal
            const id  = String(button.data('id')); // Extract info from data-* attributes
            const lot = this.getLotById(id);
            const modal = $('#lotInfoModal');
            modal.find('.modal-body .card-img-top')
                .attr('src', 'img/'+lot.image)
                .attr('alt', lot.title);
            modal.find('.modal-body .card-title').text(lot.title);
            modal.find('.modal-body .card-text').text(lot.description);
        });
    }
}

