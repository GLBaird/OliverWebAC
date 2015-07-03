/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['-245px', '169px', '212px', '62px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: 0,
                            text: "Hello there",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "goAway": 1646
                    },
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            1646,
                            "easeOutBounce",
                            "${Text}",
                            '-245px',
                            '169px'
                        ],
                        [
                            "eid6",
                            "left",
                            1646,
                            1104,
                            "easeOutBounce",
                            "${Text}",
                            '169px',
                            '604px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("demo_edgeActions.js");
})("EDGE-1235116058");
