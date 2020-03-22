// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { id: '1  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/3f9b82a0-48dc-4be2-81fb-08e5a2b1c2d6.mp3', title: '	凯叔说：给童年英雄的力量 - 《封神演义》凯叔推荐语' },
      { id: '2  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/aa43d64d-ba3f-48ba-ab93-a7a32b071b0e.mp3', title: '	引子 神怒 - 一首诗惹了祸' },
      { id: '3  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0f951141-6ec6-4997-9f46-bd10a451ea3d.mp3', title: '	第1集 狐狸间谍 - 狐妖领命' },
      { id: '4  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/56d02c7e-05a5-44e4-88a3-aff127e8c249.mp3', title: '	凯叔·封神演义 宣传片 - 听神魔大战，定心中乾坤' },
      { id: '5  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1c18b1ca-adc4-429d-b694-8a1578228c3e.mp3', title: '	第2集 黑白之战 - 苏护反商' },
      { id: '6  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ec46dad6-41b8-42a9-b8af-b32590dc202e.mp3', title: '	第3集 宝葫芦的秘密 - 全忠被擒' },
      { id: '7  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/7766e50a-69ed-46a5-a0a5-8a3039e6d02b.mp3', title: '	第4集 鼻子里的龙卷风 - 哼将来也' },
      { id: '8  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/30d2cd38-d98b-407f-b03a-d447dbd250c1.mp3', title: '	第5集 美少女变身记 - 白狐附身' },
      { id: '9  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/157b70fb-570e-4616-922d-bbb2050db1ff.mp3', title: '	第6集 大王，有妖气 - 木头宝剑' },
      { id: '10 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ad350591-a274-4004-8089-98c503b02807.mp3', title: '	第7集 妲己的毒计 - 炮烙问世' },
      { id: '11 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/89adbc74-fcf7-4da5-967e-8e03617ef539.mp3', title: '	第8集 巨人的愤怒 - 王子出逃' },
      { id: '12 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1cb77715-fbdb-48f7-8032-6ea09c4dfaae.mp3', title: '	第9集 龟壳预言师（上） - 雷震子出世' },
      { id: '13 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/baaa8e26-67cc-4abc-a443-7a68ad3ce826.mp3', title: '	第10集 龟壳预言师（下） - 文王被囚' },
      { id: '14 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/eeecf7b4-6adb-426c-a23c-033a06d5699e.mp3', title: '	第11集 哪吒出世 - 哪吒出世' },
      { id: '15 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/56440544-2a12-4150-a03c-4ade5681c5a1.mp3', title: '	第12集 哪吒闹海（上） - 大闹东海' },
      { id: '16 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/a794d7fd-15ff-4cfa-ba74-2d40237299dd.mp3', title: '	第13集 哪吒闹海（下） - 大闹东海' },
      { id: '17 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/eeecf7b4-6adb-426c-a23c-033a06d5699e.mp3', title: '	哪吒出世 - 哪吒出世' },
      { id: '18 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/82c0a511-3ce3-44f8-9ae7-82c7e954236a.mp3', title: '	第14集 大龙王，小泥鳅 - 天庭结怨' },
      { id: '19 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/28995b42-a36b-4b8a-ab50-3ea846b33baa.mp3', title: '	第15集 四大龙王斗陈塘 - 水淹陈塘' },
      { id: '20 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/18ba576e-5409-490e-821c-6008c3c67a0c.mp3', title: '	第16集 哪吒复活记 - 莲花化身' },
      { id: '21 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/50d665e5-873e-4aa1-947e-d7cf5fff6c25.mp3', title: '	第17集 龙宫大战 - 大闹水晶宫' },
      { id: '22 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/877ac970-9249-48eb-81f7-3dcf25804cbc.mp3', title: '	第18集 玲珑塔镇哪吒 - 父子和解' },
      { id: '23 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/dbbd1d81-1f97-457e-a6d3-9c8ac505ce7a.mp3', title: '	第19集 封神榜问世 - 子牙出山' },
      { id: '24 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/a33d2a81-5a47-4341-80ba-c1fcbd12cac4.mp3', title: '	第20集 姜子牙的亏本买卖 - 子牙讨生活' },
      { id: '25 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/dabcc473-5221-4742-a379-b3b86a2c88da.mp3', title: '	第21集 夜捉捣蛋鬼 - 子牙收五鬼' },
      { id: '26 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bc3d6611-7eac-4636-ae1a-1758f624f06c.mp3', title: '	第22集 活捉琵琶精 - 子牙捉妖' },
      { id: '27 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6284d3bc-0672-4f8c-96f1-d29333087812.mp3', title: '	第23集 火烧琵琶精 - 子牙降妖' },
      { id: '28 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/cab9c907-5927-49fa-beeb-c044fdf44e70.mp3', title: '	第24集 无敌泡泡 - 水遁逃生' },
      { id: '29 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0ed1834e-730e-4000-a649-5c2d1039948f.mp3', title: '	第25集 超级飞毯 - 土遁救人' },
      { id: '30 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ed66af3b-a2bb-4920-8475-e8a5d00f23ca.mp3', title: '	第26集 伯邑考的宝贝 - 献宝救父' },
      { id: '31 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/8dc39607-1388-4ba3-b2c1-5fed231046c6.mp3', title: '	第27集 白猿战狐妖 - 妖精斗法' },
      { id: '32 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bca98282-a485-4552-8f3c-de09cd80a13f.mp3', title: '	第28集 长出翅膀的少年 - 雷震子下山' },
      { id: '33 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0ffc817c-9b58-4777-8afc-a3c9f61d7e24.mp3', title: '	第29集 背着父亲飞高山 - 雷震子救父' },
      { id: '34 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9b341cd3-b27f-4b89-89b2-b35a1ac38925.mp3', title: '	第30集 龟壳算错了 - 文王求贤' },
      { id: '35 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ac534626-f768-4c23-9d8b-14c8b621c31c.mp3', title: '	第31集 奇怪的轿子 - 姜子牙出山' },
      { id: '36 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/56cda84a-b111-4710-8583-00ea34a04d94.mp3', title: '	第32集 一灭北伯侯 - 姜子牙智取崇城' },
      { id: '37 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ec463674-7a58-4ff5-a3ad-6d1acc2d749a.mp3', title: '	第33集 鹿台群妖宴 - 狐妖露尾' },
      { id: '38 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b0676d1e-5d5a-4a76-9966-144703a0fbdd.mp3', title: '	第34集 比干灭妖记 - 火烧狐窝' },
      { id: '39 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6e9b2c2f-4cf3-450d-97c7-17d1d55a69a5.mp3', title: '	第35集 没有心的骑马人 - 比干遭难' },
      { id: '40 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/cfc308e3-f724-42b1-ab4c-b1db07b3117b.mp3', title: '	第36集 三只眼的太师 - 闻仲回朝' },
      { id: '41 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/670a7224-8c71-43d7-904f-595bf7967bf8.mp3', title: '	第37集 神牛的愤怒 - 王将之战' },
      { id: '42 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4818d414-44a6-42d0-be31-032ffe7bbbc8.mp3', title: '	第38集 沙子变成兵 - 飞虎过关' },
      { id: '43 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/e91a1690-fe48-4d48-9a7b-c19296fe4e01.mp3', title: '	第39集 神镖化火龙 - 黄天化救父' },
      { id: '44 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f621916c-894b-415f-8a83-0eaf298d1c77.mp3', title: '	第40集 赢回莫邪神剑 - 险过穿云关' },
      { id: '45 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0de6588b-0b30-4cdc-8e3c-baea6b69bba1.mp3', title: '	第41集 哪吒大战戮魂幡 - 哪吒战耗子将军' },
      { id: '46 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5f2040bb-b45b-4314-a669-034219b3ee07.mp3', title: '	第42集 口水神将 - 呼名落马' },
      { id: '47 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/520b1ed7-7d99-4b09-8012-369e125a1458.mp3', title: '	第43集 长颈鹿变乌龟 - 二上昆仑' },
      { id: '48 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/24ad8715-4d78-4f89-ac72-6c1e6e15ddc4.mp3', title: '	第44集 口水神将不灵了 - 大败张桂芳' },
      { id: '49 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/08c8cff1-067b-4762-910a-75dc91ae9381.mp3', title: '	第45集 怪物大会 - 九龙四圣出山' },
      { id: '50 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/93637609-e3ab-4fcf-8103-46625fefd7ae.mp3', title: '	第46集 怪老虎拜师 - 姜子牙收徒' },
      { id: '51 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ea22fcd9-357c-471c-af67-55583b550834.mp3', title: '	第47集 三颗宝珠 - 子牙负伤' },
      { id: '52 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/640b0066-a12e-416f-9c91-38a6e0879ac3.mp3', title: '	第48集 遁龙柱显神威 - 神秘救兵' },
      { id: '53 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4165ff05-79cf-4059-bf7e-47212f5e2e7f.mp3', title: '	第49集 打神鞭发威 - 终极武器' },
      { id: '54 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0c41044f-450e-4825-92e5-7025e14aea6e.mp3', title: '	第50集 夏天里的大冰山 - 冰冻岐山' },
      { id: '55 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/8cf3a5a2-37db-4ae8-bf67-8a0369768697.mp3', title: '	第51集 法宝被俘 - 魔家四将战西岐' },
      { id: '56 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/631db97c-fcd6-4f69-8ef7-35f301f9007d.mp3', title: '	第52集 翻江倒海 - 四天王水淹西岐' },
      { id: '57 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bae70e8c-5434-4fce-b34c-81887400cef7.mp3', title: '	第53集 神奇的米斗 - 西岐城绝境逢生' },
      { id: '58 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4db82cdc-0ee0-4fc6-b0ef-e43ec1f62df0.mp3', title: '	第54集 花狐貂来投降 - 姜子牙将计就计' },
      { id: '59 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/19e09337-86b7-4084-bcfa-3019843b485a.mp3', title: '	第55集 法宝变破烂 - 神剑莫邪破青云' },
      { id: '60 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d93959ad-1c93-479a-8e4f-ccc8098720a4.mp3', title: '	第56集 闻太师收将 - 四强盗归商' },
      { id: '61 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/86667392-1c59-4c97-95ff-6cf64d370f5c.mp3', title: '	第57集 雷震子大战四将 - 长翅膀的对手' },
      { id: '62 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f346e371-83de-48c2-9c22-fc11381b3240.mp3', title: '	第58集 姜子牙大战闻太师 - 老太师兵败' },
      { id: '63 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0ee9eb2e-25bf-48fb-8bd0-9b1ba7d22e05.mp3', title: '	第59集 小木偶夺魂记 - 姜子牙失魂' },
      { id: '64 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f913c7b1-5136-459c-b0db-c768b74137f4.mp3', title: '	第60集 太极神图破怪阵 - 落魂阵被破' },
      { id: '65 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/38ee6d86-7b6f-462f-92ea-bb16fc699063.mp3', title: '	第61集 水晶瓶的魔法 - 勇破风吼阵' },
      { id: '66 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f9bc1797-fc52-454e-aedf-3b199e2ec3b1.mp3', title: '	第62集 魔冰怪兽来袭 - 大破寒冰阵' },
      { id: '67 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d8071ce5-4375-4550-b2b7-4a3fa2f2b729.mp3', title: '	第63集 二十一面魔镜 - 奇幻金光阵' },
      { id: '68 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/fa6149e9-87ac-4ccd-81da-62a9c6205ef1.mp3', title: '	第64集 九龙大战黑乌鸦 - 共破化血阵' },
      { id: '69 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/aefbfb64-d469-4c86-8e01-890bf838afe3.mp3', title: '	第65集 神秘的珍珠项链 - 赵公明重创西岐' },
      { id: '70 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c770b03c-88cd-4cc7-898e-e6a41b952ccc.mp3', title: '	第66集 会飞的铜钱 - 赵公明丢法宝' },
      { id: '71 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/523a87f7-7266-4d79-83b6-e9c3d8c414b9.mp3', title: '	第67集 教书老头来打仗 - 陆压大破烈焰阵' },
      { id: '72 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/65d19fcb-cf3a-4bd3-bcf6-1b2a59002d46.mp3', title: '	第68集 妹妹来复仇 - 碧霄仙子闯西岐' },
      { id: '73 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1a1cd208-8858-42c3-a926-6aa3898d9b3a.mp3', title: '	第69集 一秒变雕像 - 杨戬智破黄河阵' },
      { id: '74 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0f951141-6ec6-4997-9f46-bd10a451ea3d.mp3', title: '	第1集 狐狸间谍（试听） - 狐妖领命' },
      { id: '75 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/aa43d64d-ba3f-48ba-ab93-a7a32b071b0e.mp3', title: '	引子 神怒（试听） - 一首诗惹了祸' },
      { id: '76 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/55af7861-72fa-4a36-81c0-e2d094eb50cc.mp3', title: '	第70集 玩沙子的妖怪 - 武王勇破红沙阵' },
      { id: '77 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/42ab594b-dc86-4e18-ba46-105f621f5914.mp3', title: '	第71集 醒不了的梦 - 绝龙岭闻仲殒命' },
      { id: '78 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4db82cdc-0ee0-4fc6-b0ef-e43ec1f62df0.mp3', title: '	第54集 花狐貂来投降(试听) - 姜子牙将计就计' },
      { id: '79 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/98585c94-f1b5-40f6-a429-7c75ba5fdf6f.mp3', title: '	第72集 百发百中的五光石 - 邓氏父女战西岐' },
      { id: '80 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/27ed5bdd-6b85-4f49-90ee-936330d10716.mp3', title: '	第73集：土豆将军 - 申公豹激将土行孙' },
      { id: '81 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/80145421-06d8-431f-b36b-acd8a8c461bb.mp3', title: '	第74集 大土豆劫持哮天犬 - 遁地术显威风' },
      { id: '82 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c95ee522-fd7b-4e2c-a57f-1efaf3c30de3.mp3', title: '	第75集 活捉大土豆 - 土行孙夜劫武王' },
      { id: '83 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9e221320-3708-497c-8d7c-99ec76789f51.mp3', title: '	第76集 一台花轿上战场 - 邓九公投西岐' },
      { id: '84 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/7ecf0646-de34-470e-88a3-8a8b3d792f63.mp3', title: '	第77集 顽固的大鼻子 - 哼将再出战' },
      { id: '85 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ca7648e5-02d8-4621-9567-088b0259808d.mp3', title: '	第78集 大鼻子斗神牛 - 黄天化骑牛救父' },
      { id: '86 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9f8a88cf-89a0-4ed1-8b64-238fa6a4da4d.mp3', title: '	第79集 臭袜子当法宝 - 吕岳携宝战西岐' },
      { id: '87 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/16de9bf6-5f0a-44b5-ba73-22bdc1172c1f.mp3', title: '	第80集 雷震子唱歌救西岐 - 雷震子唱歌破魔罄' },
      { id: '88 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c6c23b2a-a547-498f-872a-d9fe2a107bbc.mp3', title: '	第81集 老鼠军团来袭 - 瘟疫害西岐' },
      { id: '89 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f5405fd4-133d-47f2-bd65-1b5de073b03d.mp3', title: '	第82集 昏迷剑和瞌睡雨 - 吕岳战败' },
      { id: '90 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0dc7e975-9d37-4b09-82be-a7a9812fe212.mp3', title: '	第83集 王子下山 - 殷洪下山' },
      { id: '91 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/593249d5-dedf-4c71-8277-3d631c61082b.mp3', title: '	第84集 黑虎道士的毒计 - 申公豹说反殷洪' },
      { id: '92 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b533a468-daf1-4d29-85c6-fbd0bb2aa262.mp3', title: '	第85集 千手战将 - 土行孙战马元' },
      { id: '93 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1f905cd0-ba91-4004-ba64-bc8cce59dbf7.mp3', title: '	第86集 点心大战一气仙 - 杨戬战马元' },
      { id: '94 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/7a891282-80da-4988-85aa-879eec58f1f6.mp3', title: '	第87集 神奇的太极图 - 殷洪化仙鹤' },
      { id: '95 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5be53e6e-8ff2-4983-b201-03a66e47ec06.mp3', title: '	第88集 半鸟半鱼的敌人 - 四先锋齐战羽翼仙' },
      { id: '96 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/a3b9b185-3683-497a-84b5-bf723190800e.mp3', title: '	第89集 甜馅饼做的武器 - 杨戬大战羽翼仙' },
      { id: '97 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/483699ef-1526-4a33-b5ca-1520424d76e2.mp3', title: '	第90集 第一法宝番天印 - 申公豹说反殷郊' },
      { id: '98 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c3fb4ee4-affd-49f6-b2ff-b9497136afee.mp3', title: '	第91集 四面小旗破神印 - 失法宝殷郊丧命' },
      { id: '99 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/96ff18f3-793a-4d1e-bbb5-445d9dc1f5db.mp3', title: '	第92集 老虎尾巴解危机 - 罗宣火焚西岐城' },
      { id: '100	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/58d6e54b-923f-4963-a4b7-c110a933fec6.mp3', title: '	第93集 龙须虎大战隐身门 - 洪锦战西岐' },
      { id: '101	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d79bd65c-4588-4dda-8415-2ca774334a52.mp3', title: '	第94集 神䱞斗鲸龙 - 洪锦降西岐' },
      { id: '102	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/731b4d17-f5ec-4caa-bbe7-31ab7bce5c95.mp3', title: '	第95集 封神英雄榜 - 姜子牙兵出岐山' },
      { id: '103	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d353cdb1-0d47-408f-a089-82737533c7ec.mp3', title: '	第96集 九只翅膀的蜈蚣 - 金鸡岭黄天化遇难' },
      { id: '104	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bd30f66d-9ef0-470b-89c0-76b90d392b50.mp3', title: '	第97集 神鹰降蜈蜂 - 崇黑虎大战高继能' },
      { id: '105	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/429bdc7d-5e60-4cdd-983d-5645a6f49a41.mp3', title: '	第98集 夜晚升起的太阳 - 孔宣展威风' },
      { id: '106	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/299bf6f9-ca63-4618-8785-6078c9abe6d1.mp3', title: '	第99集 一片树叶的魔力 - 孔雀将军西归' },
      { id: '107	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/151495a3-0dc4-44d5-bd5d-7ddc83c692aa.mp3', title: '	第100集 大战火焰铠甲兵团 - 兵阻佳梦关' },
      { id: '108	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/3cb40a61-2c9b-4170-8440-2f3bd5a75da7.mp3', title: '	第101集 姜子牙大意失金冠 - 申公豹二骗金霞冠' },
      { id: '109	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/872627b0-b2a5-4caa-87c1-64f23143ccae.mp3', title: '	第102集 险胜大乌龟 - 接引道人战龟灵圣母' },
      { id: '110	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/903f6c50-047d-41bc-96bc-d16b0e4b1245.mp3', title: '	第103集 迎战哈哈怪将 - 青龙关老将殒命' },
      { id: '111	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/246445f3-bea9-41a5-80a5-335afc4243dc.mp3', title: '	第104集 鼻子嘴巴的决斗 - 郑伦战陈奇' },
      { id: '112	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6c7ab1ee-e699-4928-84cb-37b97bc1c2a6.mp3', title: '	第105集  化血神刀了不得 - 汜水关大战余元' },
      { id: '113	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/fd2bfcbe-ed66-418f-9fb7-320efaa50276.mp3', title: '	第106集 神秘的解毒药 - 杨戬智取救命药' },
      { id: '114	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/50cf9424-9729-4671-a223-402d8b2dd1e7.mp3', title: '	第107集 大土豆盗取五云驼 - 土行孙盗骑陷身' },
      { id: '115	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/72210960-8435-4d07-9767-0cd73f0303ea.mp3', title: '	第108集 乾坤袋中烤土豆 - 土行孙被困' },
      { id: '116	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b5894eb0-e146-41a7-af8e-c2639d0b7972.mp3', title: '	第109集  铁盒中的“礼物” - 余元铁柜沉海' },
      { id: '117	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/16d1d8fb-3210-4439-8a9c-e08b451e8323.mp3', title: '	第110集 蝴蝶大战斩仙刀 - 金灵圣母战西岐' },
      { id: '118	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d15eb168-e9ba-46cd-933b-92840a618bc2.mp3', title: '	第111集 小风车上战场 - 大战万刃车阵' },
      { id: '119	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/143ccacc-d717-4f32-a979-d3e661794140.mp3', title: '	第112集 纣王的礼物 - 郑伦智取汜水关' },
      { id: '120	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/66da67ab-488d-4b7d-bc01-94d22d6db6df.mp3', title: '	第113集 四不像不听话了 - 误入诛仙阵' },
      { id: '121	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/10615573-2942-4192-9f16-560e4311f5b3.mp3', title: '	第114集  天下第一魔阵 - 大破诛仙阵' },
      { id: '122	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9352f393-24c2-4fe9-a4e2-96446e0fedf5.mp3', title: '	第115集 手心里的眼睛 - 杨任大破瘟㾮阵' },
      { id: '123	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ae77818f-44aa-489f-b8ab-e1577cfb1319.mp3', title: '	第116集 小竹钩钓出大怪鱼 - 大破太极两仪四象阵' },
      { id: '124	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/81eadcb5-ca1c-4873-891d-16f211f5b365.mp3', title: '	第117集 大战万仙阵 - 姜子牙大破万仙阵' },
      { id: '125	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/eeaf6bf0-d7dc-47dc-95be-f9e388761027.mp3', title: '	第118集 好友变敌人 - 西岐兵阻临潼关' },
      { id: '126	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/33df5d58-724a-4bd7-8454-b221805da7cd.mp3', title: '	第119集 黄飞虎“叛变” - 飞虎舍身破黑旗' },
      { id: '127	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0e098fb9-a9f6-424c-8ede-38a1adb65261.mp3', title: '	第120集 真假土行孙 - 土行孙夫妇渑池殒命' },
      { id: '128	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/3ecc5668-51ba-4b71-8a2f-4f036fa4821d.mp3', title: '	第1集 狗窝里的金睛兽 - 金睛兽哪吒落凡间' },
      { id: '129	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/3ecc5668-51ba-4b71-8a2f-4f036fa4821d.mp3', title: '	狗窝里的金睛兽(试听) - 金睛兽哪吒落凡间' },
      { id: '130	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/afc86277-2584-483d-906d-7a77671d865a.mp3', title: '	第121集 河神的考验 - 西岐大军渡黄河' },
      { id: '131	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/af25e8bd-1602-4ce1-8ddc-eee1189aa643.mp3', title: '	第122集 千里眼和顺风耳 - 桃精柳鬼阻孟津' },
      { id: '132	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5c304e87-6849-4d09-bec6-61a657b823ce.mp3', title: '	第2集 小胶囊显神威 - 杨戬PK胶囊机器人' },
      { id: '133	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/637067ff-3011-4767-ae67-d1fe667f6d10.mp3', title: '	第3集 夏天穿棉袄 - 寒冰阵PK空调服' },
      { id: '134	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6786c350-7e8a-4858-9ee4-e8db8b02c708.mp3', title: '	第123集 龙须虎决战大巨人 - 蟠龙岭火烧邬文化' },
      { id: '135	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/2e34b327-76ed-400c-b6aa-9a7b6a6071c6.mp3', title: '	第124集 大鼻子斗怪牛 - 郑伦孟津绝命' },
      { id: '136	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5e08b215-ef83-4d99-aacd-7f193ca61d51.mp3', title: '	第125集 杨戬大战妖王 - 杨戬战袁洪' },
      { id: '137	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/3214bd86-664d-4a1f-91a4-c8e94b27b675.mp3', title: '	第126集 卧底之战 - 智取游魂关' },
      { id: '138	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bf416f9d-7998-4fe2-a21d-160657c300a5.mp3', title: '	第127集 王后的战斗 - 妲己之死' },
      { id: '139	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/3f87e0bd-c3e8-42bb-be84-39ee9761296d.mp3', title: '	第4集 东海龙王失业了 - 龙王PK人工降雨' },
      { id: '140	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/fb1421c0-7d74-458e-acbe-b0cba88f843c.mp3', title: '	第5集 飞得最远的坐骑 - 四不像PK宇宙飞船' },
      { id: '141	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b69fcbac-e7e1-4abe-a707-b660b548208d.mp3', title: '	第6集 谁先找到水晶宫 - 避水诀PK深海探测器' },
      { id: '142	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1cc1c726-a169-410f-a33a-275db4450b13.mp3', title: '	第7集 遁地冠军赛 - 土行孙PK地铁' },
      { id: '143	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c7f5eb98-f5ae-4597-a14a-56d17810c95b.mp3', title: '	第128集 纣王亲征 - 牧野之战' },
      { id: '144	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c669563a-3ce6-453e-be94-69b27b24c870.mp3', title: '	第129集 姜子牙封神 - 群英受封' },
      { id: '145	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ea6e86ea-3563-4f8a-a33c-1b0ac4042df0.mp3', title: '	第130集 永远的英雄梦 - 封神演义大结局' },
      { id: '146	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/448261d2-a9ed-4577-a2c4-4e5db22e82f7.mp3', title: '	第8集 天下无贼 - 神眼PK人脸识别' },
      { id: '147	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/a58e9c9c-246a-4035-95eb-418aca6b7924.mp3', title: '	第9集 宇宙的歌声 - 千里眼PK天眼' },
      { id: '148	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/e6f30981-99d1-43cf-ae57-2fcb63d03ad4.mp3', title: '	第10集 超级鸡肉 - 美味的人造肉' },
      { id: '149	', audiourl: 'https://cdn.kaishuhezi.com/kstory/member/audio/e9b67282-9dfb-49ad-a55d-9acd6cb944ed.mp3', title: '	凯叔说：双11来啦 - 沉甸甸的会员周年礼' },
      { id: '150		' },
      
    ],
    src: ''
   
  },



playaudio: function (e) {
  this.audioCtx.pause()
  this.setData({
    src: e.currentTarget.dataset.id
    
  })
  
  this.audioCtx.play()
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audioCtx=wx.createAudioContext('myaudio')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  ,
 
})