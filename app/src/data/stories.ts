export interface Story {
  id: string;
  title: string;
  cover: string;
  voice: string;
  text: string;
  summary: string;
  tags: string[];
  characters: string[];
}

export const stories: Story[] = [
  {
    id: "story_01",
    title: "学校秘密房间今晚通向哪里？",
    cover: "/stories/story_01/cover.png",
    voice: "/stories/story_01/voice.mp3",
    text: "/stories/story_01/story.md",
    summary: "学校秘密房间今晚通向了变形金刚的故乡——塞伯坦。打屁巫师正在那里建造臭名昭著的'永恒之屁反应堆'，善良公主、海蓝公主和大黄蜂必须阻止他。",
    tags: ["冒险", "科幻"],
    characters: ["善良公主", "海蓝公主", "大黄蜂", "打屁巫师", "小花公主"],
  },
  {
    id: "story_02",
    title: "这座工厂什么东西都是巧克力做的——包括那个活过来的雕像",
    cover: "/stories/story_02/cover.png",
    voice: "/stories/story_02/voice.mp3",
    text: "/stories/story_02/story.md",
    summary: "学校秘密房间通向了一座1887年的古老巧克力工厂。米开朗基罗因贪吃被困在这里，墙壁和雕像都是巧克力做的——而那些雕像，曾经是活生生的访客。",
    tags: ["悬疑", "恐怖", "搞笑"],
    characters: ["善良公主", "海蓝公主", "米开朗基罗", "打屁巫师", "小花公主"],
  },
  {
    id: "story_03",
    title: "地板里伸出来的东西抓住了我的脚踝",
    cover: "/stories/story_03/cover.png",
    voice: "/stories/story_03/voice.mp3",
    text: "/stories/story_03/story.md",
    summary: "学校秘密房间今晚漆黑一片。影子怪物从地板里爬出来，颠倒的脸、蜘蛛般的手指、融化的黑色身体——但最可怕的真相是：它们只是葡萄味果冻和美术课得C的手工纸片。",
    tags: ["恐怖", "搞笑"],
    characters: ["善良公主", "海蓝公主", "米开朗基罗", "小花公主"],
  },
  {
    id: "story_04",
    title: "今晚，学校和波普之星叠在了一起",
    cover: "/stories/story_04/cover.png",
    voice: "/stories/story_04/voice.mp3",
    text: "/stories/story_04/story.md",
    summary: "学校秘密房间今晚变成了波普之星的一部分。打屁巫师的重叠仪正在把学校和梦境世界合并成同一个地方，操场滑梯会通向帝帝帝大王的城堡。善良公主和海蓝公主必须找到机器核心，用白菜棋子和贝壳项链把两个世界撕开。",
    tags: ["冒险", "科幻"],
    characters: ["善良公主", "海蓝公主", "头巾瓦豆鲁迪", "魅塔骑士", "打屁巫师"],
  },
  {
    id: "story_05",
    title: "森林里，树在发光，蘑菇在唱歌",
    cover: "/stories/story_05/cover.png",
    voice: "/stories/story_05/voice.mp3",
    text: "/stories/story_05/story.md",
    summary: "学校秘密房间今晚变成了一棵松树的横截面。善良公主和海蓝公主钻进去，发现熊出没的森林正在和小马谷搅拌在一起——松树上长满了会唱歌的彩虹蘑菇。紫悦公主的魔法失控了，光头强的锯子锯不动长糖果的树，熊大熊二吃蘑菇吃到卡在蘑菇堆里。",
    tags: ["冒险", "搞笑", "魔法"],
    characters: ["善良公主", "海蓝公主", "紫悦公主", "光头强", "熊大", "熊二", "打屁巫师"],
  },
  {
    id: "story_06",
    title: "卡比的肚子是黑洞",
    cover: "/stories/story_06/cover.png",
    voice: "/stories/story_06/voice.mp3",
    text: "/stories/story_06/story.md",
    summary: "学校杂物间今晚冒出一根绿色管道。善良公主和海蓝公主钻进去，发现忍者神龟的下水道和星之卡比的噗噗噗之国被揉在了一起——水泥墙挨着粉红软糖壁，彩虹黏液从天花板滴下来。米开朗基罗追披萨追迷路了，哆啦A梦的百宝袋正在漏光，卡比吞了复原药水，他的胃是黑洞。",
    tags: ["冒险", "科幻", "搞笑"],
    characters: ["善良公主", "海蓝公主", "哆啦A梦", "星之卡比", "米开朗基罗"],
  },
  {
    id: "story_07",
    title: "泥坑正在吃掉学校操场",
    cover: "/stories/story_07/cover.png",
    voice: "/stories/story_07/voice.mp3",
    text: "/stories/story_07/story.md",
    summary: "学校操场今晚变成了一个正在扩大的泥坑。升旗台在下沉，乔治被困在上面。卡皮巴拉蹲在泥坑边泡澡，表情平静得像一座山。善良公主趴在它背上潜入泥坑底部——这只棕色毛绒玩具密度大到能当潜水艇。泥坑底部藏着打屁巫师的泥坑扩大仪。",
    tags: ["冒险", "搞笑"],
    characters: ["善良公主", "海蓝公主", "小猪佩奇", "卡皮巴拉"],
  },
  {
    id: "story_08",
    title: "恐龙长出了尖牙，吸血鬼长出了尾巴",
    cover: "/stories/story_08/cover.png",
    voice: "/stories/story_08/voice.mp3",
    text: "/stories/story_08/story.md",
    summary: "秘密房间今晚变成了通往侏罗纪丛林和德古拉城堡的地下世界。打屁巫师的跨纪元生物融合仪把霸王龙和吸血鬼亲王搅拌在一起，创造出德古拉斯龙。机器失控后，打屁巫师被反噬，生命力被机器抽空，脸变成纸白色。善良公主用泥球倒灌生命力，海蓝公主用贝壳项链净化毒素，救了他一命。",
    tags: ["冒险", "恐怖", "感人"],
    characters: ["善良公主", "海蓝公主", "大雄", "打屁巫师"],
  },
  {
    id: "story_09",
    title: "软曲棍球在天上飞",
    cover: "/stories/story_09/cover.png",
    voice: "/stories/story_09/voice.mp3",
    text: "/stories/story_09/story.md",
    summary: "学校体育馆举办全校软曲棍球争霸赛。善良公主夹着球杆像用筷子，胖虎像坦克一样横冲直撞，小夫三百块的金色球杆被磁力吸到了天花板。打屁巫师穿着雨衣藏在观众席，用七个旋钮的机器操控风向和重力作弊。小啾停在横梁上，用猫头鹰视力发现了猫腻。",
    tags: ["搞笑", "体育"],
    characters: ["善良公主", "海蓝公主", "小啾", "胖虎", "小夫", "打屁巫师"],
  },
  {
    id: "story_10",
    title: "泥潭里爬出来的东西",
    cover: "/stories/story_10/cover.png",
    voice: "/stories/story_10/voice.mp3",
    text: "/stories/story_10/story.md",
    summary: "学校永久泥潭冒出了奇怪的泡泡。七个僵尸从泥潭里爬出来，额头嵌着绿色晶体。卡皮巴拉当肉盾挡住僵尸，小圆穿梭引开注意力，小啾用橙嘴啄碎能量晶体，豌豆射手从裂缝中掉下来帮忙。善良公主潜入泥潭底部，用白菜棋子和彩虹石子关闭了召唤仪。",
    tags: ["冒险", "战斗"],
    characters: ["善良公主", "海蓝公主", "卡皮巴拉", "小圆", "小啾", "豌豆射手", "打屁巫师"],
  },
  {
    id: "story_11",
    title: "学校里，东西正在一天天变小",
    cover: "/stories/story_11/cover.png",
    voice: "/stories/story_11/voice.mp3",
    text: "/stories/story_11/story.md",
    summary: "学校里的东西正在悄悄变小——灭火器只有一半大了，挂钟的数字被人挖走，花盆里的土凭空少了大半。秘密房间的地面出现了一个激光切割的洞。洞底下是天才威的实验室，他用缩小射线仪把全校物资当商品缩小贩卖。一只比芝麻还小的玩具熊猫逃出了他的实验台，爬过瓷砖裂缝来求援。打屁巫师发现有人侵占了'他的地盘'，勃然大怒，第一次站到了公主们这边。",
    tags: ["冒险", "科幻", "搞笑"],
    characters: ["善良公主", "海蓝公主", "小熊熊错误", "打屁巫师", "天才威", "洞洞幺"],
  },
];
