TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "viewerArea": {
   "shadow": false,
   "progressBackgroundOpacity": 1,
   "toolTipBackgroundColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "paddingLeft": 0,
   "playbackBarBorderRadius": 0,
   "playbackBarOpacity": 1,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "paddingRight": 0,
   "progressBarOpacity": 1,
   "toolTipTextShadowVerticalLength": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressBottom": 2,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeight": 10,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBorderRadius": 0,
   "toolTipShadowBlurRadius": 3,
   "progressBorderSize": 0,
   "progressHeight": 10,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipOpacity": 0.7,
   "toolTipTextShadowColor": "#000000",
   "minHeight": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressLeft": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipPaddingTop": 9,
   "toolTipShadowColor": "#333333",
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowHorizontalLength": 0,
   "playbackBarProgressOpacity": 1,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "borderSize": 0,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarLeft": 0,
   "playbackBarRight": 0,
   "minWidth": 1,
   "progressBarBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarBackgroundOpacity": 1,
   "transitionDuration": 500,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarBorderSize": 0,
   "paddingTop": 0,
   "toolTipBorderRadius": 1,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipShadowSpread": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "width": "100%",
   "height": "100%",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipBorderSize": 0,
   "paddingBottom": 0,
   "playbackBarHeadHeight": 15,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "toolTipPaddingLeft": 14,
   "toolTipFontSize": 13,
   "progressBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "toolTipDisplayTime": 600,
   "toolTipFontColor": "#FFFFFF",
   "playbackBarProgressBorderSize": 0,
   "progressBarBorderColor": "#000000",
   "progressBarBorderRadius": 0,
   "top": "0%",
   "propagateClick": false,
   "playbackBarHeadBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipShadowOpacity": 0,
   "toolTipPaddingRight": 14,
   "playbackBarBottom": 0,
   "progressOpacity": 1,
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "playbackBarHeadShadowColor": "#000000",
   "left": "0%",
   "playbackBarHeadOpacity": 1,
   "transitionMode": "blending",
   "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "toolTipPaddingBottom": 9,
   "borderRadius": 0,
   "toolTipTextShadowOpacity": 1,
   "progressBorderColor": "#000000",
   "toolTipFontFamily": "Arial",
   "playbackBarHeadBorderSize": 0,
   "playbackBarProgressBackgroundColorDirection": "vertical"
  },
  "id": "ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
  "class": "PhotoAlbumPlayer",
  "buttonNext": {
   "iconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96.png",
   "width": "4.24%",
   "paddingLeft": 0,
   "mode": "push",
   "maxWidth": 70,
   "paddingRight": 0,
   "paddingBottom": 0,
   "class": "IconButton",
   "verticalAlign": "middle",
   "minHeight": 50,
   "transparencyActive": true,
   "top": "40%",
   "rollOverIconURL": "skin/IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "bottom": "40%",
   "id": "IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "data": {
    "name": ">"
   },
   "maxHeight": 70,
   "horizontalAlign": "center",
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 50,
   "right": "1%",
   "shadow": false,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "buttonPrevious": {
   "iconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74.png",
   "width": "4.24%",
   "paddingLeft": 0,
   "mode": "push",
   "maxWidth": 70,
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 50,
   "transparencyActive": true,
   "top": "40%",
   "rollOverIconURL": "skin/IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74_rollover.png",
   "propagateClick": false,
   "cursor": "hand",
   "bottom": "40%",
   "id": "IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "data": {
    "name": "<"
   },
   "maxHeight": 70,
   "horizontalAlign": "center",
   "borderSize": 0,
   "left": "1%",
   "borderRadius": 0,
   "minWidth": 50,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonStop": [
   {
    "toolTipBorderRadius": 1,
    "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
    "toolTipBackgroundColor": "#000000",
    "width": "19.19%",
    "paddingLeft": 0,
    "height": "76.75%",
    "mode": "push",
    "maxWidth": 85,
    "paddingRight": 0,
    "toolTipTextShadowVerticalLength": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTip": "See Photos",
    "paddingBottom": 0,
    "toolTipBorderSize": 0,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 14,
    "toolTipFontSize": 13,
    "verticalAlign": "middle",
    "class": "IconButton",
    "toolTipDisplayTime": 600,
    "minHeight": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, true, 0, this.effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB, 'showEffect', false); this.playList_49093697_5083_705F_4195_B2B9A9770204.set('selectedIndex', 0)",
    "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
    "toolTipTextShadowColor": "#000000",
    "toolTipOpacity": 0.7,
    "toolTipFontColor": "#FFFFFF",
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 9,
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 14,
    "data": {
     "name": "Icon photo"
    },
    "maxHeight": 70,
    "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
    "toolTipShadowColor": "#333333",
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipTextShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingBottom": 9,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 1,
    "toolTipShadowSpread": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "iconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4.png",
    "width": "3.03%",
    "paddingLeft": 0,
    "height": "5.48%",
    "mode": "push",
    "maxWidth": 50,
    "paddingRight": 0,
    "paddingBottom": 0,
    "class": "IconButton",
    "verticalAlign": "middle",
    "minHeight": 40,
    "transparencyActive": true,
    "top": "2%",
    "click": "this.setComponentVisibility(this.Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB, false, 0, this.effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15, 'hideEffect', false)",
    "rollOverIconURL": "skin/IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4_rollover.png",
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "data": {
     "name": "X"
    },
    "maxHeight": 50,
    "id": "IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
    "borderSize": 0,
    "borderRadius": 0,
    "minWidth": 40,
    "right": "1%",
    "shadow": false,
    "backgroundOpacity": 0,
    "paddingTop": 0
   },
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ]
 },
 {
  "hfov": 360,
  "audios": [
   {
    "maximumAngle": 231.16,
    "id": "audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
    "yaw": 63.92,
    "class": "DirectionalPanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_A83B2F1A_B250_204B_41B2_61A870B2B428.mp3"
    },
    "data": {
     "label": "Audio1"
    },
    "autoplay": true,
    "loop": true,
    "pitch": 15.16
   },
   {
    "maximumAngle": 97.14,
    "id": "audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
    "yaw": 4.55,
    "class": "DirectionalPanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.ogg",
     "id": "audioresource_A84F2D34_B270_605F_41E2_4CF67AB762D2",
     "class": "AudioResource",
     "mp3Url": "media/audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A.mp3"
    },
    "data": {
     "label": "agua suave"
    },
    "autoplay": true,
    "loop": true,
    "pitch": -18.69
   }
  ],
  "id": "panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_43BF95D4_4BE3_C661_4156_E297EE8B4CAE",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.3,
        "yaw": -60.26,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 107,
           "width": 104,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_18_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.48
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_43BFE5D4_4BE3_C661_41BD_2E354D88EBB7",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.01,
        "yaw": -60.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 166,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_17_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.61
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_43BFF5D4_4BE3_C661_41CD_FB127F36124E",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.96,
        "yaw": -95.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 127,
           "width": 132,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_16_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.23
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_43BFC5D4_4BE3_C661_41D0_F1CA714D8395",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 15.29,
        "yaw": -95.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 190,
           "width": 254,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_14_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.45
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_43BFD5D4_4BE3_C661_4194_9B66A39B63FC",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 26.92,
        "yaw": 46.43,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 112,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_22_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.7
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "This elevator is the main entry to Casa Cascada. It takes you from the driveway up to the house.",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 26.92,
        "yaw": 46.43,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 813,
           "width": 457,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_22_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.7
       }
      ]
     },
     {
      "bleachingDistance": 0.4,
      "id": "overlay_85EA09A5_A79D_2D7C_41B8_C11389816DF8",
      "class": "LensFlarePanoramaOverlay",
      "yaw": 70.11,
      "bleaching": 0.7,
      "pitch": 63.47
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_43BE25D4_4BE3_C661_41BA_F5190638F54C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.13,
        "yaw": -33.1,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 107,
           "width": 102,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_31_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.89
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_43BE35D4_4BE3_C661_41D2_9BCF0BA2F360",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.32,
        "yaw": -33.01,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 166,
           "width": 172,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_30_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.19
       }
      ]
     },
     {
      "inertia": false,
      "hfov": 43.2,
      "id": "panorama_89971CEE_8E23_A91D_41C4_65247F18B5DC_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_89971CEE_8E23_A91D_41C4_65247F18B5DC_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_43BE05D4_4BE3_C661_4163_F7EB10C18A94",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 3.45,
        "yaw": -85.82,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 21,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_36_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.47
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, this.ImageResource_BA67903A_B21B_916B_41CD_514C518C3BDB, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "toolTip": "View Door Detail",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 3.45,
        "yaw": -85.82,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 519,
           "width": 57,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_36_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.47
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 21.58,
      "yaw": -85.82,
      "popupMaxHeight": "85%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "85%",
      "id": "popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953",
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 1024,
         "width": 717,
         "url": "media/popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": 0.47
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_43BE15D4_4BE3_C661_41A3_CCABB5B0EE2E",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 3.01,
        "yaw": -84.49,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 50,
           "width": 50,
           "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_0_HS_35_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.87
       }
      ]
     }
    ],
    "front": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 130,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_t.jpg",
  "label": "Entrance",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": {
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "width": "17.15%",
   "paddingLeft": 0,
   "height": "76.75%",
   "mode": "push",
   "maxWidth": 70,
   "paddingRight": 0,
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "class": "IconButton",
   "minHeight": 1,
   "transparencyActive": false,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "data": {
    "name": "IconButton8475"
   },
   "maxHeight": 70,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "borderSize": 0,
   "borderRadius": 0,
   "minWidth": 1,
   "backgroundOpacity": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "displayPlaybackBar": true,
  "buttonToggleHotspots": {
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "toolTipBorderRadius": 1,
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "toolTipBackgroundColor": "#000000",
   "width": "17.15%",
   "paddingLeft": 0,
   "height": "76.75%",
   "mode": "toggle",
   "maxWidth": 70,
   "paddingRight": 0,
   "toolTipTextShadowVerticalLength": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTip": "Hotspots Visibility",
   "paddingBottom": 0,
   "toolTipBorderSize": 0,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 14,
   "toolTipFontSize": 13,
   "verticalAlign": "middle",
   "class": "IconButton",
   "toolTipDisplayTime": 600,
   "minHeight": 1,
   "transparencyActive": true,
   "toolTipShadowOpacity": 0,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "toolTipTextShadowColor": "#000000",
   "toolTipOpacity": 0.7,
   "toolTipFontColor": "#FFFFFF",
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "toolTipPaddingTop": 9,
   "toolTipBorderColor": "#767676",
   "toolTipPaddingRight": 14,
   "data": {
    "name": "Icon hs visibility"
   },
   "maxHeight": 70,
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "toolTipShadowColor": "#333333",
   "borderSize": 0,
   "borderRadius": 0,
   "toolTipTextShadowHorizontalLength": 0,
   "toolTipFontFamily": "Arial",
   "toolTipPaddingBottom": 9,
   "minWidth": 1,
   "backgroundOpacity": 0,
   "toolTipTextShadowOpacity": 1,
   "toolTipShadowSpread": 0,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonStop": [
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4",
   "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
  ],
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 120,
   "yaw": -29.94,
   "class": "PanoramaCameraPosition",
   "pitch": -2.94
  }
 },
 {
  "hfov": 360,
  "audios": [
   {
    "maximumAngle": 61.89,
    "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
    "yaw": -10.86,
    "class": "DirectionalPanoramaAudio",
    "audio": {
     "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg",
     "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
     "class": "AudioResource",
     "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3"
    },
    "data": {
     "label": "birds"
    },
    "autoplay": true,
    "loop": true,
    "pitch": -0.76
   }
  ],
  "id": "panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436B1211_4BE2_5DE3_4170_54A25A9A7B5D",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.58,
        "yaw": -11.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 137,
           "width": 111,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_11_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.68
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436B0211_4BE2_5DE3_4181_049F30EF1613",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.94,
        "yaw": -89.98,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 133,
           "width": 117,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436BF211_4BE2_5DE3_41BD_024D4BDA31F3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 0.22,
        "yaw": 122.18,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 20,
           "width": 41,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 84.88
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436BE211_4BE2_5DE3_41D2_519AAE246444",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.66,
        "yaw": -168.08,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 42,
           "width": 116,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.15
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_436BD211_4BE2_5DE3_41C6_F36ED0A688A0",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 9.61,
        "yaw": -90,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 205,
           "width": 161,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.27
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_436BC211_4BE2_5DE3_41C9_15E34230E36D",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 8.39,
        "yaw": -11.53,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 178,
           "width": 141,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.47
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_436BB211_4BE2_5DE3_41CF_91A33FB5BD65",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 0.3,
        "yaw": 125.91,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 40,
           "width": 57,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_16_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 85.05
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_436BA211_4BE2_5DE3_41C9_9CF9FD51A4BE",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 10.52,
        "yaw": -168.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 199,
           "width": 182,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_15_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.91
       }
      ]
     },
     {
      "inertia": false,
      "hfov": 45.9,
      "id": "panorama_8522AA3C_924C_BB90_417E_CAFA6C9ED62B_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_89971CEE_8E23_A91D_41C4_65247F18B5DC_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_436B9211_4BE2_5DE3_41BE_6E92DFA714A4",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 24.3,
        "yaw": -143.08,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 158,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_18_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.52
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_A2BF4B98_AC05_A732_41E2_95982114A76A, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, this.ImageResource_A31A1744_AC1A_AF13_41D4_4324E665C86E, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 24.3,
        "yaw": -143.08,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 519,
           "width": 411,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_18_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.52
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 24.28,
      "yaw": -143.08,
      "popupMaxHeight": "85%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "85%",
      "id": "popup_A2BF4B98_AC05_A732_41E2_95982114A76A",
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 821,
         "width": 1024,
         "url": "media/popup_A2BF4B98_AC05_A732_41E2_95982114A76A_0_1.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": 3.52
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_436B8211_4BE2_5DE3_41B1_2853F5F5B278",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 7.19,
        "yaw": -176.24,
        "image": {
         "levels": [
          {
           "height": 69,
           "width": 60,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_20_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 13.63
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_A3F32E19_AC3E_A135_41D3_EFC377272FCB, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, this.ImageResource_A61F5B0A_ACA3_F059_41C1_89F06DC1A99C, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 7.19,
        "yaw": -176.24,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 138,
           "width": 120,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_20_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 13.63
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 7.27,
      "yaw": -176.24,
      "popupMaxHeight": "85%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "85%",
      "id": "popup_A3F32E19_AC3E_A135_41D3_EFC377272FCB",
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 1024,
         "width": 988,
         "url": "media/popup_A3F32E19_AC3E_A135_41D3_EFC377272FCB_0_2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": 13.63
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_436A7211_4BE2_5DE3_41C5_420B94CC40EE",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 7.55,
        "yaw": 153.83,
        "image": {
         "levels": [
          {
           "height": 68,
           "width": 63,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_19_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.18
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_A30DBD71_AC0A_E3F5_41BF_B1BFC634C608, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 7.55,
        "yaw": 153.83,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 136,
           "width": 126,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_19_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.18
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 3.88,
      "yaw": 153.83,
      "popupMaxHeight": "85%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "85%",
      "id": "popup_A30DBD71_AC0A_E3F5_41BF_B1BFC634C608",
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 1005,
         "width": 459,
         "url": "media/popup_A30DBD71_AC0A_E3F5_41BF_B1BFC634C608_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 511,
         "width": 233,
         "url": "media/popup_A30DBD71_AC0A_E3F5_41BF_B1BFC634C608_0_1.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": -2.18
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436A5211_4BE2_5DE3_41C7_9257A4C6CDDD",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 4.59,
        "yaw": -131.94,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 83,
           "width": 77,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_23_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 10.59
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436A7212_4BE2_5DE1_41C5_8888D5832260",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 2.69,
        "yaw": -173.12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 42,
           "width": 46,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_22_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 15.21
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436A6212_4BE2_5DE1_41AF_029D0C61D6B2",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 2.64,
        "yaw": 157.17,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 46,
           "width": 43,
           "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_0_HS_21_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.79
       }
      ]
     }
    ],
    "front": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_t.jpg",
  "label": "Entry Hall",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 110,
   "yaw": 7.67,
   "class": "PanoramaCameraPosition",
   "pitch": -2.7
  }
 },
 {
  "hfov": 360,
  "id": "panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_43646893_4BE2_CEE6_41C2_D01057D87B00",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 5.29,
        "yaw": 26.42,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 88,
           "width": 88,
           "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.36
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_43679893_4BE2_CEE6_41B0_7DFF0CFEFF25",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.1,
        "yaw": 26.55,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 139,
           "width": 118,
           "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.66
       }
      ]
     },
     {
      "inertia": false,
      "hfov": 41.4,
      "id": "panorama_8BE23503_927C_C970_41C4_CFD835533EAC_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_89971CEE_8E23_A91D_41C4_65247F18B5DC_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_43678893_4BE2_CEE6_4185_4A56AADEABA8",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 10.55,
        "yaw": -99.15,
        "image": {
         "levels": [
          {
           "height": 88,
           "width": 88,
           "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_0_HS_10_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.79
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_B669BD38_ACA0_D0BA_41CD_BD4CA7F7CABE, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "toolTip": "View Painting",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 10.55,
        "yaw": -99.15,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 177,
           "width": 176,
           "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.79
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_4367B893_4BE2_CEE6_41CC_36E75D5F1C86",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 2.77,
        "yaw": -94.54,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 46,
           "width": 46,
           "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.81
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 10.64,
      "yaw": -99.15,
      "popupMaxHeight": "85%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "85%",
      "id": "popup_B669BD38_ACA0_D0BA_41CD_BD4CA7F7CABE",
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 436,
         "width": 424,
         "url": "media/popup_B669BD38_ACA0_D0BA_41CD_BD4CA7F7CABE_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": -0.79
     }
    ],
    "front": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 1904,
       "width": 1904,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_t.jpg",
  "pitch": 0,
  "label": "Living Room",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -87.03,
   "class": "PanoramaCameraPosition",
   "pitch": -7.36
  }
 },
 {
  "hfov": 360,
  "id": "panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436B4DA9_4BE2_C622_41C6_C89DD5BC6D8C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 13.76,
        "yaw": 95.23,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 225,
           "width": 248,
           "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.02
       }
      ]
     },
     {
      "inertia": false,
      "hfov": 47.7,
      "id": "panorama_88D57A9A_9243_D891_41DB_910F5D46850A_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_89971CEE_8E23_A91D_41C4_65247F18B5DC_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_436ABDA9_4BE2_C622_41D0_DBD09FE4857D",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [
       {
        "hfov": 11.86,
        "yaw": 6.09,
        "image": {
         "levels": [
          {
           "height": 118,
           "width": 104,
           "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_0_HS_10_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.86
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, this.ImageResource_A616A982_B0A2_CE89_41E2_8B238ACE953B, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "toolTip": "View Bedroom Mirror",
        "mapColor": "#FF0000"
       }
      ],
      "items": [
       {
        "hfov": 11.86,
        "yaw": 6.09,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "levels": [
          {
           "height": 236,
           "width": 209,
           "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.86
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436AADA9_4BE2_C622_41C2_57CBB3215B6F",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": false,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 2.75,
        "yaw": 11.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 48,
           "width": 48,
           "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.89
       }
      ]
     },
     {
      "rotationZ": 0,
      "hfov": 12.25,
      "yaw": 6.09,
      "popupMaxHeight": "85%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "popupMaxWidth": "85%",
      "id": "popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6",
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "rotationX": 0,
      "image": {
       "levels": [
        {
         "height": 687,
         "width": 1024,
         "url": "media/popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6_0_3.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotationY": 0,
      "hideDuration": 500,
      "pitch": -3.86
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_436A9DA9_4BE2_C622_41BF_FE208C3BA5F1",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 16.4,
        "yaw": 93.42,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 338,
           "width": 292,
           "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_0_HS_11_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.43
       }
      ]
     }
    ],
    "front": {
     "levels": [
      {
       "height": 2016,
       "width": 2016,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 2016,
       "width": 2016,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 2016,
       "width": 2016,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "height": 2016,
       "width": 2016,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "height": 2016,
       "width": 2016,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 2016,
       "width": 2016,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_t.jpg",
  "pitch": -9.6,
  "label": "Master Bedroom",
  "partial": false,
  "class": "Panorama",
  "vfov": 160.8,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 12.16,
   "class": "PanoramaCameraPosition",
   "pitch": -15.35
  }
 },
 {
  "hfov": 360,
  "id": "panorama_436210A5_4BE2_7E22_41A1_7AB279A95401",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_4365E0A5_4BE2_7E22_41C8_8E1630F8C8D5",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 5.98,
        "yaw": -105.62,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 94,
           "width": 101,
           "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.17
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_4365F0A5_4BE2_7E22_41BB_6F2913B9D868",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 4.96,
        "yaw": -74.12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 83,
           "width": 83,
           "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.83
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_4365C0A5_4BE2_7E22_41C8_637B9C6B2ADB",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 8.33,
        "yaw": -105.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 151,
           "width": 140,
           "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.25
       }
      ]
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_4365D0A5_4BE2_7E22_41D0_EBFF9F3168ED",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.7,
        "yaw": -74.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 142,
           "width": 129,
           "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.13
       }
      ]
     },
     {
      "inertia": false,
      "hfov": 61.2,
      "id": "panorama_8C745EDD_924C_D893_41DB_554A50476C57_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_89971CEE_8E23_A91D_41C4_65247F18B5DC_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "rotate": false
     }
    ],
    "front": {
     "levels": [
      {
       "height": 1928,
       "width": 1928,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 1928,
       "width": 1928,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 1928,
       "width": 1928,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "height": 1928,
       "width": 1928,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "height": 1928,
       "width": 1928,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 1928,
       "width": 1928,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_t.jpg",
  "pitch": 1.8,
  "label": "Entrance Night",
  "partial": false,
  "class": "Panorama",
  "vfov": 176.4,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 105,
   "yaw": -23.3,
   "class": "PanoramaCameraPosition",
   "pitch": -13.49
  }
 },
 {
  "hfov": 360,
  "id": "panorama_4798F767_4BE6_C22E_41CA_168952B09BB8",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_t.jpg",
    "front": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_0_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_t.jpg",
    "front": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_t.jpg",
    "front": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_f_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_f.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_u_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_u.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_b_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_b.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_d_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_d.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_l_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_l.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "height": 2304,
       "width": 2304,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_r_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1024,
       "width": 1024,
       "url": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_2_r.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_1_t.jpg",
  "frameDisplayTime": 3000,
  "frameTransitionTime": 4000,
  "pitch": -5,
  "label": "Live Panorama",
  "partial": false,
  "class": "LivePanorama",
  "vfov": 119.64,
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 105,
   "yaw": 179.21,
   "class": "PanoramaCameraPosition",
   "pitch": 1.86
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, true, -1, this.effect_BAD64FCE_9243_78F0_41DD_FFAEB204D688, 'showEffect', false); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, true, -1, this.effect_8745D1AE_976B_8011_41D6_24473F83983D, 'showEffect', false); this.setComponentVisibility(this.IconButton_B530AA99_977D_70C7_41CC_E8FB9E97A6CE, true, -1, this.effect_8745B1AE_976B_806E_41DE_F52557E7FB37, 'showEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, true, -1, this.effect_874591AE_976B_806E_41DD_853F071B0446, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, false, -1, this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5, 'hideEffect', false); this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, false, -1, this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, false, -1, this.effect_8745A1AE_976B_806E_41C1_C459112A5F7A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, false, -1, this.effect_8745A1AE_976B_806E_41C1_C459112A5F7A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B530AA99_977D_70C7_41CC_E8FB9E97A6CE, false, -1, this.effect_874581AE_976B_806E_4115_3AC62AD03870, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B530AA99_977D_70C7_41CC_E8FB9E97A6CE, false, -1, this.effect_874581AE_976B_806E_4115_3AC62AD03870, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, false, -1, this.effect_874A61AE_976B_806E_41D0_5AA523A9EEA8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, false, -1, this.effect_874A61AE_976B_806E_41D0_5AA523A9EEA8, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, true, -1, this.effect_BAD71FD0_9243_7890_41C2_C6C735C5F9CA, 'showEffect', false); this.setComponentVisibility(this.IconButton_B65A0E44_977F_904D_41D1_F0D3BD0ACE54, true, -1, this.effect_874591B3_976B_8076_41B6_602BD66DE1D6, 'showEffect', false); this.setComponentVisibility(this.IconButton_B7E18152_977F_B045_41D0_DF5267274516, true, -1, this.effect_874A71B4_976B_8071_41DE_679C7EF83877, 'showEffect', false); this.setComponentVisibility(this.IconButton_B7E05EB0_977F_90C5_419D_BE1CB052CDF8, true, -1, this.effect_874A51B4_976B_8071_41D7_C7761BD23EC7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, false, -1, this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6, 'hideEffect', false); this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, false, -1, this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B65A0E44_977F_904D_41D1_F0D3BD0ACE54, false, -1, this.effect_874A61B3_976B_8076_41D5_7E70F882CE78, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B65A0E44_977F_904D_41D1_F0D3BD0ACE54, false, -1, this.effect_874A61B3_976B_8076_41D5_7E70F882CE78, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7E18152_977F_B045_41D0_DF5267274516, false, -1, this.effect_874A41B4_976B_8071_41E1_465235C876A8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7E18152_977F_B045_41D0_DF5267274516, false, -1, this.effect_874A41B4_976B_8071_41E1_465235C876A8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7E05EB0_977F_90C5_419D_BE1CB052CDF8, false, -1, this.effect_874A21B4_976B_8071_41B2_C1F90E1A32CD, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7E05EB0_977F_90C5_419D_BE1CB052CDF8, false, -1, this.effect_874A21B4_976B_8071_41B2_C1F90E1A32CD, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, true, -1, this.effect_BAD77FD2_9243_7890_41E1_324C9A318973, 'showEffect', false); this.setComponentVisibility(this.IconButton_B7EBFD1D_977C_B1FF_41DD_FF84B2338AC5, true, -1, this.effect_874B61B7_976B_807F_41D7_FB90AA78C22B, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, false, -1, this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB, 'hideEffect', false); this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, false, -1, this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7EBFD1D_977C_B1FF_41DD_FF84B2338AC5, false, -1, this.effect_874B71B7_976B_807F_4193_94EEAFA53A3D, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7EBFD1D_977C_B1FF_41DD_FF84B2338AC5, false, -1, this.effect_874B71B7_976B_807F_4193_94EEAFA53A3D, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, true, -1, this.effect_BAD0EFD4_9243_7890_41E0_794CA45DA064, 'showEffect', false); this.setComponentVisibility(this.IconButton_BF27076E_B0A7_C399_41D8_C4E13467FA83, true, -1, this.effect_A606A9A5_B0A2_CE8B_41DC_7E3F6FF70329, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, false, -1, this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0, 'hideEffect', false); this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, false, -1, this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0, 'hideEffect', false); this.setComponentVisibility(this.IconButton_BF27076E_B0A7_C399_41D8_C4E13467FA83, false, -1, this.effect_A60689A5_B0A2_CE8B_41D4_C327DB6AF509, 'hideEffect', false); this.setComponentVisibility(this.IconButton_BF27076E_B0A7_C399_41D8_C4E13467FA83, false, -1, this.effect_A60689A5_B0A2_CE8B_41D4_C327DB6AF509, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_436210A5_4BE2_7E22_41A1_7AB279A95401",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.IconButton_B3E22EC4_9743_B04D_41D2_D21DD28DED46, true, -1, this.effect_8FCF031E_97A7_8031_41DC_A8471D11A59C, 'showEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, true, -1, this.effect_8FCFC31F_97A7_802F_41C1_11702DC8AAED, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.IconButton_B3E22EC4_9743_B04D_41D2_D21DD28DED46, false, -1, this.effect_8FCF231F_97A7_802F_41E1_4404E028B6D8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B3E22EC4_9743_B04D_41D2_D21DD28DED46, false, -1, this.effect_8FCF231F_97A7_802F_41E1_4404E028B6D8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, false, -1, this.effect_8FCFE31F_97A7_802F_41A1_8AABA1FA30D4, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, false, -1, this.effect_8FCFE31F_97A7_802F_41A1_8AABA1FA30D4, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4798F767_4BE6_C22E_41CA_168952B09BB8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, true, -1, this.effect_451AFC64_4BEE_4621_4170_5F739970023E, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, false, -1, this.effect_451AEC64_4BEE_4621_41AF_50E67450D9E3, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, false, -1, this.effect_451AEC64_4BEE_4621_41AF_50E67450D9E3, 'hideEffect', false); this.trigger('tourEnded')",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_43BF85D4_4BE3_C661_41BD_F51937765D4F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1); this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, true, -1, this.effect_BAD64FCE_9243_78F0_41DD_FFAEB204D688, 'showEffect', false); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, true, -1, this.effect_8745D1AE_976B_8011_41D6_24473F83983D, 'showEffect', false); this.setComponentVisibility(this.IconButton_B530AA99_977D_70C7_41CC_E8FB9E97A6CE, true, -1, this.effect_8745B1AE_976B_806E_41DE_F52557E7FB37, 'showEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, true, -1, this.effect_874591AE_976B_806E_41DD_853F071B0446, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, false, -1, this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5, 'hideEffect', false); this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, false, -1, this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, false, -1, this.effect_8745A1AE_976B_806E_41C1_C459112A5F7A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, false, -1, this.effect_8745A1AE_976B_806E_41C1_C459112A5F7A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B530AA99_977D_70C7_41CC_E8FB9E97A6CE, false, -1, this.effect_874581AE_976B_806E_4115_3AC62AD03870, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B530AA99_977D_70C7_41CC_E8FB9E97A6CE, false, -1, this.effect_874581AE_976B_806E_4115_3AC62AD03870, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, false, -1, this.effect_874A61AE_976B_806E_41D0_5AA523A9EEA8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, false, -1, this.effect_874A61AE_976B_806E_41D0_5AA523A9EEA8, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_436B2211_4BE2_5DE3_4191_5DA6149B332E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2); this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, true, -1, this.effect_BAD71FD0_9243_7890_41C2_C6C735C5F9CA, 'showEffect', false); this.setComponentVisibility(this.IconButton_B65A0E44_977F_904D_41D1_F0D3BD0ACE54, true, -1, this.effect_874591B3_976B_8076_41B6_602BD66DE1D6, 'showEffect', false); this.setComponentVisibility(this.IconButton_B7E18152_977F_B045_41D0_DF5267274516, true, -1, this.effect_874A71B4_976B_8071_41DE_679C7EF83877, 'showEffect', false); this.setComponentVisibility(this.IconButton_B7E05EB0_977F_90C5_419D_BE1CB052CDF8, true, -1, this.effect_874A51B4_976B_8071_41D7_C7761BD23EC7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, false, -1, this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6, 'hideEffect', false); this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, false, -1, this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B65A0E44_977F_904D_41D1_F0D3BD0ACE54, false, -1, this.effect_874A61B3_976B_8076_41D5_7E70F882CE78, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B65A0E44_977F_904D_41D1_F0D3BD0ACE54, false, -1, this.effect_874A61B3_976B_8076_41D5_7E70F882CE78, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7E18152_977F_B045_41D0_DF5267274516, false, -1, this.effect_874A41B4_976B_8071_41E1_465235C876A8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7E18152_977F_B045_41D0_DF5267274516, false, -1, this.effect_874A41B4_976B_8071_41E1_465235C876A8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7E05EB0_977F_90C5_419D_BE1CB052CDF8, false, -1, this.effect_874A21B4_976B_8071_41B2_C1F90E1A32CD, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7E05EB0_977F_90C5_419D_BE1CB052CDF8, false, -1, this.effect_874A21B4_976B_8071_41B2_C1F90E1A32CD, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_43647893_4BE2_CEE6_41C4_07378FDECE7B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3); this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, true, -1, this.effect_BAD77FD2_9243_7890_41E1_324C9A318973, 'showEffect', false); this.setComponentVisibility(this.IconButton_B7EBFD1D_977C_B1FF_41DD_FF84B2338AC5, true, -1, this.effect_874B61B7_976B_807F_41D7_FB90AA78C22B, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, false, -1, this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB, 'hideEffect', false); this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, false, -1, this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7EBFD1D_977C_B1FF_41DD_FF84B2338AC5, false, -1, this.effect_874B71B7_976B_807F_4193_94EEAFA53A3D, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B7EBFD1D_977C_B1FF_41DD_FF84B2338AC5, false, -1, this.effect_874B71B7_976B_807F_4193_94EEAFA53A3D, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_436B5DA9_4BE2_C622_41C6_C5D90373F5E2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4); this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, true, -1, this.effect_BAD0EFD4_9243_7890_41E0_794CA45DA064, 'showEffect', false); this.setComponentVisibility(this.IconButton_BF27076E_B0A7_C399_41D8_C4E13467FA83, true, -1, this.effect_A606A9A5_B0A2_CE8B_41DC_7E3F6FF70329, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, false, -1, this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0, 'hideEffect', false); this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, false, -1, this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0, 'hideEffect', false); this.setComponentVisibility(this.IconButton_BF27076E_B0A7_C399_41D8_C4E13467FA83, false, -1, this.effect_A60689A5_B0A2_CE8B_41D4_C327DB6AF509, 'hideEffect', false); this.setComponentVisibility(this.IconButton_BF27076E_B0A7_C399_41D8_C4E13467FA83, false, -1, this.effect_A60689A5_B0A2_CE8B_41D4_C327DB6AF509, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_436210A5_4BE2_7E22_41A1_7AB279A95401",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_436210A5_4BE2_7E22_41A1_7AB279A95401_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5); this.setComponentVisibility(this.IconButton_B3E22EC4_9743_B04D_41D2_D21DD28DED46, true, -1, this.effect_8FCF031E_97A7_8031_41DC_A8471D11A59C, 'showEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, true, -1, this.effect_8FCFC31F_97A7_802F_41C1_11702DC8AAED, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.IconButton_B3E22EC4_9743_B04D_41D2_D21DD28DED46, false, -1, this.effect_8FCF231F_97A7_802F_41E1_4404E028B6D8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B3E22EC4_9743_B04D_41D2_D21DD28DED46, false, -1, this.effect_8FCF231F_97A7_802F_41E1_4404E028B6D8, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, false, -1, this.effect_8FCFE31F_97A7_802F_41A1_8AABA1FA30D4, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A, false, -1, this.effect_8FCFE31F_97A7_802F_41A1_8AABA1FA30D4, 'hideEffect', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4798F767_4BE6_C22E_41CA_168952B09BB8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_4798F767_4BE6_C22E_41CA_168952B09BB8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 0); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, true, -1, this.effect_451AFC64_4BEE_4621_4170_5F739970023E, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, false, -1, this.effect_451AEC64_4BEE_4621_41AF_50E67450D9E3, 'hideEffect', false); this.setComponentVisibility(this.IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26, false, -1, this.effect_451AEC64_4BEE_4621_41AF_50E67450D9E3, 'hideEffect', false)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   }
  ]
 },
 {
  "thumbnailUrl": "media/album_9D83BE5D_96CC_F07F_41D2_D123849CCDC8_t.png",
  "playList": {
   "id": "album_9D83BE5D_96CC_F07F_41D2_D123849CCDC8_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "media": {
      "thumbnailUrl": "media/photo_401B85E0_4C63_7E98_41BB_6A16C31E31A2_t.jpg",
      "label": "01",
      "width": 3000,
      "id": "photo_401B85E0_4C63_7E98_41BB_6A16C31E31A2",
      "class": "Photo",
      "height": 2000,
      "image": {
       "levels": [
        {
         "url": "media/photo_401B85E0_4C63_7E98_41BB_6A16C31E31A2.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.37",
       "class": "PhotoCameraPosition",
       "y": "0.56"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_47509739_4C63_7BE8_41AB_2F19E7831FE9_t.jpg",
      "label": "02",
      "width": 4469,
      "id": "photo_47509739_4C63_7BE8_41AB_2F19E7831FE9",
      "class": "Photo",
      "height": 3000,
      "image": {
       "levels": [
        {
         "url": "media/photo_47509739_4C63_7BE8_41AB_2F19E7831FE9.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.43",
       "class": "PhotoCameraPosition",
       "y": "0.58"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_4752CBB1_4C63_6AF8_41D3_0C33DB863547_t.jpg",
      "label": "03",
      "width": 3500,
      "id": "photo_4752CBB1_4C63_6AF8_41D3_0C33DB863547",
      "class": "Photo",
      "height": 2334,
      "image": {
       "levels": [
        {
         "url": "media/photo_4752CBB1_4C63_6AF8_41D3_0C33DB863547.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.69",
       "class": "PhotoCameraPosition",
       "y": "0.60"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_47513F79_4C63_6A68_41B0_4316512EE82D_t.jpg",
      "label": "04",
      "width": 3000,
      "id": "photo_47513F79_4C63_6A68_41B0_4316512EE82D",
      "class": "Photo",
      "height": 1844,
      "image": {
       "levels": [
        {
         "url": "media/photo_47513F79_4C63_6A68_41B0_4316512EE82D.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.38",
       "class": "PhotoCameraPosition",
       "y": "0.31"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_4752B0C7_4C63_1698_4184_60EBB2677E81_t.jpg",
      "label": "05",
      "width": 2000,
      "id": "photo_4752B0C7_4C63_1698_4184_60EBB2677E81",
      "class": "Photo",
      "height": 1333,
      "image": {
       "levels": [
        {
         "url": "media/photo_4752B0C7_4C63_1698_4184_60EBB2677E81.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.45",
       "class": "PhotoCameraPosition",
       "y": "0.62"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_475141B6_4C63_16F8_41BC_1C591B53C229_t.jpg",
      "label": "06",
      "width": 1875,
      "id": "photo_475141B6_4C63_16F8_41BC_1C591B53C229",
      "class": "Photo",
      "height": 2500,
      "image": {
       "levels": [
        {
         "url": "media/photo_475141B6_4C63_16F8_41BC_1C591B53C229.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_to_height",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.45",
       "class": "PhotoCameraPosition",
       "y": "0.48"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_4752B2F9_4C63_1A68_41B9_3E355723AF71_t.jpg",
      "label": "07",
      "width": 2250,
      "id": "photo_4752B2F9_4C63_1A68_41B9_3E355723AF71",
      "class": "Photo",
      "height": 3000,
      "image": {
       "levels": [
        {
         "url": "media/photo_4752B2F9_4C63_1A68_41B9_3E355723AF71.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_to_height",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.25",
       "class": "PhotoCameraPosition",
       "y": "0.59"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_4752B432_4C63_1DF8_41D0_5E704EDA328E_t.jpg",
      "label": "08",
      "width": 2782,
      "id": "photo_4752B432_4C63_1DF8_41D0_5E704EDA328E",
      "class": "Photo",
      "height": 4000,
      "image": {
       "levels": [
        {
         "url": "media/photo_4752B432_4C63_1DF8_41D0_5E704EDA328E.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_to_height",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.35",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_4752B84C_4C63_15A8_41B8_79815C3443D9_t.jpg",
      "label": "09",
      "width": 1869,
      "id": "photo_4752B84C_4C63_15A8_41B8_79815C3443D9",
      "class": "Photo",
      "height": 2700,
      "image": {
       "levels": [
        {
         "url": "media/photo_4752B84C_4C63_15A8_41B8_79815C3443D9.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_to_height",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.59",
       "class": "PhotoCameraPosition",
       "y": "0.62"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    },
    {
     "media": {
      "thumbnailUrl": "media/photo_47514988_4C63_16A8_41AF_8614FAB6B00A_t.jpg",
      "label": "10",
      "width": 2352,
      "id": "photo_47514988_4C63_16A8_41AF_8614FAB6B00A",
      "class": "Photo",
      "height": 3000,
      "image": {
       "levels": [
        {
         "url": "media/photo_47514988_4C63_16A8_41AF_8614FAB6B00A.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "easing": "linear",
      "scaleMode": "fit_to_height",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "zoomFactor": 1.1,
       "x": "0.74",
       "class": "PhotoCameraPosition",
       "y": "0.52"
      },
      "initialPosition": {
       "zoomFactor": 1,
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50"
      },
      "duration": 5000
     }
    }
   ]
  },
  "label": "Photo Album Casa Cascada-6032",
  "id": "album_9D83BE5D_96CC_F07F_41D2_D123849CCDC8",
  "class": "PhotoAlbum"
 },
 "this.photo_401B85E0_4C63_7E98_41BB_6A16C31E31A2",
 "this.photo_47509739_4C63_7BE8_41AB_2F19E7831FE9",
 "this.photo_4752CBB1_4C63_6AF8_41D3_0C33DB863547",
 "this.photo_47513F79_4C63_6A68_41B0_4316512EE82D",
 "this.photo_4752B0C7_4C63_1698_4184_60EBB2677E81",
 "this.photo_475141B6_4C63_16F8_41BC_1C591B53C229",
 "this.photo_4752B2F9_4C63_1A68_41B9_3E355723AF71",
 "this.photo_4752B432_4C63_1DF8_41D0_5E704EDA328E",
 "this.photo_4752B84C_4C63_15A8_41B8_79815C3443D9",
 "this.photo_47514988_4C63_16A8_41AF_8614FAB6B00A",
 {
  "id": "playList_49093697_5083_705F_4195_B2B9A9770204",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.loopAlbum(this.playList_49093697_5083_705F_4195_B2B9A9770204, 0)",
    "media": "this.album_9D83BE5D_96CC_F07F_41D2_D123849CCDC8",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6PhotoAlbumPlayer",
    "start": "this.changeBackgroundWhilePlay(this.playList_49093697_5083_705F_4195_B2B9A9770204, 0, '#000000')"
   }
  ]
 },
 {
  "levels": [
   {
    "height": 624,
    "width": 959,
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 333,
    "width": 512,
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_2543CDB9_364B_F368_41C9_F099569D4E96",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "easing": "linear",
  "id": "effect_98AADBB0_96C5_F0C5_41B2_1C4D08E503DB",
  "class": "FadeInEffect",
  "duration": 200
 },
 {
  "easing": "quad_in",
  "id": "effect_85A2AAA4_9245_B8B0_41CE_5BE27798090E",
  "class": "FadeInEffect",
  "duration": 300
 },
 {
  "easing": "quad_out",
  "id": "effect_85A28AA4_9245_B8B0_41A1_5761D51DA5D1",
  "class": "FadeOutEffect",
  "duration": 300
 },
 {
  "easing": "linear",
  "id": "effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D",
  "class": "FadeInEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C",
  "class": "FadeOutEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE",
  "class": "FadeInEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CDD049FB_EED0_D221_41EB_CA2134B978E0",
  "class": "FadeOutEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CD2B8C48_EED0_726F_41E4_49557D18059C",
  "class": "FadeInEffect",
  "duration": 200
 },
 {
  "easing": "linear",
  "id": "effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0",
  "class": "FadeOutEffect",
  "duration": 200
 },
 {
  "levels": [
   {
    "height": 436,
    "width": 424,
    "url": "media/zoomImage_B7B4CF2E_ACA1_D059_41E1_90B6EB273F9F_0_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_257A3DB9_364B_F368_41C0_464826ACCEC7",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_8F61F585_ADE1_504A_41DC_2D3ADD9A8EBE",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_8F600585_ADE1_504A_41CF_4C85FB9EE8B1",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "levels": [
   {
    "height": 1218,
    "width": 1519,
    "url": "media/zoomImage_BC42C1D7_AC0B_E33E_41D0_8C3146CF3470_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 821,
    "width": 1024,
    "url": "media/zoomImage_BC42C1D7_AC0B_E33E_41D0_8C3146CF3470_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 410,
    "width": 512,
    "url": "media/zoomImage_BC42C1D7_AC0B_E33E_41D0_8C3146CF3470_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_27E4EDCA_364B_F329_41A5_8316036A9C18",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_A6062AFE_ACA3_F1B9_41D1_EB2F6353D686",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_A606CAFE_ACA3_F1B6_41B6_6AA3A6FC7F12",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "levels": [
   {
    "height": 1005,
    "width": 459,
    "url": "media/zoomImage_BC4264DE_AC1B_A12E_41E1_E696BF67962B_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 511,
    "width": 233,
    "url": "media/zoomImage_BC4264DE_AC1B_A12E_41E1_E696BF67962B_0_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_27E4ADCA_364B_F329_41BA_94582131494D",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_A6070B00_ACA3_F049_41B6_ED079EB12B5C",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_A6073B00_ACA3_F049_41D2_F84883FA3578",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "levels": [
   {
    "height": 2071,
    "width": 2000,
    "url": "media/zoomImage_BCD34815_AC1A_A132_41E4_D14AF6A277FA_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2048,
    "width": 1977,
    "url": "media/zoomImage_BCD34815_AC1A_A132_41E4_D14AF6A277FA_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1024,
    "width": 988,
    "url": "media/zoomImage_BCD34815_AC1A_A132_41E4_D14AF6A277FA_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 494,
    "url": "media/zoomImage_BCD34815_AC1A_A132_41E4_D14AF6A277FA_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_27E46DCA_364B_F329_4193_B1042D1480B8",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_A6041B01_ACA3_F04B_41E3_0BA7BD23B9CB",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_A6040B01_ACA3_F04B_41E3_26112C40D532",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "levels": [
   {
    "height": 4949,
    "width": 3466,
    "url": "media/zoomImage_BA78CEE3_B1A7_5982_41C5_68EBC7B027F0_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 4096,
    "width": 2868,
    "url": "media/zoomImage_BA78CEE3_B1A7_5982_41C5_68EBC7B027F0_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2048,
    "width": 1434,
    "url": "media/zoomImage_BA78CEE3_B1A7_5982_41C5_68EBC7B027F0_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1024,
    "width": 717,
    "url": "media/zoomImage_BA78CEE3_B1A7_5982_41C5_68EBC7B027F0_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 358,
    "url": "media/zoomImage_BA78CEE3_B1A7_5982_41C5_68EBC7B027F0_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_27E42DCA_364B_F329_41C6_85BEE5BADC5C",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_BA68F032_B21B_917B_41E4_B26AED335BA3",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_BA68E032_B21B_917B_41D9_89CDD9ADD1BD",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "levels": [
   {
    "height": 3161,
    "width": 4709,
    "url": "media/zoomImage_BF44D6F4_B0A6_428A_41D5_4A745D7CD9C3_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2749,
    "width": 4096,
    "url": "media/zoomImage_BF44D6F4_B0A6_428A_41D5_4A745D7CD9C3_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1374,
    "width": 2048,
    "url": "media/zoomImage_BF44D6F4_B0A6_428A_41D5_4A745D7CD9C3_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 687,
    "width": 1024,
    "url": "media/zoomImage_BF44D6F4_B0A6_428A_41D5_4A745D7CD9C3_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 343,
    "width": 512,
    "url": "media/zoomImage_BF44D6F4_B0A6_428A_41D5_4A745D7CD9C3_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_27E02DD7_364B_F338_41C8_2CF4623A0297",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in",
  "id": "FadeInEffect_A6E4B95B_B0A2_CFBE_41A0_D1199069A371",
  "class": "FadeInEffect",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "id": "FadeOutEffect_A6E4895B_B0A2_CFBE_41E5_30648EB2D6CD",
  "class": "FadeOutEffect",
  "duration": 500
 },
 {
  "easing": "linear",
  "id": "effect_9B0AF4E2_96C4_F045_41D3_0E00FEE03A15",
  "class": "FadeOutEffect",
  "duration": 200
 },
 "this.popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953",
 {
  "levels": [
   {
    "height": 4949,
    "width": 3466,
    "url": "media/popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 4096,
    "width": 2868,
    "url": "media/popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2048,
    "width": 1434,
    "url": "media/popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1024,
    "width": 717,
    "url": "media/popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 358,
    "url": "media/popup_BBEC3143_B19B_4882_41B9_1EDE4DD9D953_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_BA67903A_B21B_916B_41CD_514C518C3BDB",
  "class": "ImageResource"
 },
 "this.popup_A2BF4B98_AC05_A732_41E2_95982114A76A",
 {
  "levels": [
   {
    "height": 1218,
    "width": 1519,
    "url": "media/popup_A2BF4B98_AC05_A732_41E2_95982114A76A_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 821,
    "width": 1024,
    "url": "media/popup_A2BF4B98_AC05_A732_41E2_95982114A76A_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 410,
    "width": 512,
    "url": "media/popup_A2BF4B98_AC05_A732_41E2_95982114A76A_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_A31A1744_AC1A_AF13_41D4_4324E665C86E",
  "class": "ImageResource"
 },
 "this.popup_A3F32E19_AC3E_A135_41D3_EFC377272FCB",
 {
  "levels": [
   {
    "height": 2071,
    "width": 2000,
    "url": "media/popup_A3F32E19_AC3E_A135_41D3_EFC377272FCB_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2048,
    "width": 1977,
    "url": "media/popup_A3F32E19_AC3E_A135_41D3_EFC377272FCB_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1024,
    "width": 988,
    "url": "media/popup_A3F32E19_AC3E_A135_41D3_EFC377272FCB_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 512,
    "width": 494,
    "url": "media/popup_A3F32E19_AC3E_A135_41D3_EFC377272FCB_0_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_A61F5B0A_ACA3_F059_41C1_89F06DC1A99C",
  "class": "ImageResource"
 },
 "this.popup_A30DBD71_AC0A_E3F5_41BF_B1BFC634C608",
 "this.popup_B669BD38_ACA0_D0BA_41CD_BD4CA7F7CABE",
 "this.popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6",
 {
  "levels": [
   {
    "height": 3161,
    "width": 4709,
    "url": "media/popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6_0_0.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 2749,
    "width": 4096,
    "url": "media/popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6_0_1.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 1374,
    "width": 2048,
    "url": "media/popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6_0_2.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 687,
    "width": 1024,
    "url": "media/popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6_0_3.jpg",
    "class": "ImageResourceLevel"
   },
   {
    "height": 343,
    "width": 512,
    "url": "media/popup_BFFC2020_B09F_DD89_41D9_B8533265EAD6_0_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_A616A982_B0A2_CE89_41E2_8B238ACE953B",
  "class": "ImageResource"
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_BAD64FCE_9243_78F0_41DD_FFAEB204D688",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_8745D1AE_976B_8011_41D6_24473F83983D",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_8745A1AE_976B_806E_41C1_C459112A5F7A",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_8745B1AE_976B_806E_41DE_F52557E7FB37",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874581AE_976B_806E_4115_3AC62AD03870",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874591AE_976B_806E_41DD_853F071B0446",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874A61AE_976B_806E_41D0_5AA523A9EEA8",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_BAD71FD0_9243_7890_41C2_C6C735C5F9CA",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_BAD70FD0_9243_7891_41B7_24A43EF169A6",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874591B3_976B_8076_41B6_602BD66DE1D6",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874A61B3_976B_8076_41D5_7E70F882CE78",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874A71B4_976B_8071_41DE_679C7EF83877",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874A41B4_976B_8071_41E1_465235C876A8",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874A51B4_976B_8071_41D7_C7761BD23EC7",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874A21B4_976B_8071_41B2_C1F90E1A32CD",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_BAD77FD2_9243_7890_41E1_324C9A318973",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_BAD76FD2_9243_7890_4199_E659A20D66AB",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874B61B7_976B_807F_41D7_FB90AA78C22B",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_874B71B7_976B_807F_4193_94EEAFA53A3D",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_BAD0EFD4_9243_7890_41E0_794CA45DA064",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_A606A9A5_B0A2_CE8B_41DC_7E3F6FF70329",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_A60689A5_B0A2_CE8B_41D4_C327DB6AF509",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_8FCF031E_97A7_8031_41DC_A8471D11A59C",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_8FCF231F_97A7_802F_41E1_4404E028B6D8",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_8FCFC31F_97A7_802F_41C1_11702DC8AAED",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_8FCFE31F_97A7_802F_41A1_8AABA1FA30D4",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_451AFC64_4BEE_4621_4170_5F739970023E",
  "class": "FadeInEffect",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "id": "effect_451AEC64_4BEE_4621_41AF_50E67450D9E3",
  "class": "FadeOutEffect",
  "duration": 1000
 },
 "this.effect_BAD64FCE_9243_78F0_41DD_FFAEB204D688",
 "this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5",
 "this.effect_8745D1AE_976B_8011_41D6_24473F83983D",
 "this.effect_8745A1AE_976B_806E_41C1_C459112A5F7A",
 "this.effect_8745B1AE_976B_806E_41DE_F52557E7FB37",
 "this.effect_874581AE_976B_806E_4115_3AC62AD03870",
 "this.effect_874591AE_976B_806E_41DD_853F071B0446",
 "this.effect_874A61AE_976B_806E_41D0_5AA523A9EEA8",
 "this.effect_BAD71FD0_9243_7890_41C2_C6C735C5F9CA",
 "this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6",
 "this.effect_874591B3_976B_8076_41B6_602BD66DE1D6",
 "this.effect_874A61B3_976B_8076_41D5_7E70F882CE78",
 "this.effect_874A71B4_976B_8071_41DE_679C7EF83877",
 "this.effect_874A41B4_976B_8071_41E1_465235C876A8",
 "this.effect_874A51B4_976B_8071_41D7_C7761BD23EC7",
 "this.effect_874A21B4_976B_8071_41B2_C1F90E1A32CD",
 "this.effect_BAD77FD2_9243_7890_41E1_324C9A318973",
 "this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB",
 "this.effect_874B61B7_976B_807F_41D7_FB90AA78C22B",
 "this.effect_874B71B7_976B_807F_4193_94EEAFA53A3D",
 "this.effect_BAD0EFD4_9243_7890_41E0_794CA45DA064",
 "this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0",
 "this.effect_A606A9A5_B0A2_CE8B_41DC_7E3F6FF70329",
 "this.effect_A60689A5_B0A2_CE8B_41D4_C327DB6AF509",
 "this.effect_8FCF031E_97A7_8031_41DC_A8471D11A59C",
 "this.effect_8FCF231F_97A7_802F_41E1_4404E028B6D8",
 "this.effect_8FCFC31F_97A7_802F_41C1_11702DC8AAED",
 "this.effect_8FCFE31F_97A7_802F_41A1_8AABA1FA30D4",
 "this.effect_451AFC64_4BEE_4621_4170_5F739970023E",
 "this.effect_451AEC64_4BEE_4621_41AF_50E67450D9E3",
 "this.audio_A83B2F1A_B250_204B_41B2_61A870B2B428",
 "this.audio_A875C8FE_B250_61CA_41D2_1BDD70C9887A",
 "this.audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
 {
  "id": "audio_A8835F26_B97D_D04F_41C0_FE4CF3AF4F49",
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_A8835F26_B97D_D04F_41C0_FE4CF3AF4F49.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_A8835F26_B97D_D04F_41C0_FE4CF3AF4F49.mp3"
  },
  "data": {
   "label": "casaCascadaBg_comprimido"
  },
  "autoplay": true
 }
], "children": [
 {
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingLeft": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "toolTipTextShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 0.7,
  "toolTipTextShadowColor": "#000000",
  "minHeight": 50,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 9,
  "toolTipShadowColor": "#333333",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarLeft": 0,
  "playbackBarRight": 0,
  "minWidth": 100,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "height": "100%",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 15,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 0,
  "toolTipPaddingRight": 14,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "id": "MainViewer",
  "toolTipPaddingBottom": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarVisible": "rollOver",
  "paddingLeft": 0,
  "overflow": "visible",
  "paddingRight": 0,
  "children": [
   {
    "toolTipBorderRadius": 1,
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "toolTipBackgroundColor": "#000000",
    "width": "15.82%",
    "paddingLeft": 0,
    "height": "76.75%",
    "mode": "push",
    "maxWidth": 70,
    "paddingRight": 0,
    "toolTipTextShadowVerticalLength": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTip": "Open Info Window about the Villa",
    "paddingBottom": 0,
    "toolTipBorderSize": 0,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 14,
    "toolTipFontSize": 13,
    "verticalAlign": "middle",
    "class": "IconButton",
    "toolTipDisplayTime": 600,
    "minHeight": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 0,
    "click": "this.showPopupImage(this.ImageResource_2543CDB9_364B_F368_41C9_F099569D4E96, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, false)",
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
    "toolTipTextShadowColor": "#000000",
    "toolTipOpacity": 0.7,
    "toolTipFontColor": "#FFFFFF",
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 9,
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 14,
    "data": {
     "name": "Icon info"
    },
    "maxHeight": 70,
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "toolTipShadowColor": "#333333",
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipTextShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingBottom": 9,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 1,
    "toolTipShadowSpread": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "toolTipBorderRadius": 1,
    "iconURL": "skin/IconButton_87BF50DD_8E22_593F_41AB_0C1A6F6F0062.png",
    "toolTipBackgroundColor": "#000000",
    "width": "16.5%",
    "paddingLeft": 0,
    "height": "76.75%",
    "mode": "push",
    "maxWidth": 74,
    "paddingRight": 0,
    "toolTipTextShadowVerticalLength": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTip": "Play Casa Cascada Video",
    "paddingBottom": 0,
    "toolTipBorderSize": 0,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 14,
    "toolTipFontSize": 13,
    "verticalAlign": "middle",
    "class": "IconButton",
    "toolTipDisplayTime": 600,
    "minHeight": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 0,
    "rollOverIconURL": "skin/IconButton_87BF50DD_8E22_593F_41AB_0C1A6F6F0062_rollover.png",
    "toolTipTextShadowColor": "#000000",
    "toolTipOpacity": 0.7,
    "toolTipFontColor": "#FFFFFF",
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 9,
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 14,
    "data": {
     "name": "Icon video"
    },
    "maxHeight": 70,
    "id": "IconButton_87BF50DD_8E22_593F_41AB_0C1A6F6F0062",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowHorizontalLength": 0,
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingBottom": 9,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 1,
    "toolTipShadowSpread": 0,
    "shadow": false,
    "paddingTop": 0
   },
   "this.IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
   {
    "toolTipBorderRadius": 1,
    "iconURL": "skin/IconButton_87D4922A_8E23_D905_41BC_341D63668700.png",
    "toolTipBackgroundColor": "#000000",
    "width": "15.82%",
    "paddingLeft": 0,
    "height": "76.75%",
    "mode": "push",
    "maxWidth": 70,
    "paddingRight": 0,
    "toolTipTextShadowVerticalLength": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTip": "Open Live Panorama",
    "paddingBottom": 0,
    "toolTipBorderSize": 0,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 14,
    "toolTipFontSize": 13,
    "verticalAlign": "middle",
    "class": "IconButton",
    "toolTipDisplayTime": 600,
    "minHeight": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 0,
    "click": "this.mainPlayList.set('selectedIndex', 5)",
    "rollOverIconURL": "skin/IconButton_87D4922A_8E23_D905_41BC_341D63668700_rollover.png",
    "toolTipTextShadowColor": "#000000",
    "toolTipOpacity": 0.7,
    "toolTipFontColor": "#FFFFFF",
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 9,
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 14,
    "data": {
     "name": "Icon live"
    },
    "maxHeight": 70,
    "id": "IconButton_87D4922A_8E23_D905_41BC_341D63668700",
    "toolTipShadowColor": "#333333",
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipTextShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingBottom": 9,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 1,
    "toolTipShadowSpread": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "toolTipBorderRadius": 1,
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "toolTipBackgroundColor": "#000000",
    "width": "15.82%",
    "paddingLeft": 0,
    "height": "76.75%",
    "mode": "toggle",
    "maxWidth": 70,
    "paddingRight": 0,
    "toolTipTextShadowVerticalLength": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTip": "Panorama List",
    "paddingBottom": 0,
    "toolTipBorderSize": 0,
    "toolTipFontWeight": "normal",
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 14,
    "toolTipFontSize": 13,
    "verticalAlign": "middle",
    "class": "IconButton",
    "toolTipDisplayTime": 600,
    "minHeight": 1,
    "transparencyActive": true,
    "toolTipShadowOpacity": 0,
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_85A2AAA4_9245_B8B0_41CE_5BE27798090E, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_85A28AA4_9245_B8B0_41A1_5761D51DA5D1, 'hideEffect', false) }",
    "toolTipTextShadowColor": "#000000",
    "toolTipOpacity": 0.7,
    "toolTipFontColor": "#FFFFFF",
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "toolTipPaddingTop": 9,
    "toolTipBorderColor": "#767676",
    "toolTipPaddingRight": 14,
    "data": {
     "name": "Icon thumblist"
    },
    "maxHeight": 70,
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "toolTipShadowColor": "#333333",
    "borderSize": 0,
    "borderRadius": 0,
    "toolTipTextShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "toolTipPaddingBottom": 9,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "toolTipTextShadowOpacity": 1,
    "toolTipShadowSpread": 0,
    "shadow": false,
    "paddingTop": 0
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "top": "89%",
  "layout": "horizontal",
  "minHeight": 50,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "0%",
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Main Button Set"
  },
  "creationPolicy": "delayed",
  "horizontalAlign": "center",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "left": "0%",
  "borderRadius": 5,
  "minWidth": 240,
  "right": "0.16%",
  "shadow": false,
  "backgroundOpacity": 0.25,
  "paddingTop": 0
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.48%",
      "paddingLeft": 0,
      "height": "76.75%",
      "mode": "toggle",
      "maxWidth": 70,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Full Screen",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon fullscreen"
      },
      "maxHeight": 70,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "toolTipBackgroundColor": "#000000",
      "width": "17.15%",
      "paddingLeft": 0,
      "height": "76.75%",
      "mode": "toggle",
      "maxWidth": 70,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Audio On/Off",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon audio"
      },
      "maxHeight": 70,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "paddingLeft": 0,
    "height": "100%",
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 1,
    "layout": "horizontal",
    "visible": false,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "right",
    "data": {
     "name": "-Hide buttons"
    },
    "creationPolicy": "delayed",
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "children": [
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
      "toolTipBackgroundColor": "#000000",
      "width": "100%",
      "paddingLeft": 0,
      "height": "87.5%",
      "mode": "toggle",
      "maxWidth": 70,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Settings",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CD2B8C48_EED0_726F_41E4_49557D18059C, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0, 'hideEffect', false) }",
      "toolTipTextShadowColor": "#000000",
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon settings"
      },
      "maxHeight": 70,
      "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "15.59%",
    "paddingLeft": 0,
    "height": "100%",
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 1,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "center",
    "data": {
     "name": "Container settings"
    },
    "creationPolicy": "delayed",
    "id": "Container_80B2155B_8E3F_DB3B_41A1_77496D90E2FB",
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "scrollBarVisible": "rollOver",
  "width": "27.087%",
  "paddingLeft": 0,
  "overflow": "visible",
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "Container",
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "minHeight": 50,
  "top": "89%",
  "layout": "horizontal",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "0%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Settings Button Set"
  },
  "creationPolicy": "delayed",
  "horizontalAlign": "right",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "borderRadius": 5,
  "minWidth": 265,
  "right": -0.1,
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "children": [
   {
    "width": "100%",
    "paddingLeft": 0,
    "height": "100%",
    "maxWidth": 504,
    "paddingRight": 0,
    "url": "skin/Image_839F2153_92C3_4990_41DE_8BB8E5D909EE.png",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "top",
    "class": "Image",
    "minHeight": 1,
    "visible": false,
    "propagateClick": false,
    "horizontalAlign": "center",
    "data": {
     "name": "Sticker 04 Bedroom"
    },
    "maxHeight": 237,
    "id": "Image_839F2153_92C3_4990_41DE_8BB8E5D909EE",
    "borderSize": 0,
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "width": "100%",
    "paddingLeft": 0,
    "height": "100%",
    "maxWidth": 504,
    "paddingRight": 0,
    "url": "skin/Image_834E90F5_92C5_4890_41B3_1F18BA633A48.png",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "top",
    "class": "Image",
    "minHeight": 1,
    "visible": false,
    "propagateClick": false,
    "horizontalAlign": "center",
    "data": {
     "name": "Sticker 03 Living"
    },
    "maxHeight": 200,
    "id": "Image_834E90F5_92C5_4890_41B3_1F18BA633A48",
    "borderSize": 0,
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "width": "100%",
    "paddingLeft": 0,
    "height": "100%",
    "maxWidth": 504,
    "paddingRight": 0,
    "url": "skin/Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED.png",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "top",
    "class": "Image",
    "minHeight": 1,
    "visible": false,
    "propagateClick": false,
    "horizontalAlign": "center",
    "data": {
     "name": "Sticker 02 Entry Hall"
    },
    "maxHeight": 200,
    "id": "Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED",
    "borderSize": 0,
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "width": "94.59%",
    "paddingLeft": 0,
    "height": "87.72%",
    "maxWidth": 504,
    "paddingRight": 0,
    "url": "skin/Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476.png",
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "top",
    "class": "Image",
    "minHeight": 1,
    "visible": false,
    "propagateClick": false,
    "horizontalAlign": "center",
    "data": {
     "name": "Sticker 01 Welcome"
    },
    "maxHeight": 200,
    "id": "Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476",
    "borderSize": 0,
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   }
  ],
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "width": "21%",
  "paddingLeft": 0,
  "height": "25%",
  "overflow": "visible",
  "paddingRight": 0,
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "class": "Container",
  "minHeight": 120,
  "top": "3.5%",
  "layout": "vertical",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Stickers Container"
  },
  "creationPolicy": "delayed",
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "left": "2.14%",
  "borderRadius": 0,
  "minWidth": 300,
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingTop": 0
 },
 {
  "selectedItemThumbnailShadow": true,
  "backgroundOpacity": 0.25,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "backgroundColor": [
   "#000000"
  ],
  "itemHorizontalAlign": "center",
  "itemBackgroundColorDirection": "vertical",
  "paddingLeft": 15,
  "maxWidth": 150,
  "paddingRight": 15,
  "itemBackgroundColor": [],
  "itemLabelHorizontalAlign": "center",
  "backgroundColorRatios": [
   0
  ],
  "selectedItemThumbnailShadowVerticalLength": 0,
  "selectedItemThumbnailShadowBlurRadius": 10,
  "selectedItemBackgroundColorRatios": [],
  "selectedItemLabelFontWeight": "bold",
  "itemBorderRadius": 0,
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "itemLabelPosition": "bottom",
  "layout": "vertical",
  "minHeight": 1,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "scrollBarMargin": 4,
  "scrollBarOpacity": 1,
  "itemThumbnailShadow": false,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "selectedItemBackgroundColor": [],
  "itemBackgroundOpacity": 0,
  "scrollBarColor": "#52B7EF",
  "itemThumbnailWidth": 80,
  "selectedItemBorderRadius": 0,
  "borderSize": 0,
  "rollOverItemLabelFontWeight": "bold",
  "minWidth": 1,
  "itemLabelGap": 9,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "paddingTop": 20,
  "gap": 10,
  "itemThumbnailBorderRadius": 50,
  "itemPaddingLeft": 3,
  "selectedItemLabelFontStyle": "italic",
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "itemThumbnailOpacity": 1,
  "selectedItemBorderSize": 0,
  "selectedItemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingBottom": 20,
  "scrollBarWidth": 7,
  "height": "82.127%",
  "class": "ThumbnailList",
  "itemPaddingRight": 3,
  "verticalAlign": "top",
  "selectedItemLabelTextDecoration": "underline",
  "top": "3.5%",
  "itemLabelFontWeight": "normal",
  "itemLabelTextDecoration": "none",
  "visible": false,
  "itemLabelFontStyle": "normal",
  "propagateClick": false,
  "itemPaddingBottom": 3,
  "rollOverItemLabelTextDecoration": "underline",
  "horizontalAlign": "left",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "data": {
   "name": "-ThumbnailList"
  },
  "itemMode": "normal",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "borderRadius": 3,
  "itemBackgroundColorRatios": [],
  "selectedItemLabelFontColor": "#FFFFFF",
  "selectedItemLabelFontSize": 12,
  "itemThumbnailHeight": 80,
  "itemLabelFontSize": 12,
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "right": "2%"
 },
 {
  "children": [
   {
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingLeft": 0,
    "height": "34.783%",
    "overflow": "scroll",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 1,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "data": {
     "name": "Container header"
    },
    "creationPolicy": "delayed",
    "id": "Container_8BF5DC9B_974C_B0FB_41BA_36EDF42D05EC",
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   },
   {
    "children": [
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B22B76A7_9745_F0CB_41DB_B0F5A8C8B42B.png",
      "toolTipBackgroundColor": "#000000",
      "width": 51,
      "paddingLeft": 0,
      "height": 51,
      "mode": "push",
      "maxWidth": 123,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Open Live Panorama",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.mainPlayList.set('selectedIndex', 5)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B22B76A7_9745_F0CB_41DB_B0F5A8C8B42B",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "pano live"
      },
      "maxHeight": 123,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B3E22EC4_9743_B04D_41D2_D21DD28DED46.png",
      "toolTipBackgroundColor": "#000000",
      "width": 51,
      "paddingLeft": 0,
      "height": 51,
      "mode": "push",
      "maxWidth": 123,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Switch to Day View",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B3E22EC4_9743_B04D_41D2_D21DD28DED46",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "pano 01"
      },
      "maxHeight": 123,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B23A9BB7_974D_90CB_41E0_81A6F7215C4F.png",
      "toolTipBackgroundColor": "#000000",
      "width": 51,
      "paddingLeft": 0,
      "height": 51,
      "mode": "push",
      "maxWidth": 123,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Switch to Day View",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B23A9BB7_974D_90CB_41E0_81A6F7215C4F",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "pano 02"
      },
      "maxHeight": 123,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowHorizontalLength": 0,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B23CD950_974C_F045_41D0_F8B4277D2B19.png",
      "toolTipBackgroundColor": "#000000",
      "width": 51,
      "paddingLeft": 0,
      "height": 51,
      "mode": "push",
      "maxWidth": 123,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Switch to Day View",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.mainPlayList.set('selectedIndex', 1)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B23CD950_974C_F045_41D0_F8B4277D2B19",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "pano 03"
      },
      "maxHeight": 123,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B2334C79_974C_B047_41C7_7E0177D9822B.png",
      "toolTipBackgroundColor": "#000000",
      "width": 51,
      "paddingLeft": 0,
      "height": 51,
      "mode": "push",
      "maxWidth": 123,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Switch to Day View",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.mainPlayList.set('selectedIndex', 2)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B2334C79_974C_B047_41C7_7E0177D9822B",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "pano 04"
      },
      "maxHeight": 123,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B23514C5_974F_904F_41DE_72E79CD998A9.png",
      "toolTipBackgroundColor": "#000000",
      "width": 51,
      "paddingLeft": 0,
      "height": 51,
      "mode": "push",
      "maxWidth": 123,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Switch to Day View",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.mainPlayList.set('selectedIndex', 3)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B23514C5_974F_904F_41DE_72E79CD998A9",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "pano 05"
      },
      "maxHeight": 123,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26.png",
      "toolTipBackgroundColor": "#000000",
      "width": 51,
      "paddingLeft": 0,
      "height": 51,
      "mode": "push",
      "maxWidth": 123,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Switch to Night View",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.mainPlayList.set('selectedIndex', 4)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B1FFDC43_9747_F04B_41CA_231F18F95B26",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "pano 06"
      },
      "maxHeight": 123,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B7EBFD1D_977C_B1FF_41DD_FF84B2338AC5.png",
      "toolTipBackgroundColor": "#000000",
      "width": 45,
      "paddingLeft": 0,
      "height": 42,
      "mode": "push",
      "maxWidth": 61,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "View Picture",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.showPopupImage(this.ImageResource_257A3DB9_364B_F368_41C0_464826ACCEC7, null, '85%', '85%', this.FadeInEffect_8F61F585_ADE1_504A_41DC_2D3ADD9A8EBE, this.FadeOutEffect_8F600585_ADE1_504A_41CF_4C85FB9EE8B1, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, false)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B7EBFD1D_977C_B1FF_41DD_FF84B2338AC5",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "01 Picture 1"
      },
      "maxHeight": 42,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B65A0E44_977F_904D_41D1_F0D3BD0ACE54.png",
      "toolTipBackgroundColor": "#000000",
      "width": 50,
      "paddingLeft": 0,
      "height": 41,
      "mode": "push",
      "maxWidth": 59,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "View Picture",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.showPopupImage(this.ImageResource_27E4EDCA_364B_F329_41A5_8316036A9C18, null, '85%', '85%', this.FadeInEffect_A6062AFE_ACA3_F1B9_41D1_EB2F6353D686, this.FadeOutEffect_A606CAFE_ACA3_F1B6_41B6_6AA3A6FC7F12, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, false)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B65A0E44_977F_904D_41D1_F0D3BD0ACE54",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "02 Picture 2"
      },
      "maxHeight": 41,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B7E18152_977F_B045_41D0_DF5267274516.png",
      "toolTipBackgroundColor": "#000000",
      "width": 27,
      "paddingLeft": 0,
      "height": 42,
      "mode": "push",
      "maxWidth": 61,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "View Mir\u00f3's figure",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.showPopupImage(this.ImageResource_27E4ADCA_364B_F329_41BA_94582131494D, null, '85%', '85%', this.FadeInEffect_A6070B00_ACA3_F049_41B6_ED079EB12B5C, this.FadeOutEffect_A6073B00_ACA3_F049_41D2_F84883FA3578, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, false)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B7E18152_977F_B045_41D0_DF5267274516",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "03 Sculpture"
      },
      "maxHeight": 42,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B7E05EB0_977F_90C5_419D_BE1CB052CDF8.png",
      "toolTipBackgroundColor": "#000000",
      "width": 61,
      "paddingLeft": 0,
      "height": 42,
      "mode": "push",
      "maxWidth": 61,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "View Figure",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.showPopupImage(this.ImageResource_27E46DCA_364B_F329_4193_B1042D1480B8, null, '85%', '85%', this.FadeInEffect_A6041B01_ACA3_F04B_41E3_0BA7BD23B9CB, this.FadeOutEffect_A6040B01_ACA3_F04B_41E3_26112C40D532, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, false)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B7E05EB0_977F_90C5_419D_BE1CB052CDF8",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "04 Sculpture 2"
      },
      "maxHeight": 42,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B530AA99_977D_70C7_41CC_E8FB9E97A6CE.png",
      "toolTipBackgroundColor": "#000000",
      "width": 36,
      "paddingLeft": 0,
      "height": 41,
      "mode": "push",
      "maxWidth": 60,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "View Door Detail",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.showPopupImage(this.ImageResource_27E42DCA_364B_F329_41C6_85BEE5BADC5C, null, '85%', '85%', this.FadeInEffect_BA68F032_B21B_917B_41E4_B26AED335BA3, this.FadeOutEffect_BA68E032_B21B_917B_41D9_89CDD9ADD1BD, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, false)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B530AA99_977D_70C7_41CC_E8FB9E97A6CE",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "05 Door detail"
      },
      "maxHeight": 41,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A.png",
      "toolTipBackgroundColor": "#000000",
      "width": 59,
      "paddingLeft": 0,
      "height": 42,
      "mode": "push",
      "maxWidth": 59,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "Watch Video",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_B52EB62C_9745_B3DD_41CB_1690EEACA52A",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "06 Video Terrasse"
      },
      "maxHeight": 42,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowHorizontalLength": 0,
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_BF27076E_B0A7_C399_41D8_C4E13467FA83.png",
      "toolTipBackgroundColor": "#000000",
      "width": 46,
      "paddingLeft": 0,
      "height": 42,
      "mode": "push",
      "maxWidth": 61,
      "paddingRight": 0,
      "toolTipTextShadowVerticalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTip": "View Bedroom Mirror",
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "minHeight": 1,
      "transparencyActive": true,
      "toolTipShadowOpacity": 0,
      "click": "this.showPopupImage(this.ImageResource_27E02DD7_364B_F338_41C8_2CF4623A0297, null, '85%', '85%', this.FadeInEffect_A6E4B95B_B0A2_CFBE_41A0_D1199069A371, this.FadeOutEffect_A6E4895B_B0A2_CFBE_41E5_30648EB2D6CD, {'iconHeight':25,'iconColor':'#FFFFFF','iconLineWidth':3,'borderColor':'#000000','backgroundOpacity':0.15,'rollOverIconLineWidth':3,'backgroundColor':['#000000','#000000','#000000'],'rollOverBorderSize':0,'pressedIconLineWidth':3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBorderColor':'#000000','pressedIconHeight':25,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':25,'pressedIconColor':'#CCCCCC','borderSize':0,'paddingRight':10,'iconWidth':25,'pressedBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':10,'pressedBorderColor':'#000000','pressedIconWidth':25,'pressedBackgroundOpacity':0.3,'rollOverBackgroundOpacity':0.5,'rollOverIconWidth':25,'paddingBottom':10,'rollOverIconColor':'#52B7EF','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundColorDirection':'vertical','paddingTop':10}, null, null, false)",
      "toolTipTextShadowColor": "#000000",
      "visible": false,
      "toolTipOpacity": 0.7,
      "toolTipFontColor": "#FFFFFF",
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "id": "IconButton_BF27076E_B0A7_C399_41D8_C4E13467FA83",
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "07 Mirror detail"
      },
      "maxHeight": 42,
      "toolTipFontFamily": "Arial",
      "toolTipShadowColor": "#333333",
      "borderSize": 0,
      "borderRadius": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipPaddingBottom": 9,
      "minWidth": 1,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "shadow": false,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingLeft": 0,
    "height": "55.435%",
    "overflow": "visible",
    "paddingRight": 0,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "minHeight": 1,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "data": {
     "name": "Container Content"
    },
    "creationPolicy": "delayed",
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "borderSize": 0,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minWidth": 1,
    "backgroundOpacity": 0,
    "shadow": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "scrollBarVisible": "rollOver",
  "width": "37.394%",
  "paddingLeft": 0,
  "height": 92,
  "overflow": "visible",
  "paddingRight": 0,
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "bottom",
  "class": "Container",
  "minHeight": 1,
  "layout": "vertical",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "scrollBarMargin": 2,
  "data": {
   "name": "-Discover Container"
  },
  "creationPolicy": "delayed",
  "horizontalAlign": "left",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "left": "2%",
  "borderRadius": 0,
  "minWidth": 1,
  "backgroundOpacity": 0,
  "shadow": false,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "gap": 10,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarVisible": "rollOver",
  "width": "100%",
  "paddingLeft": 0,
  "height": "100%",
  "overflow": "scroll",
  "paddingRight": 0,
  "children": [
   "this.ViewerAreaLabeled_9FD7235A_96CD_9045_41D9_23A3BCBDB1C6",
   "this.IconButton_9FEA51EA_96CC_905A_41D3_F42DB0CD0A74",
   "this.IconButton_9FB9BD3F_96C5_703B_41D7_65AEE6E85A96",
   "this.IconButton_9A2D6556_96CC_904D_41E2_693F4484CBF4"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "class": "Container",
  "top": "0%",
  "layout": "absolute",
  "visible": false,
  "minHeight": 1,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "data": {
   "name": "-Photoalbum"
  },
  "creationPolicy": "delayed",
  "id": "Container_9EFCCEBF_96CF_F03B_41D8_719389C3A0EB",
  "borderSize": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "left": "0%",
  "borderRadius": 0,
  "minWidth": 1,
  "backgroundOpacity": 0.7,
  "shadow": false,
  "paddingTop": 0
 },
 {
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "width": "3.03%",
  "paddingLeft": 0,
  "height": "5.482%",
  "mode": "push",
  "maxWidth": 50,
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "IconButton",
  "verticalAlign": "middle",
  "minHeight": 40,
  "transparencyActive": true,
  "top": "2%",
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "visible": false,
  "propagateClick": false,
  "cursor": "hand",
  "horizontalAlign": "center",
  "data": {
   "name": "X video"
  },
  "maxHeight": 50,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "borderSize": 0,
  "borderRadius": 0,
  "minWidth": 40,
  "right": "1%",
  "shadow": false,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "backgroundColor": [
   "#000000"
  ],
  "paddingLeft": 0,
  "paddingRight": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "class": "UIComponent",
  "top": 0,
  "visible": false,
  "minHeight": 0,
  "propagateClick": false,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent26190"
  },
  "borderSize": 0,
  "left": 0,
  "borderRadius": 0,
  "minWidth": 0,
  "right": 0,
  "shadow": false,
  "backgroundOpacity": 0.55,
  "paddingTop": 0
 },
 {
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "paddingLeft": 0,
  "paddingRight": 0,
  "backgroundColorRatios": [],
  "paddingBottom": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "top": 0,
  "visible": false,
  "minHeight": 0,
  "propagateClick": false,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage26191"
  },
  "borderSize": 0,
  "left": 0,
  "borderRadius": 0,
  "minWidth": 0,
  "right": 0,
  "shadow": false,
  "backgroundOpacity": 1,
  "paddingTop": 0
 },
 {
  "iconBeforeLabel": true,
  "backgroundColorDirection": "vertical",
  "iconLineWidth": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontSize": 12,
  "pressedIconColor": "#888888",
  "gap": 5,
  "paddingLeft": 5,
  "textDecoration": "none",
  "mode": "push",
  "paddingRight": 5,
  "fontFamily": "Arial",
  "iconColor": "#000000",
  "fontStyle": "normal",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingBottom": 5,
  "class": "CloseButton",
  "iconWidth": 20,
  "verticalAlign": "middle",
  "top": 10,
  "fontWeight": "normal",
  "visible": false,
  "minHeight": 0,
  "fontColor": "#FFFFFF",
  "propagateClick": false,
  "cursor": "hand",
  "horizontalAlign": "center",
  "id": "closeButtonPopupPanorama",
  "data": {
   "name": "CloseButton26192"
  },
  "layout": "horizontal",
  "borderColor": "#000000",
  "iconHeight": 20,
  "shadowColor": "#000000",
  "borderSize": 0,
  "shadowSpread": 1,
  "borderRadius": 0,
  "rollOverIconColor": "#666666",
  "showEffect": {
   "easing": "cubic_in_out",
   "class": "FadeInEffect",
   "duration": 350
  },
  "minWidth": 0,
  "right": 10,
  "shadowBlurRadius": 6,
  "label": "",
  "shadow": false,
  "backgroundOpacity": 0.3,
  "paddingTop": 5
 }
], 
 "start": "this.playAudioList([this.audio_A8835F26_B97D_D04F_41C0_FE4CF3AF4F49]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "gap": 10,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingLeft": 0,
 "height": "100%",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "class": "Player",
 "layout": "absolute",
 "minHeight": 20,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "Player463"
 },
 "creationPolicy": "delayed",
 "id": "rootPlayer",
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); }
 },
 "paddingTop": 0
})