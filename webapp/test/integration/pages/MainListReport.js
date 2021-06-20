sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sap.fe.travel.opensapfiorielementstravellist',
            componentId: 'TravelList',
            entitySet: 'Travel'
        },
        AdditionalCustomListReportDefinition
    );
});