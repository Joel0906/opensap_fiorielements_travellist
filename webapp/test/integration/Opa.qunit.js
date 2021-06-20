sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fe/travel/opensapfiorielementstravellist/test/integration/pages/MainListReport' ,
        'sap/fe/travel/opensapfiorielementstravellist/test/integration/pages/MainObjectPage',
        'sap/fe/travel/opensapfiorielementstravellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fe/travel/opensapfiorielementstravellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);