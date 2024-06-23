const stocks = {
    "NITFY 50": "^NSEI",
    "ACC Ltd": "ACC.NS",
    "Aegis Logistics Ltd": "AEGISLOG.NS",
    "Apollo Tyres Ltd": "APOLLOTYRE.NS",
    "Ashok Leyland Ltd": "ASHOKLEY.NS",
    "Asian Paints Ltd": "ASIANPAINT.NS",
    "SKF India Ltd": "SKFINDIA.NS",
    "Astrazeneca Pharma India Ltd": "ASTRAZEN.NS",
    "Atul Ltd": "ATUL.NS",
    "Bajaj Holdings & Investment Ltd": "BAJAJHLDNG.NS",
    "Balkrishna Industries Ltd": "BALKRISIND.NS",
    "Bata India Ltd": "BATAINDIA.NS",
    "Bayer CropScience Ltd": "BAYERCROP.NS",
    "Berger Paints India Ltd": "BERGEPAINT.NS",
    "Bharat Forge Ltd": "BHARATFORG.NS",
    "Birla Corporation Ltd": "BIRLACORPN.NS",
    "Blue Star Ltd": "BLUESTARCO.NS",
    "Bombay Burmah Trading Corporation Ltd": "BBTC.NS",
    "Abbott India Ltd": "ABBOTINDIA.NS",
    "Borosil Renewables Ltd": "BORORENEW.NS",
    "Britannia Industries Ltd": "BRITANNIA.NS",
    "CESC Ltd": "CESC.NS",
    "Graphite India Ltd": "GRAPHITE.NS",
    "Carborundum Universal Ltd": "CARBORUNIV.NS",
    "CEAT Ltd": "CEATLTD.NS",
    "Century Textiles & Industries Ltd": "CENTURYTEX.NS",
    "Exide Industries Ltd": "EXIDEIND.NS",
    "Cipla Ltd": "CIPLA.NS",
    "Colgate-Palmolive (India) Ltd": "COLPAL.NS",
    "Coromandel International Ltd": "COROMANDEL.NS",
    "CG Power & Industrial Solutions Ltd": "CGPOWER.NS",
    "Deepak Fertilizers & Petrochemicals Corp Ltd": "DEEPAKFERT.NS",
    "Deepak Nitrite Ltd": "DEEPAKNTR.NS",
    "EID Parry (India) Ltd": "EIDPARRY.NS",
    "EIH Ltd": "EIHOTEL.NS",
    "Eicher Motors Ltd": "EICHERMOT.NS",
    "Elecon Engineering Company Ltd": "ELECON.NS",
    "Elgi Equipments Ltd": "ELGIEQUIP.NS",
    "Escorts Kubota Ltd": "ESCORTS.NS",
    "EPL Ltd": "EPL.NS",
    "Finolex Cables Ltd": "FINCABLES.NS",
    "Nestle India Ltd": "NESTLEIND.NS",
    "Glaxosmithkline Pharmaceuticals Ltd": "GLAXO.NS",
    "Kansai Nerolac Paints Ltd": "KANSAINER.NS",
    "Saregama India Ltd": "SAREGAMA.NS",
    "Great Eastern Shipping Company Ltd": "GESHIP.NS",
    "Grindwell Norton Ltd": "GRINDWELL.NS",
    "Gujarat Narmada Valley Fertilizers & Chemicals Ltd": "GNFC.NS",
    "Ambuja Cements Ltd": "AMBUJACEM.NS",
    "Gujarat State Fertilizers & Chemicals Ltd": "GSFC.NS",
    "Grasim Industries Ltd": "GRASIM.NS",
    "Hero MotoCorp Ltd": "HEROMOTOCO.NS",
    "ABB India Ltd": "ABB.NS",
    "HEG Ltd": "HEG.NS",
    "Hindalco Industries Ltd": "HINDALCO.NS",
    "Hindustan Unilever Ltd": "HINDUNILVR.NS",
    "Sanofi India Ltd": "SANOFI.NS",
    "Zensar Technologies Ltd": "ZENSARTECH.NS",
    "India Cements Ltd": "INDIACEM.NS",
    "Indian Hotels Co Ltd": "INDHOTEL.NS",
    "Linde India Ltd": "LINDEINDIA.NS",
    "Gillette India Ltd": "GILLETTE.NS",
    "Castrol India Ltd": "CASTROLIND.NS",
    "Tata Investment Corporation Ltd": "TATAINVEST.NS",
    "ITC Ltd": "ITC.NS",
    "J B Chemicals & Pharmaceuticals Ltd": "JBCHEPHARM.NS",
    "Whirlpool of India Ltd": "WHIRLPOOL.NS",
    "Cummins India Ltd": "CUMMINSIND.NS",
    "KSB Ltd": "KSB.NS",
    "Trent Ltd": "TRENT.NS",
    "Larsen & Toubro Ltd": "LT.NS",
    "The Ramco Cements Ltd": "RAMCOCEM.NS",
    "Mahindra & Mahindra Ltd": "M&M.NS",
    "Max Financial Services Ltd": "MFSL.NS",
    "Bosch Ltd": "BOSCHLTD.NS",
    "MRF Ltd": "MRF.NS",
    "Piramal Enterprises Ltd": "PEL.NS",
    "PCBL Ltd": "PHILIPCARB.NS",
    "Schaeffler India Ltd": "SCHAEFFLER.NS",
    "Raymond Ltd": "RAYMOND.NS",
    "Reliance Industries Ltd": "RELIANCE.NS",
    "Procter & Gamble Hygiene and Health Care Ltd": "PGHH.NS",
    "Vedanta Ltd": "VEDL.NS",
    "Shree Cement Ltd": "SHREECEM.NS",
    "SRF Ltd": "SRF.NS",
    "Siemens Ltd": "SIEMENS.NS",
    "JK Lakshmi Cement Ltd": "JKLAKSHMI.NS",
    "Sundram Fasteners Ltd": "SUNDRMFAST.NS",
    "Sundaram Finance Ltd": "SUNDARMFIN.NS",
    "Supreme Industries Ltd": "SUPREMEIND.NS",
    "Tata Chemicals Ltd": "TATACHEM.NS",
    "Tata Power Company Ltd": "TATAPOWER.NS",
    "Tata Consumer Products Ltd": "TATACONSUM.NS",
    "Tata Motors Ltd": "TATAMOTORS.NS",
    "Tata Steel Ltd": "TATASTEEL.NS",
    "Cholamandalam Financial Holdings Ltd": "CHOLAHLDNG.NS",
    "Jubilant Pharmova Ltd": "JUBLPHARMA.NS",
    "Voltas Ltd": "VOLTAS.NS",
    "Wipro Ltd": "WIPRO.NS",
    "Alkyl Amines Chemicals Ltd": "ALKYLAMINE.NS",
    "Apollo Hospitals Enterprise Ltd": "APOLLOHOSP.NS",
    "Godfrey Phillips India Ltd": "GODFRYPHLP.NS",
    "Patanjali Foods Ltd": "PATANJALI.NS",
    "Safari Industries (India) Ltd": "SAFARI.NS",
    "V I P Industries Ltd": "VIPIND.NS",
    "Dr Reddys Laboratories Ltd": "DRREDDY.NS",
    "GMM Pfaudler Ltd": "GMMPFAUDLR.NS",
    "Vardhman Textiles Ltd": "VTL.NS",
    "Jindal Saw Ltd": "JINDALSAW.NS",
    "Titan Company Ltd": "TITAN.NS",
    "Asahi India Glass Ltd": "ASAHIINDIA.NS",
    "Usha Martin Ltd": "USHAMART.NS",
    "Kajaria Ceramics Ltd": "KAJARIACER.NS",
    "Honeywell Automation India Ltd": "HONAUT.NS",
    "HFCL Ltd": "HFCL.NS",
    "Can Fin Homes Ltd": "CANFINHOME.NS",
    "Finolex Industries Ltd": "FINOLEXIND.NS",
    "State Bank of India": "SBIN.NS",
    "Westlife Foodworld Ltd": "WESTLIFE.NS",
    "Godrej Industries Ltd": "GODREJIND.NS",
    "Shriram Finance Ltd": "SRTRANSFIN.NS",
    "Apar Industries Ltd": "APARINDS.NS",
    "Chemplast Sanmar Ltd": "CHEMPLAST.NS",
    "3M India Ltd": "3MINDIA.NS",
    "Amara Raja Energy & Mobility Ltd": "AMARAJABAT.NS",
    "JM Financial Ltd": "JMFINANCIL.NS",
    "Swan Energy Ltd": "SWANENERGY.NS",
    "Radico Khaitan Ltd": "RADICO.NS",
    "Cholamandalam Investment & Finance Company Ltd": "CHOLAFIN.NS",
    "Maharashtra Seamless Ltd": "MAHSEAMLES.NS",
    "Balrampur Chini Mills Ltd": "BALRAMCHIN.NS",
    "Timken India Ltd": "TIMKEN.NS",
    "Welspun Living Ltd": "WELSPUNIND.NS",
    "Bharat Petroleum Corporation Ltd": "BPCL.NS",
    "MMTC Ltd": "MMTC.NS",
    "BEML Ltd": "BEML.NS",
    "Tata Communications Ltd": "TATACOMM.NS",
    "Rashtriya Chemicals & Fertilizers Ltd": "RCF.NS",
    "Bharat Electronics Ltd": "BEL.NS",
    "Steel Authority of India Ltd": "SAIL.NS",
    "Fertilizers & Chemicals Travancore Ltd": "FACT.NS",
    "NLC India Ltd": "NLCINDIA.NS",
    "National Aluminium Company Ltd": "NATIONALUM.NS",
    "Hindustan Petroleum Corporation Ltd": "HINDPETRO.NS",
    "Bharat Heavy Electricals Ltd": "BHEL.NS",
    "Hindustan Zinc Ltd": "HINDZINC.NS",
    "Tata Elxsi Ltd": "TATAELXSI.NS",
    "Kotak Mahindra Bank Ltd": "KOTAKBANK.NS",
    "ITI Ltd": "ITI.NS",
    "DCM Shriram Ltd": "DCMSHRIRAM.NS",
    "Chennai Petroleum Corporation Ltd": "CHENNPETRO.NS",
    "Aarti Industries Ltd": "AARTIIND.NS",
    "HBL Power Systems Ltd": "HBLPOWER.NS",
    "UPL Ltd": "UPL.NS",
    "Gujarat Ambuja Exports Ltd": "GAEL.NS",
    "Mangalore Refinery And Petrochemicals Ltd": "MRPL.NS",
    "NCC Ltd": "NCC.NS",
    "Lloyds Metals & Energy Ltd": "LLOYDENG.NS",
    "P I Industries Ltd": "PIIND.NS",
    "Karur Vysya Bank Ltd": "KARURVYSYA.NS",
    "Mastek Ltd": "MASTEK.NS",
    "Himadri Speciality Chemical Ltd": "HSCL.NS",
    "Infosys Ltd": "INFY.NS",
    "Samvardhana Motherson International Ltd": "MOTHERSUMI.NS",
    "Trident Ltd": "TRIDENT.NS",
    "Lupin Ltd": "LUPIN.NS",
    "Chambal Fertilisers & Chemicals Ltd": "CHAMBLFERT.NS",
    "Alok Industries Ltd": "ALOKINDS.NS",
    "Ratnamani Metals & Tubes Ltd": "RATNAMANI.NS",
    "Zee Entertainment Enterprises Ltd": "ZEEL.NS",
    "Pidilite Industries Ltd": "PIDILITIND.NS",
    "CRISIL Ltd": "CRISIL.NS",
    "Havells India Ltd": "HAVELLS.NS",
    "Mphasis Ltd": "MPHASIS.NS",
    "Dabur India Ltd": "DABUR.NS",
    "Praj Industries Ltd": "PRAJIND.NS",
    "Torrent Pharmaceuticals Ltd": "TORNTPHARM.NS",
    "Ipca Laboratories Ltd": "IPCALAB.NS",
    "Federal Bank Ltd": "FEDERALBNK.NS",
    "Bajaj Finance Ltd": "BAJFINANCE.NS",
    "Avanti Feeds Ltd": "AVANTIFEED.NS",
    "Hindustan Copper Ltd": "HINDCOPPER.NS",
    "Blue Dart Express Ltd": "BLUEDART.NS",
    "Adani Enterprises Ltd": "ADANIENT.NS",
    "LIC Housing Finance Ltd": "LICHSGFIN.NS",
    "Sun Pharmaceuticals Industries Ltd": "SUNPHARMA.NS",
    "Caplin Point Laboratories Ltd": "CAPLIPOINT.NS",
    "Kalpataru Projects International Ltd": "KALPATPOWR.NS",
    "Aurobindo Pharma Ltd": "AUROPHARMA.NS",
    "KEI Industries Ltd": "KEI.NS",
    "Natco Pharma Ltd": "NATCOPHARM.NS",
    "Prism Johnson Ltd": "PRSMJOHNSN.NS",
    "JSW Steel Ltd": "JSWSTEEL.NS",
    "Thermax Ltd": "THERMAX.NS",
    "CCL Products (India) Ltd": "CCL.NS",
    "HDFC Bank Ltd": "HDFCBANK.NS",
    "Poonawalla Fincorp Ltd": "PFC.NS",
    "Balaji Amines Ltd": "BALAMINES.NS",
    "Tata Consultancy Services Ltd": "TCS.NS",
    "ICICI Bank Ltd": "ICICIBANK.NS",
    "IDBI Bank Ltd": "IDBI.NS",
    "Oil India Ltd": "OIL.NS",
    "Power Grid Corporation of India Ltd": "POWERGRID.NS",
    "Bank of Baroda": "BANKBARODA.NS",
    "Canara Bank": "CANBK.NS",
    "UCO Bank": "UCOBANK.NS",
    "General Insurance Corporation of India": "GICRE.NS",
    "Union Bank of India": "UNIONBANK.NS",
    "Maruti Suzuki India Ltd": "MARUTI.NS",
    "Ircon International Ltd": "IRCON.NS",
    "CSB Bank Ltd": "CSBBANK.NS",
    "IndusInd Bank Ltd": "INDUSINDBK.NS",
    "Central Bank of India": "CENTRALBK.NS",
    "Axis Bank Ltd": "AXISBANK.NS",
    "Bank of Maharashtra": "BOM.NS",
    "Bank of India": "BANKINDIA.NS",
    "HCL Technologies Ltd": "HCLTECH.NS",
    "Cochin Shipyard Ltd": "COCHINSHIP.NS",
    "JK Paper Ltd": "JKPAPER.NS",
    "Indian Overseas Bank": "IOB.NS",
    "RBL Bank Ltd": "RBLBANK.NS",
    "KRBL Ltd": "KRBL.NS",
    "Indian Bank": "INDIANB.NS",
    "Oil & Natural Gas Corpn Ltd": "ONGC.NS",
    "Manappuram Finance Ltd": "MANAPPURAM.NS",
    "Phoenix Mills Ltd": "PHOENIXLTD.NS",
    "Emami Ltd": "EMAMILTD.NS",
    "Five-Star Business Finance Ltd": "FIVESTAR.NS",
    "Sunteck Realty Ltd": "SUNTECK.NS",
    "DLF Ltd": "DLF.NS",
    "City Union Bank Ltd": "CUB.NS",
    "Jammu and Kashmir Bank Ltd": "JnKBANK.NS",
    "Punjab National Bank": "PNB.NS",
    "Welspun Corp Ltd": "WELCORP.NS",
    "TVS Motor Company Ltd": "TVSMOTOR.NS",
    "United Spirits Ltd": "MCDOWELL-N.NS",
    "NTPC Ltd": "NTPC.NS",
    "Indian Oil Corporation Ltd": "IOC.NS",
    "Coal India Ltd": "COALINDIA.NS",
    "Life Insurance Corporation of India": "LICNFNM.NS",
    "Engineers India Ltd": "ENGINERSIN.NS",
    "Hindustan Aeronautics Ltd": "HAL.NS",
    "NMDC Ltd": "NMDC.NS",
    "Power Finance Corporation Ltd": "PFC.NS",
    "SJVN Ltd": "SJVN.NS",
    "Housing & Urban Development Corporation Ltd": "HUDCO.NS",
    "New India Assurance Company Ltd": "NIACL.NS",
    "Gujarat Pipavav Port Ltd": "GPPL.NS",
    "Uno Minda Ltd": "MINDAIND.NS",
    "APL Apollo Tubes Ltd": "APLAPOLLO.NS",
    "GAIL (India) Ltd": "GAIL.NS",
    "Tamilnad Mercantile Bank Ltd": "TMB.NS",
    "ICICI Securities Ltd": "ISEC.NS",
    "Sonata Software Ltd": "SONATSOFTW.NS",
    "Page Industries Ltd": "PAGEIND.NS",
    "NHPC Ltd": "NHPC.NS",
    "Marico Ltd": "MARICO.NS",
    "Redington Ltd": "REDINGTON.NS",
    "Container Corporation Of India Ltd": "CONCOR.NS",
    "Nippon Life India Asset Management Ltd": "NAM-INDIA.NS",
    "Granules India Ltd": "GRANULES.NS",
    "Capri Global Capital Ltd": "CGCL.NS",
    "Indian Railway Finance Corporation Ltd": "IRFC.NS",
    "Mazagon Dock Shipbuilders Ltd": "MAZDOCK.NS",
    "Shriram City Union Finance Ltd": "SHRIRAMCIT.NS",
    "L&T Finance Holdings Ltd": "L&TFH.NS",
    "Bajaj Auto Ltd": "BAJAJ-AUTO.NS",
    "City Union Bank Ltd": "CUB.NS",
    "Bank of India": "BANKINDIA.NS",
    "HCL Technologies Ltd": "HCLTECH.NS",
    "Cochin Shipyard Ltd": "COCHINSHIP.NS",
    "JK Paper Ltd": "JKPAPER.NS",
    "Indian Overseas Bank": "IOB.NS",
    "RBL Bank Ltd": "RBLBANK.NS",
    "KRBL Ltd": "KRBL.NS",
    "Indian Bank": "INDIANB.NS",
    "Oil & Natural Gas Corpn Ltd": "ONGC.NS",
    "Manappuram Finance Ltd": "MANAPPURAM.NS",
    "Phoenix Mills Ltd": "PHOENIXLTD.NS",
    "Emami Ltd": "EMAMILTD.NS",
    "Five-Star Business Finance Ltd": "FIVESTAR.NS",
    "Sunteck Realty Ltd": "SUNTECK.NS",
    "DLF Ltd": "DLF.NS",
    "City Union Bank Ltd": "CUB.NS",
    "Jammu and Kashmir Bank Ltd": "JnKBANK.NS",
    "Punjab National Bank": "PNB.NS",
    "Welspun Corp Ltd": "WELCORP.NS",
    "TVS Motor Company Ltd": "TVSMOTOR.NS",
    "United Spirits Ltd": "MCDOWELL-N.NS",
    "NTPC Ltd": "NTPC.NS",
    "Indian Oil Corporation Ltd": "IOC.NS",
    "Coal India Ltd": "COALINDIA.NS",
    "Life Insurance Corporation of India": "LICNFNM.NS",
    "Engineers India Ltd": "ENGINERSIN.NS",
    "Hindustan Aeronautics Ltd": "HAL.NS",
    "NMDC Ltd": "NMDC.NS",
    "Power Finance Corporation Ltd": "PFC.NS",
    "SJVN Ltd": "SJVN.NS",
    "Housing & Urban Development Corporation Ltd": "HUDCO.NS",
    "New India Assurance Company Ltd": "NIACL.NS",
    "Gujarat Pipavav Port Ltd": "GPPL.NS",
    "Uno Minda Ltd": "MINDAIND.NS",
    "APL Apollo Tubes Ltd": "APLAPOLLO.NS",
    "GAIL (India) Ltd": "GAIL.NS",
    "Tamilnad Mercantile Bank Ltd": "TMB.NS",
    "ICICI Securities Ltd": "ISEC.NS",
    "Sonata Software Ltd": "SONATSOFTW.NS",
    "Page Industries Ltd": "PAGEIND.NS",
    "NHPC Ltd": "NHPC.NS",
    "Marico Ltd": "MARICO.NS",
    "Redington Ltd": "REDINGTON.NS",
    "Container Corporation Of India Ltd": "CONCOR.NS",
    "Nippon Life India Asset Management Ltd": "NAM-INDIA.NS",
    "Granules India Ltd": "GRANULES.NS",
    "Capri Global Capital Ltd": "CGCL.NS",
    "Indian Railway Finance Corporation Ltd": "IRFC.NS",
    "Mazagon Dock Shipbuilders Ltd": "MAZDOCK.NS",
    "Shriram City Union Finance Ltd": "SHRIRAMCIT.NS",
    "L&T Finance Holdings Ltd": "L&TFH.NS",
    "Bajaj Auto Ltd": "BAJAJ-AUTO.NS"
};
  
export { stocks };