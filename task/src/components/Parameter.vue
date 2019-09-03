<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="基本参数 - Basic parameters" name="1">
      <el-card class="box-card">
        <div v-for="a in Basic" :key="a" class="text item">
          {{a.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{a.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="屏幕 - Screen" name="2">
      <el-card class="box-card">
        <div v-for="b in Screen" :key="b" class="text item">
          {{b.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{b.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="硬件 - Hardware" name="3">
      <el-card class="box-card">
        <div v-for="c in Hardware" :key="c" class="text item">
          {{c.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{c.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="网络与连接 - Network And Connection" name="4">
      <el-card class="box-card">
        <div v-for="d in Network" :key="d" class="text item">
          {{d.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{d.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="摄像头 - Camera" name="5">
      <el-card class="box-card">
        <div v-for="e in Camera" :key="e" class="text item">
          {{e.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{e.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="外观 - Exterior" name="6">
      <el-card class="box-card">
        <div v-for="f in Exterior" :key="f" class="text item">
          {{f.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{f.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="功能与服务 - Features And Services" name="7">
      <el-card class="box-card">
        <div v-for="g in Features" :key="g" class="text item">
          {{g.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{g.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="手机附件 - Mobile Phone Accessories" name="8">
      <el-card class="box-card">
        <div v-for="h in Accessories" :key="h" class="text item">
          {{h.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{h.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="保修信息 - Warranty Information" name="9">
      <el-card class="box-card">
        <div v-for="i in Warranty" :key="i" class="text item">
          {{i.title}}
          <span style="padding: 0px 1%"></span>
          <a style="color: #7da6f3;">{{i.list}}</a>
        </div>
      </el-card>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    text-align: left;
    box-shadow: none;
    border: none;
  }
</style>

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        Basic: [
          {
            'title': '上市日期 ：',
            'list': '2019年07月02日',
          },
          {
            'title': '电商报价 ：',
            'list': '￥2599',
          },
          {
            'title': '手机类型 ：',
            'list': '4G手机 、 智能手机 、 拍照手机 、 时尚手机',
          },
          {
            'title': '屏幕类型 ：',
            'list': '水滴屏',
          },
          {
            'title': '系统内核 ：',
            'list': 'Android 9',
          },
          {
            'title': '操作系统 ：',
            'list': 'MIUI 10',
          },
          {
            'title': '拍照特色 ：',
            'list': 'AI弱光人像 、 全身动态美型 、 美图经典人像',
          },
          {
            'title': 'CPU型号 ：',
            'list': '高通 骁龙710',
          },
          {
            'title': '机身颜色 ：',
            'list': '粉色',
          },
          {
            'title': '解锁方式 ：',
            'list': '屏幕指纹识别',
          },
        ],
        Screen: [
          {
            'title': '触摸屏类型 ：',
            'list': '电容屏 、 多点触控',
          },
          {
            'title': '主屏尺寸 ：',
            'list': '6.39英寸',
          },
          {
            'title': '主屏材质 ：',
            'list': 'AMOLED',
          },
          {
            'title': '主屏分辨率 ：',
            'list': '2340x1080像素',
          },
          {
            'title': '屏幕像素密度 ：',
            'list': '403ppi',
          },
          {
            'title': '屏幕技术 ：',
            'list': '康宁大猩猩玻璃',
          },
          {
            'title': '窄边框 ：',
            'list': '3.24mm',
          },
          {
            'title': 'HDR技术 ：',
            'list': '支持',
          },
          {
            'title': '屏幕占比 ：',
            'list': '85.82%',
          },
          {
            'title': '其他屏幕参数 ：',
            'list': '支持无极色温调节，标准模式，阳光屏2.0，护眼模式，夜光屏，256阶护眼模式，德国VDE低蓝光护眼认证',
          },
        ],
        Hardware: [
          {
            'title': 'CPU频率 ：',
            'list': '2.2GHz',
          },
          {
            'title': '核心数 ：',
            'list': '八核',
          },
          {
            'title': 'GPU型号 ：',
            'list': '高通 Adreno616',
          },
          {
            'title': 'RAM容量 ：',
            'list': '8GB',
          },
          {
            'title': 'ROM容量 ：',
            'list': '256GB',
          },
          {
            'title': '电池类型 ：',
            'list': '不可拆卸式电池',
          },
          {
            'title': '电池容量 ：',
            'list': '4030mAh',
          },
          {
            'title': '电池充电 ：',
            'list': '快速快充',
          },
        ],
        Network: [
          {
            'title': '4G网络 ：',
            'list': '移动TD-LTE 、联通TD-LTE 、 联通FDD-LTE 、 电信TD-LTE 、 电信FDD-LTE',
          },
          {
            'title': '3G网络 ：',
            'list': '移动3G（TD-SCDMA 、 电信3G（CDMA2000 、 联通3G（WCDMA 、 联通2G/移动2G（GSM）',
          },
          {
            'title': '支持频段 ：',
            'list': 'GSM B2/B3/B5/B8 、 CDMA 1X/EVDO BC0 、 WCDMA B1/B2/B5/B8 、 TDS-SCDMA B34/B39 、 FDD-LTE: B1/B3/B5/B8 、 TDD-LTE: B34/B38/B39/B40/B41',
          },
          {
            'title': 'SIM卡类型 ：',
            'list': '双卡 、 Nano SIM卡',
          },
          {
            'title': 'WLAN功能 ：',
            'list': 'IEEE 802.11 a/b/g/n/ac（支持2.4G WiFi 、 支持5G WiFi 、 支持 WiFi Direct）',
          },
          {
            'title': '导航 ：',
            'list': 'GPS导航',
          },
          {
            'title': '连接与共享 ：',
            'list': 'WLAN热点',
          },
          {
            'title': '蓝牙 ：',
            'list': '支持蓝牙',
          },
          {
            'title': 'NFC ：',
            'list': '采用NFC NXP-PN80T',
          },
          {
            'title': '机身接口 ：',
            'list': '3.5mm耳机接口 、 USB Type-C接口',
          },
        ],
        Camera: [
          {
            'title': '摄像头总数 ：',
            'list': '四摄像头（后三）',
          },
          {
            'title': '后置摄像头 ：',
            'list': '4800万像素超高清摄像头+800万像素超广角摄像头+200万像素景深镜头',
          },
          {
            'title': '传感器类型 ：',
            'list': 'CMOS',
          },
          {
            'title': '闪光灯 ：',
            'list': 'LED补光灯',
          },
          {
            'title': '光圈 ：',
            'list': '后置f/1.79 、 前置f/2.0',
          },
          {
            'title': '广角 ：',
            'list': '后置118°',
          },
          {
            'title': '视频拍摄 ：',
            'list': '前置：电影画幅 、 面部美颜 、 全身美型（长腿 、 瘦身 、 头部） 、 一键清零 、 电影滤镜 ; 后置：960fps 慢动作拍摄 、 960fps AI智能配乐 、 15秒短视频录制 、 后置短视频塑形瘦身 、后置视频美颜 、EIS 视频防抖',
          },
          {
            'title': '拍照功能 ：',
            'list': '前置：经典人像：AI弱光人像，HDR，闭眼修复，风格，美颜（面部，美肌，瘦脸，额骨，下巴，3D高光，3D阴影，发际线，大眼，卧蚕，眼神光，鼻头，淡妆，头发柔顺 ; 派对模式: 前置小全景，风格，美颜（质感肌到奶油肌的变化）全身美型 ; 电影人像：背景虚化，GIF，氛围滤镜，氛围光影，电影画幅比例 ; 后置：经典人像：AI弱光人像，HDR，闭眼修复，风格，美颜（ 面部，美肌，瘦脸，额骨，下巴，3D高光，3D阴影，发际线，大眼，卧蚕，眼神光，鼻头，淡妆，头发柔顺 ; 派对模式：光绘人像，闭眼修复，风格，美颜（同经典人像） ; 电影人像：背景虚化，GIF，氛围滤镜，氛围光影，电影画幅比例，超级夜景',
          },
        ],
        Exterior: [
          {
            'title': '造型设计 ：',
            'list': '直板',
          },
          {
            'title': '手机尺寸 ：',
            'list': '156.8x74.5x8.67mm',
          },
          {
            'title': '手机重量 ：',
            'list': '179g',
          },
          {
            'title': '机身材质 ：',
            'list': '玻璃机身',
          },
        ],
        Features: [
          {
            'title': '感应器类型 ：',
            'list': '距离传感器 、 指纹识别 、 陀螺仪 、 电子罗盘 、 加速传感器 、 振动马达 、 环境光传感器',
          },
          {
            'title': '音频支持 ：',
            'list': '支持MIDI/MP3/AAC等格式',
          },
          {
            'title': '视频支持 ：',
            'list': '支持3GP/MP4等格式',
          },
          {
            'title': '图片支持 ：',
            'list': '支持JPEG/GIF等格式',
          },
          {
            'title': '多媒体技术 ：',
            'list': '内置WCD9340专业Hi-Fi codec芯片，Waves虚拟低音音效，大象声科AI降噪方案',
          },
          {
            'title': '常用功能 ：',
            'list': '秒表，计算器，电子词典，备忘录，日程表，记事本，收音机',
          },
          {
            'title': '商务功能 ：',
            'list': '飞行模式',
          },
        ],
        Accessories: [
          {
            'title': '包装清单 ：',
            'list': '手机主机 x1 、 电源适配器 x1 、 USB Type-C数据线 x1 、 高透软胶保护壳 x1 、 插针 x1 、 三包凭证 x1 、 入门指南 x1',
          },
        ],
        Warranty: [
          {
            'title': '保修政策 ：',
            'list': '全国联保，享受三包服务',
          },
          {
            'title': '质保时间 ：',
            'list': '1年',
          },
          {
            'title': '质保备注 ：',
            'list': '主机1年，电池1年，充电器1年',
          },
          {
            'title': '客服电话 ：',
            'list': '400-100-5678',
          },
          {
            'title': '电话备注 ：',
            'list': '周一至周日:8:00 - 18:00(仅收市话费)',
          },
          {
            'title': '详细内容 ：',
            'list': '自购机日起（以购机发票为准），如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！注：单独购买手机配件产品的用户，请完好保存配件外包装以及发票原件，如无法提供上述凭证的，将无法进行正常的配件保修或更换。',
          },
        ],
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    },
  }
</script>