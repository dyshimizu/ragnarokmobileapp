var axios = require('axios');
 

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Index');
};
    
exports.poporingAllCards = function(req, res) {
    /*
    axios.get("https://api-global.poporing.life/get_all_latest_prices?includeCategory=:type_card_white", {
        headers: {
            "Origin": "https://poporing.life",
        }
    }).then(response => {
        let items = response.data;
        var id = "";

        for (i in items.data){
            console.log(items.data[i].item_name);
        }
    }).catch(function(error){
        console.log(error);
    });
    */
    var items = {	"success": true,
                    "data": [{
                        "item_name": "peco_peco_egg_card",
                        "data": {
                            "price": 4572936,
                            "volume": 37,
                            "timestamp": 1558825752,
                            "snapping": -1
                        }
                    },
                    {
                        "item_name": "golem_card",
                        "data": {
                            "price": 424453,
                            "volume": 20,
                            "timestamp": 1558820652,
                            "snapping": -1
                        }
                    },
                    {
                        "item_name": "poison_spore_card",
                        "data": {
                            "price": 414976,
                            "volume": 89,
                            "timestamp": 1558819289,
                            "snapping": -1
                        }
                    }],
                    "debug": {
                        "scan_count": 0,
                        "num_unused": 0
                    }
                };

    res.render('index', {title: 'Card List', items});
    //res.send('Updating base from poporing');
};
