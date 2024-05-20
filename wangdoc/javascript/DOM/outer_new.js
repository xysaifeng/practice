


console.log('-----outer js');

// console.log(document.currentScript);
// console.log(document.currentScript.outerHTML, '---sss');
// console.log(document.currentScript === document.getElementById('outer')); // true


var ao = {
  "agentCode_申报单位_10位海关代码": "3117980008",
  "agentName_申报单位_企业名称": "上海欣海报关有限公司",
  "agentScc_申报单位_18位社会信用代码": "913101206306054344",
  "appCertName_所需单证": "",
  "attaDocuCdstr_随附单证": "",
  "billNo_提运单号": "78437464302_FBG23390473",
  "bonNo_保税监管场地": "",
  "ciqBillNo_BL号": "",
  "ciqEntyPortCodeName_入境口岸": "上海浦东国际机场",
  "consigneeCname_境外收发货人_企业名称_外文": "ENDRESS + HAUSER WETZER GMBH&CO.KG",
  "consigneeCode_境内收发货人_10位检验检疫编码": "3100715475",
  "contaCount_集装箱数": "",
  "contrNo_合同协议号": "SAE/CAC_23390473",
  "correlationDeclNo_关联号码": "",
  "correlationReasonFlagName_关联理由": "",
  "cusCiqNo_统一编号": "I20220000971587171",
  "cusDecStatusName_申报状态": "结关",
  "cusTradeCountryName_启运国_地区": "德国",
  "cusTradeNationCodeName_贸易国别_地区": "德国",
  "cusTrafModeName_运输方式": "航空运输",
  "cusVoyageNo_航次号": "",
  "customMasterName_申报地海关": "浦东机场",
  "customsFieldName_场地代码": "",
  "cutModeName_征免性质": "一般征税",
  "dDate_申报日期": "2023_01_02",
  "declRegNo_申报单位_10位检验检疫编码": "3100910053",
  "despDate_启运日期": "2022_12_27",
  "despPortCodeName_启运港": "德国",
  "distinatePortName_经停港": "德国",
  "entryId_海关编号": "223320231000000762",
  "entryTypeName_报关单类型": "通关无纸化",
  "feeCurrName_运费_币制": "",
  "feeMarkName_运费_计费方式": "",
  "feeRate_运费_费率": "",
  "goodsPlace_货物存放地点": "上海经贸",
  "grossWt_毛重": "1.5",
  "iEDate_进口日期": "20221231",
  "iEPortName_进境关别": "浦东机场",
  iEPortName_出境关别: '',// 出口
  iEDate_出口日期: '',// 出口
  ownerScc_生产销售单位_18位社会信用代码: '',// 出口
  ownerCode_生产销售单位_10位海关代码: '',// 出口
  ownerCiqCode_生产销售单位_10位检验检疫编码: '',// 出口
  ownerName_生产销售单位_企业名称: '',// 出口
  cusTradeCountryName_运抵国_地区: '',// 出口
  distinatePortName_指运港: '',// 出口
  despPortCodeName_离境口岸: '',// 出口
  "ieFlag": "I",
  "inspOrgCodeName_口岸检验检疫机关": "浦东机场海关本部",
  "insurCurrName_保险费_币制": "",
  "insurMarkName_保险费_计费方式": "",
  "insurRate_保险费_费率": "",
  "licenseNo_许可证号": "",
  "manualNo_备案号": "",
  "markNo_标记唛码": "N/M",
  "netWt_净重": "1.15",
  "noteS_备注": "非医疗器械",
  "orgCodeName_检验检疫受理机关": "浦东机场海关本部",
  "origBoxFlagName_原箱运输": "",
  "otherCurrName_杂费_币制": "",
  "otherMarkName_杂费_计费方式": "",
  "otherRate_杂费_费率": "",
  "ownerCiqCode_消费使用单位_10位检验检疫编码": "3100715475",
  "ownerCode_消费使用单位_10位海关代码": "3111941073",
  "ownerName_消费使用单位_企业名称": "恩德斯豪斯（中国）自动化有限公司",
  "ownerScc_消费使用单位_18位社会信用代码": "91310000757598390P",
  "packNo_件数": "1",
  "preEntryId_预录入编号": "223320231000000762",
  "promise1Name_特殊关系确认": "是",
  "promise2Name_价格影响确认": "否",
  "promise3Name_与货物有关的特许权使用费支付确认": "否",
  "promise4Name_公式定价确认": "否",
  "promise5Name_暂定价格确认": "否",
  "purpOrgCodeName_目的地检验检疫机关": "莘庄海关本部",
  "rcvgdTradeCode_境内收发货人_10位海关代码": "3111941073",
  "rcvgdTradeScc_境内收发货人_18位社会信用代码": "91310000757598390P",
  "relativeId_关联报关单": "",
  "relmanNo_关联备案": "",
  "specPassFlag_特殊业务标识": "",
  "supvModeCddeName_监管方式": "一般贸易",
  "trafName_运输工具名称": "",
  "transModeName_成交方式": "CIF",
  "vsaOrgCodeName_领证机关": "浦东机场海关本部",
  "wrapTypeName_包装种类": "纸制或纤维板制盒/箱",
  "业务事项": ["自报自缴"],
  "企业资质": [{ entQualifTypeCode_企业资质类别代码: '', entQualifTypeName_企业资质类别名称: '', entQualifNo_企业资质编号: '' }],
  "其他包装": [{ packType_包装材料种类代码: '', packTypeName_包装材料种类名称: '' }],
  "consigneeCname_境内收发货人_企业名称_中文": "恩德斯豪斯（中国）自动化有限公司",
  "consignorCode_境外收发货人_境外收发货人代码": "",
  "报关状态": [
    {
      "seq": "1",
      "cusRetSeqNo": "202300005317776455",
      "noticeDate": "2023_01_03 09:18:33",
      "channelName": "海关已放行",
      "note": "报关单已放行",
      "entryId": "223320231000000762"
    },
    {
      "seq": "2",
      "cusRetSeqNo": "202300005317776051",
      "noticeDate": "2023_01_03 09:18:33",
      "channelName": "海关已结关",
      "note": "报关单已结关",
      "entryId": "223320231000000762"
    },
    {
      "seq": "3",
      "cusRetSeqNo": "202300005317489189",
      "noticeDate": "2023_01_02 20:58:44",
      "channelName": "通关无纸化审结",
      "note": "海关已接受申报",
      "entryId": "223320231000000762"
    },
    {
      "seq": "4",
      "cusRetSeqNo": "202300005317489149",
      "noticeDate": "2023_01_02 20:58:37",
      "channelName": "海关入库成功",
      "note": "入库成功！",
      "entryId": "223320231000000762"
    },
    {
      "seq": "5",
      "cusRetSeqNo": "202300005317489129",
      "noticeDate": "2023_01_02 20:58:36",
      "channelName": "申报到海关预录入系统成功",
      "note": "I20220000971587171直接申报成功",
      "entryId": "I20220000971587171"
    }
  ],
  "报关详情": [
    {
      "districtCodeName_境内货源地_境内货源地代码": '', // 出口
      "ciqDestCodeName_境内货源地_产地代码": '', // 出口
      "ciqDestCodeName_境内目的地_目的地代码": "上海市闵行区",
      "ciqName_检验检疫名称": "",
      "codeTs_商品编号": "9026809000",
      "contrItem_备案序号": "",
      "cusOriginCountryName_原产国_地区": "德国",
      "declPrice_单价": "6789.32",
      "declTotal_总价": "6789.32",
      "destinationCountryName_征免方式": "照章征税",
      "destinationCountryName_最终目的国_地区": "中国",
      "destinationCountryName_监管要求": "",
      "districtCodeName_境内目的地_境内目的地代码": "闵行其他",
      "dutyModeName_币制": "人民币",
      "exgNo_货号": "",
      "gModel_规格": "4|3|用于记录饱和及过热蒸汽中的蒸汽质量和能量流量|蒸汽|E+H|RS33_35E4/0",
      "gName_商品名称": "蒸汽计算仪",
      "gNo_项号": "1",
      "gQty_成交数量": "1",
      "gUnitName_成交单位": "个",
      "origPlaceCodeName_原产地区": "",
      "qty1_法定第一数量": "1",
      "qty2_法定第二数量": "1.15",
      "unit1Name_法定第一计量单位": "个",
      "unit2Name_加工成品单耗版本号": "",
      "unit2Name_法定第二计量单位": "千克",
      "产品资质": [
        {
          licTypeCode_许可证类别代码: '',
          licTypeName_许可证类别名称: '',
          licenceNo_许可证编号: '',
          licWrtofDetailNo_核销货物序号: '',
          licWrtofQty_核销数量: '',
          licWrtofUnitName_核销数量单位: '',
          licProduceDate_生产日期: '',
        },

      ],
      "协定享惠": {
        "certOriCode_原产地证明编号": "",
        "certOriModItemNum_原产地证明商品项号": "",
        "oriCertType_原产地证明类型": "",
        "preTradeAgreeCodeName_优惠贸易协定代码": "",
        "rcepOrigPlaceDocCodeName_优惠贸易协定项下原产地": ""
      },
      "危险货物信息": {
        "dangName_危险类别": "",
        "noDangFlagName_非危险货物": "",
        "packSpec_包装UN标记": "",
        "packTypeName_包装类别": "",
        "unCode_UN编号": ""
      },
      "检验检疫货物规格": [
        {
          exgNo_成分原料组分: '',
          prodValidDt_产品有效期: '',
          prodQgp_产品保质期: '',
          engManEntCnm_境外生产企业: '',
          goodsSpec_货物规格: '',
          goodsModel_货物型号: '',
          goodsBrand_货物品牌: '',
          prodBatchNo_生产批次: '',
        }
      ],
      "货物属性": ["19_正常", "38_非医疗器械"]
    }
  ],
  "随附单证信息": [{ acmpFormName_随附单证代码: '', acmpFormNo_随附单证编号: '' }],
  "集装箱信息": [{ containerWt_自重: '', goodsNo_商品项号关系: '', containerNo_集装箱号: '', containerMdCodeName_集装箱规格: '', lclFlagName_拼箱标识: '' }]
}
