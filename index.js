// pages/index/index.js 

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { id: '1  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/3b16de95-f651-4871-ab98-f63e58e86a9c.mp3', title: '	第一部01：石猴出世 - 花果山水帘洞' },
      { id: '2  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c640143a-c9d4-4d3a-89ad-371ca92dc332.mp3', title: '	第一部02：悟空学艺 - 拜师菩提老祖' },
      { id: '3  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/62175304-407f-4121-b5fe-9de598c309b1.mp3', title: '	第一部03：金箍棒 - 龙宫夺宝' },
      { id: '4  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ad0aa2d5-4472-4ce5-9c4d-46c8ee5eeeed.mp3', title: '	第一部04：大闹幽冥界 - 笔勾生死簿' },
      { id: '5  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/8c43149b-b624-4975-affa-0e7d2dc1d733.mp3', title: '	第一部05：官封弼马温 - 打出御马监' },
      { id: '6  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b10ddae7-957e-4389-a04a-e80833bd3717.mp3', title: '	第一部06：掌管蟠桃园 - 偷吃仙桃' },
      { id: '7  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/24f06644-39fe-4dcc-9f6d-2afadc9ccf37.mp3', title: '	第一部07：醉下瑶池 - 天兵天将捉拿孙悟空' },
      { id: '8  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/72075126-1002-4d3e-90fe-6711ea07e74f.mp3', title: '	第一部08：大战二郎神 - 三尖两刃刀' },
      { id: '9  	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bdc760df-92b9-4bb3-9ab2-fc64ecf3a826.mp3', title: '	第一部09：火眼金睛 - 八卦炉炼猴' },
      { id: '10 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/8f19645c-0ecd-46e8-9a57-801859fa3147.mp3', title: '	第一部10：五行山下 - 如来佛祖' },
      { id: '11 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d93b93d8-1fd9-46be-8585-0a88f73f0946.mp3', title: '	第一部11：大圣拜师 - 连杀六个强盗' },
      { id: '12 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b67ced3f-12b7-4048-95bb-ca88e5cdb427.mp3', title: '	第一部12：紧箍咒 - 张良进履' },
      { id: '13 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/2969bd55-574a-4eb4-83f4-a98739866cdd.mp3', title: '	第一部13：马换小白龙 - 三根猴毛儿' },
      { id: '14 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0e2bdd7e-26e0-4ce0-916b-3f19736e0106.mp3', title: '	第一部14：火烧观音院 - 辟火罩护师' },
      { id: '15 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6adcf247-565d-4cfb-a197-ead29d8cd713.mp3', title: '	第一部15：计捉黑熊怪 (上) - 佛衣大会' },
      { id: '16 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/e680b3f6-45b1-408f-80ef-671b9aadeb8a.mp3', title: '	第一部16：计捉黑熊怪(下) - 观音菩萨出马' },
      { id: '17 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c23f679b-4ee5-4384-ae97-cae6de0ad70b.mp3', title: '	第一部17：猪八戒拜师(上) - 福陵山云栈洞' },
      { id: '18 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4aa5d250-6ffc-4feb-8c15-81296946d036.mp3', title: '	第一部18：猪八戒拜师(下) - 老虎精劫唐僧' },
      { id: '19 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1e3c8db5-5976-482f-a7d3-2ff2ca6fb509.mp3', title: '	第一部19：大战黄风怪(上) - 黄风怪出绝招' },
      { id: '20 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c8e6e427-0b17-4b32-99e6-a321418c86aa.mp3', title: '	第一部20：大战黄风怪（下） - 灵吉菩萨来了' },
      { id: '21 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/473ffd39-36de-440a-9aeb-aa6a5ccd6f7c.mp3', title: '	第一部21：被困流沙河 - 卷帘大将' },
      { id: '22 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b1de874d-3ae7-4a6c-a4c0-6022d643a44b.mp3', title: '	第一部22：师徒四人 - 大集合' },
      { id: '23 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0052307e-5206-493a-9e28-248f2b6ffaeb.mp3', title: '	第一部23：偷吃人参果 - 明月和清风' },
      { id: '24 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/62dbbdf5-afb7-4930-91b2-ed811231ace9.mp3', title: '	第一部24：大闹五庄观(上) - 推倒人参果树' },
      { id: '25 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5132b444-204c-4b15-b3e6-01de29ea6029.mp3', title: '	第一部25：大闹五庄观(中) - 四棵柳树' },
      { id: '26 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/fd8f084e-9e25-4ade-93bc-24ffb7b42744.mp3', title: '	第一部26：大闹五庄观(下) - 玉净瓶甘露水' },
      { id: '27 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d4575acb-3704-4efd-9183-226449d1d7cb.mp3', title: '	第二部01：三打白骨精(上) - 妖怪变的姑娘' },
      { id: '28 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/a027b1a8-7d53-4f5c-bceb-38343d32c5dd.mp3', title: '	第二部02：三打白骨精(中) - 师父的紧箍咒' },
      { id: '29 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/35e57882-a7ba-4ce7-a61d-b1a1ac0b62f9.mp3', title: '	第二部03：三打白骨精(下) - 悟空告辞' },
      { id: '30 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/cc2afe0e-ba6b-44dd-9bb7-dcbf93b0ae7b.mp3', title: '	第二部04：群妖聚义 - 回到花果山' },
      { id: '31 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/fb909cd4-e6f2-4da5-8df3-f1ccda96a1cb.mp3', title: '	第二部05：遇难波月洞 - 八戒化斋' },
      { id: '32 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/faca7827-18f0-41fc-90a3-e760f65a2a02.mp3', title: '	第二部06：百花公主 - 唐僧得救' },
      { id: '33 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5d8e4d47-643c-43c1-91e5-30db8668ac26.mp3', title: '	第二部07：宝象国 - 降妖救公主' },
      { id: '34 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/be318960-e88c-4da6-84c0-2c580c7dd209.mp3', title: '	第二部08：再战波月洞 - 大战黄袍怪' },
      { id: '35 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ba97eca7-09d6-4f21-9b39-b65699b5d212.mp3', title: '	第二部09：三藏成虎 - 国王的驸马' },
      { id: '36 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/37f38209-a923-4be1-bc58-54cab5b7910a.mp3', title: '	第二部10：白龙救主 - 大殿对战' },
      { id: '37 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f8674dff-ce40-4673-b518-42a50de26574.mp3', title: '	第二部11：智激美猴王 - 八戒求救' },
      { id: '38 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5845b91f-d748-42c8-8eb3-eafcc9800b46.mp3', title: '	第二部12：智降黄袍怪 - 宝贝仙丹' },
      { id: '39 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9b68d8f5-41ad-4608-b19e-390065df619e.mp3', title: '	第二部13：平顶山 - 师徒相见' },
      { id: '40 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/67cc1262-bf06-4eeb-bc67-251998dcc1dd.mp3', title: '	第二部14：三座大山 - 银角大王' },
      { id: '41 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1cce1d14-0c3a-4685-9b37-de8e41a2edcb.mp3', title: '	第二部15：装天的葫芦 - 神通的宝贝' },
      { id: '42 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/be897ef9-a6a3-46a5-8995-2d6f9b5efde8.mp3', title: '	第二部16：九尾狐狸 - 悟空收了捆仙绳' },
      { id: '43 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bb2bb4a0-fe01-4bc3-b897-138dd9577a7b.mp3', title: '	第二部17：者行孙与行者孙 - 葫芦的厉害' },
      { id: '44 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4b4b9c97-0e0f-43b6-aca8-a6fd2d038603.mp3', title: '	第二部18：大破莲花洞 - 不一般的和尚' },
      { id: '45 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bac15481-186f-4fb5-be20-4a69ee1afa3d.mp3', title: '	第二部19：乌鸡国王 - 金角大王哭了' },
      { id: '46 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9a3f81e1-e8e0-474b-a93d-5d14d533f201.mp3', title: '	第二部20：立帝货 - 太子射猎' },
      { id: '47 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9842c913-95a5-4bb4-9f19-8497f9c67ebd.mp3', title: '	第二部21：父子相认 - 爹爹和道士' },
      { id: '48 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c4205b2c-76c6-4cb6-b6f8-e38e25c9c7ba.mp3', title: '	第二部22：两个唐僧 - 假国王' },
      { id: '49 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/8df3d9fe-eca6-489e-ab87-54ee7eba0aa1.mp3', title: '	第二部23：一朵红云 - 遇见红孩儿' },
      { id: '50 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/872096eb-dc72-4e05-8abc-95682f8a71d5.mp3', title: '	第二部24：圣婴大王 - 牛魔王的儿子' },
      { id: '51 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/62e8c7f2-a7b6-41d8-8fdf-faf3dc351b60.mp3', title: '	第二部25：六亲不认 - 三昧真火' },
      { id: '52 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b4917b4a-bed8-4456-9282-aaefafa373a0.mp3', title: '	第二部26：真假牛魔王 - 八戒请菩萨' },
      { id: '53 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/08b39e12-8df0-4098-95a4-6ad8ba9ff424.mp3', title: '	第二部27：善财童子 - 猴子请来的救兵' },
      { id: '54 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/bc69f239-0e7e-42d8-bcbe-547050cd7a69.mp3', title: '	第三部01：黑水河底 - 沙和尚大战鳄鱼精' },
      { id: '55 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f10b988a-4c7b-4d9f-81a1-662a1221d36d.mp3', title: '	第三部02：兄弟相斗 - 煮豆燃豆萁' },
      { id: '56 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ea21a128-3b20-407e-8d2b-a8420072e636.mp3', title: '	第三部03：抑佛重道 - 夜探三清观' },
      { id: '57 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0f963b15-7fe6-4342-8289-2c1de33e1f64.mp3', title: '	第三部04：三位国师 - 请猪八戒吃饭' },
      { id: '58 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/857382d3-b4d9-4ca5-916d-350af5500468.mp3', title: '	第三部05：三清圣水 - 喝尿的道士' },
      { id: '59 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/67fcfbf5-16bd-424a-8a14-ea2f4552ae2e.mp3', title: '	第三部06：登台求雨 - 斗法第一阵' },
      { id: '60 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/dd885b1f-85ef-49dc-bdfa-c506961cb7ef.mp3', title: '	第三部07：坐禅猜枚 - 三番斗法' },
      { id: '61 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/35b3a8c3-de61-4987-bfd1-8c8ff03b7c13.mp3', title: '	第三部08：砍头复生 - 玩命的买卖' },
      { id: '62 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0cfd72b3-b100-453b-94c6-d306f7e280c1.mp3', title: '	第三部09：开膛破肚 - 妖邪现真身' },
      { id: '63 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/84939d9f-8918-4f93-be4b-8264485da3f7.mp3', title: '	第三部10：通天河畔 - 班门弄斧' },
      { id: '64 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/dbd6f6b1-c838-4b23-b7ca-4be335e64541.mp3', title: '	第三部11：童男童女 - 灵感大王' },
      { id: '65 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/08accda3-5832-4140-abc6-9692b07a0f8c.mp3', title: '	第三部12：兴风作雪 - 大王，您吃我吧！' },
      { id: '66 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/cbb9d8d5-6520-4783-8a80-6c89ea23e3c6.mp3', title: '	第三部13：水上鏖战 - 擒贼先擒王' },
      { id: '67 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/37fe1964-0007-4587-86bb-855c3e122a27.mp3', title: '	第三部14：鱼篮观音 - 菩萨的宠物' },
      { id: '68 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6aa2db06-ff7f-4580-b341-6245fdf41ff8.mp3', title: '	第三部15：千年神龟 - 老鼋的请求' },
      { id: '69 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/e5e2daf7-8223-45c5-b71f-566c961a6c13.mp3', title: '	第三部16：独角神兽 - 金兜山里金兜洞' },
      { id: '70 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/631a3b6f-cd91-48e4-a6f0-0a46a11262ea.mp3', title: '	第三部17：宝贝克星 - 能收一切的“圈套”' },
      { id: '71 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9914f8f5-3d62-46e7-9306-a7a8b2bb2b2f.mp3', title: '	第三部18：悟空盗宝 - 踏破铁鞋无觅处' },
      { id: '72 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/db7399e9-5b37-430f-aa9a-2ad45685b975.mp3', title: '	第三部19：青牛西去 - 金星降魔' },
      { id: '73 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/138f969b-2dce-415f-919e-582ff79e530b.mp3', title: '	第三部20：如意真仙 - 母子河' },
      { id: '74 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/b3c59a3a-5245-4492-92f3-77ed9ae8d186.mp3', title: '	第三部21：女儿国王 - 一见圣僧误终生' },
      { id: '75 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/21284fea-6ac8-4df1-a9b6-4015134201f1.mp3', title: '	第三部22：毒蝎美人 - 人肉包子' },
      { id: '76 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/e017d311-aab5-4ab0-a543-1ede693f754e.mp3', title: '	第三部23：昴日星官 - 雄鸡一声天下白' },
      { id: '77 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/3555585a-133c-4a20-a348-8e01f6d4720a.mp3', title: '	第三部24：拦路打劫 - 黑心儿子善良爹' },
      { id: '78 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/cab36193-dfc2-4d9b-b0e3-8f928e395bc5.mp3', title: '	第三部25：怒杀强盗 - 神机妙算' },
      { id: '79 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/a864907b-a486-4fe9-9692-e9f734326de6.mp3', title: '	第三部26：两个猴王 - 真假悟空' },
      { id: '80 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6bb77950-19b6-45f7-a94e-4c14ba6f511b.mp3', title: '	第三部27：上天入地 - 阎王面前辨真身' },
      { id: '81 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/48ebb07e-12c2-42cf-a9df-a7a3024f0abd.mp3', title: '	第三部28：二心归一 - 六耳猕猴' },
      { id: '82 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9e64469e-2abe-4378-8048-2a2c2c8c3082.mp3', title: '	第四部01：一借芭蕉扇 - 翠云山芭蕉洞' },
      { id: '83 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/416cd74b-1770-4289-b473-6dd59b396d02.mp3', title: '	第四部02：牵肠挂肚 - 积雷山摩云洞' },
      { id: '84 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f0421514-631c-4016-9ca7-a4279adb6ffa.mp3', title: '	第四部03：二借芭蕉扇 - 嘴吐树叶' },
      { id: '85 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d2b6b14a-3e64-47a3-84dc-04122e63ec55.mp3', title: '	第四部04：得而复失 - 得道多助，失道寡助' },
      { id: '86 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4c6e19c8-0a5f-446b-80e5-4903db5727d6.mp3', title: '	第四部05：三借芭蕉扇 - 一场恶战' },
      { id: '87 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/2edf3d35-c116-4756-bba9-cfd7a6edcb81.mp3', title: '	第四部06：深夜扫塔 - 宝塔十三层' },
      { id: '88 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/9bf0a798-9715-4004-a177-d05ff62b06f7.mp3', title: '	第四部07：九头怪 - 碧波潭大战' },
      { id: '89 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/399e27d9-cfa7-4c06-b96d-0660f0dfabbf.mp3', title: '	第四部08：冤家相会 - 偶遇二郎神' },
      { id: '90 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/02753b87-f333-4ed4-becc-28164c535162.mp3', title: '	第四部09：杨戬降妖 - 夺回佛宝' },
      { id: '91 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/484f67e5-7d00-4743-a7ae-b44f9be5834c.mp3', title: '	第四部10：小雷音寺 - 被困金铙' },
      { id: '92 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/234f2ba8-287f-416f-9776-c7d1197103ee.mp3', title: '	第四部11：装天装地 - 众神帮忙' },
      { id: '93 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ecdd14c4-8dbf-401e-995b-e9f1cf69263c.mp3', title: '	第四部12：龟蛇二将 - 铁桶大阵' },
      { id: '94 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/2073b427-0fb3-44d6-9af9-4910d7b21356.mp3', title: '	第四部13：弥勒佛祖 - 收服黄眉老佛' },
      { id: '95 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/76c9a7c5-9f69-48ff-999d-edb0ecdfa39d.mp3', title: '	第四部14：好大一条蛇 - 制服红蟒' },
      { id: '96 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/03bdc3ef-7f81-4175-86a4-c38dca83dac0.mp3', title: '	第四部15：巧揭皇榜 - 朱紫国王' },
      { id: '97 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c345f9cd-1f66-4add-b733-27b6211bb290.mp3', title: '	第四部16：悬丝诊脉 - 悟空看病' },
      { id: '98 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1778a7ed-3805-436c-9e78-a4bf22520a41.mp3', title: '	第四部17：麒麟山上赛太岁 - 五色浓烟' },
      { id: '99 	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/57db67b4-e250-4b49-903a-0fea01771ef2.mp3', title: '	第四部18：金圣娘娘 - 至宝紫金铃' },
      { id: '100	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f7799bdd-de38-4051-90e4-296eb15010a8.mp3', title: '	第四部19：杯酒换铃铛 - 安能辨雄雌' },
      { id: '101	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5c20b5e6-f334-4b61-804f-b92568e05337.mp3', title: '	第四部20：紫阳霞衣 - 金毛吼' },
      { id: '102	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/44de99ac-42f0-4227-91cd-a35a2c6f6b8b.mp3', title: '	第四部21：身陷盘丝洞 - 七只女妖' },
      { id: '103	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f8d56f04-64f0-44ba-8711-423947dc16e8.mp3', title: '	第四部22：火烧盘丝洞 - 八戒遭殃' },
      { id: '104	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/add13c36-2c44-4175-82f9-b09cee436620.mp3', title: '	第四部23：黄花观投毒 - 五彩大蜘蛛' },
      { id: '105	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f762ebf6-3af9-408b-b5f0-851342f898a3.mp3', title: '	第四部24：一枚绣花针 - 师徒得救' },
      { id: '106	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/e962053f-00a7-4014-b116-d5c00b5a5cf1.mp3', title: '	第五部01：狮驼岭上狮驼洞 - 长庚传信' },
      { id: '107	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/8bd88a30-debd-443b-ab95-c56e0d7b84cd.mp3', title: '	第五部23：野牛大阵 - 奇门兵器疙瘩藤' },
      { id: '108	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/695b1a82-8750-4156-ae10-c065f569cf99.mp3', title: '	第五部22：偷油的佛祖 - 元宵佳节关灯夜，忽见佛祖空中现' },
      { id: '109	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/47156ab7-fe66-4da4-9ddc-ecf2220bb27f.mp3', title: '	第五部21：妙严宫里的狮奴 - 轮回琼液惹得祸' },
      { id: '110	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1593e3cc-8552-4f82-8243-dfb86b117556.mp3', title: '	第五部20：三圣斗七师 - 激战玉华州' },
      { id: '111	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/e713d3fe-2297-4f2a-ad7b-ec6184af0d73.mp3', title: '	第五部19：九灵元圣 - 九头狮子怪' },
      { id: '112	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6f82d37c-c8ee-4ea4-8f2c-c53868b96847.mp3', title: '	第五部18：偷兵器的贼 - 钉耙宴会' },
      { id: '113	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5bcf1fa0-2814-45ca-9408-0538b20ad382.mp3', title: '	第五部17：圆梦 - 收了三个徒弟' },
      { id: '114	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0eb0eaa7-e737-42a7-b3c4-a21addf3fab2.mp3', title: '	第五部16：混入玉华州 - 痛恨和尚的国王' },
      { id: '115	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/258d8839-8d64-4485-9bbf-f56644b7106e.mp3', title: '	第五部15：地涌夫人 - 哪吒的妹妹' },
      { id: '116	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/de229baa-ad4f-4bbf-9521-968d73332b57.mp3', title: '	第五部14：故技重施 - 肚子里有人了' },
      { id: '117	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c7933994-2fa6-43ae-9bc2-f1f5e2888993.mp3', title: '	第五部13：陷空山下无底洞 - 别有洞天' },
      { id: '118	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/a2c29519-cd0b-42fc-bdfa-2f75035aff66.mp3', title: '	第五部12：六个和尚 - 引蛇出洞' },
      { id: '119	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/625349aa-5c6a-4d08-89bd-d913c6a79e95.mp3', title: '	第五部11：密林深处 - 搭救女妖精' },
      { id: '120	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/d6e6ff50-01db-44e9-bbfd-caa49e2e69a8.mp3', title: '	第五部08：小儿国 - 装着小孩儿的鹅笼' },
      { id: '121	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/2175849f-bde3-46f9-a562-cadadf9fba78.mp3', title: '	第五部10：南极仙翁 - 寿星的坐骑' },
      { id: '122	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/e792235a-f5ac-4442-a95f-b0679a9725c2.mp3', title: '	第五部06：唐僧肉的吃法 - 唐僧的死讯' },
      { id: '123	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4ff645ef-ee1f-40ca-b175-7ff0802179cd.mp3', title: '	第五部09：唐僧的心 - 多心的和尚' },
      { id: '124	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/0a51ec6b-32ab-44f5-9565-bad7486cf96d.mp3', title: '	第五部07：如来的舅舅 - 灵山求救' },
      { id: '125	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c54da7e8-95a3-4b8a-bc61-adcab84c7b9b.mp3', title: '	第五部05：十面埋伏 - 狮驼城中计' },
      { id: '126	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/4603a435-f0f1-484a-9d83-c5cd40c9cf5e.mp3', title: '	第五部04：狮子一声吼 - 钻入狮腹' },
      { id: '127	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/1438eb5f-f4b6-4e86-9182-642452a20aa4.mp3', title: '	第五部03：阴阳二气瓶 - 救命毫毛' },
      { id: '128	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/ebbaa2fd-c8eb-4bbb-9443-7ce607255c31.mp3', title: '	第五部02：三寸之舌 - 劝退妖兵' },
      { id: '129	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/5e029648-cbf0-4e0a-9b93-28a694ec77fe.mp3', title: '	第五部32：西游记感言 - 凯叔和你聊聊天' },
      { id: '130	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f731f5e1-ac1c-4320-8568-2973bfcd80d9.mp3', title: '	第五部31：五圣成真 - 功德圆满，封佛归位' },
      { id: '131	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/aacd2709-96da-4cf2-8192-306f3cd0616f.mp3', title: '	第五部30：无字真经 - 索要“人事”的罗汉' },
      { id: '132	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/c57f14bb-dcc5-4243-a05c-fa125132936d.mp3', title: '	第五部29：抛却皮囊 - 云路和心路' },
      { id: '133	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/6be2c835-7b69-4ea3-a357-dd40d60eb267.mp3', title: '	第五部28：殿上识妖 - 猪八戒的故人' },
      { id: '134	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/496cb3cd-6474-462e-97a9-655d71724ad1.mp3', title: '	第五部27：布金寺的哭声 - 大风吹来的公主' },
      { id: '135	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/a27b6964-0fdc-4626-8268-dc0027cef8e2.mp3', title: '	第五部26：火烧葫芦谷 - 不会降妖的厨子不是好神仙' },
      { id: '136	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/2fb3c7c9-5458-4e75-b2d3-f9f68ba291b0.mp3', title: '	第五部25：庖丁解牛 - 游刃有余' },
      { id: '137	', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/18bb46ac-aa3d-4975-85af-9695e5c1179f.mp3', title: '	第五部24：一碗白菜汤 - 厨神的拿手菜' },
      { id: '138', audiourl: 'https://cdn.kaishuhezi.com/kstory/story/audio/f2134083-c01e-4911-981a-ddde84b9be79.mp3',	title: '凯叔西游记：经典重现！ - 听西游记，做自己的取经人'},    
      
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

  },
  



})