import { Box, Stack, Typography } from "@mui/material";
import { Step } from "components/classes/Step";
import Image from "next/image";
import PlayGameButton from "components/molecules/PlayGameButton";
import MLImage from 'assets/ml-image.png';
import CVImage from 'assets/computer-vision-image.png';
import NLPImage from 'assets/natural-lanquage-processing-image.png';
import ODImage from 'assets/object-detection-image.png';

const ArtificalInteligence = new Step({
  id: "ArtificalInteligence",
  x: 0,
  y: 0,
  scale: 4,
  children:
    <Stack alignItems={'center'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h1" gutterBottom>{'هوش مصنوعی'}</Typography>
      <Stack alignItems={'end'}>
        <Typography variant="h5" justifyItems={'start'} gutterBottom>{'Artificial Inteligence'}</Typography>
        <Typography width={660}>
          هوش مصنوعی از اواسط قرن بیستم مورد توجه جدی دانشمندان و سرمایه‌گذاران قرار گرفت؛ اما نتایجِ به دست آمده از تحقیقات و پژوهش‌های کلان، با پیش‌بینی‌های خوش‌بینانه و انتظارات فزاینده‌ی آنان فاصله‌ی زیادی داشت. این شکست، سرانجام پس از مدت کوتاهی و در اواخر قرن بیستم منجر به فروپاشی صنایع وابسته و قطع بودجه‌های پژوهشی در این حوزه شد. این شرایط که حدود سه دهه ادامه داشت بعدها به زمستان هوش مصنوعی مشهور شد. آنچه در درخت هوش مصنوعی می‌بینید مروری بر ابداعات و ابتکاراتی ا‌ست که در قرن بیست و یکم، هوش مصنوعی را از  زمستان خود به بهاری  پربار  رسانده است.
        </Typography>
      </Stack>
    </Stack>,
  links: [
    { x: 930, y: 330, rotate: 0, length: 630 },
    { x: 200, y: 290, rotate: -140, length: 480 },
    { x: 190, y: 600, rotate: 120, length: 400 },
  ]
})

const MachineLearning = new Step({
  parent: ArtificalInteligence,
  id: "MachineLearning",
  x: 4600,
  y: 240,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'یادگیری ماشین'}</Typography>
      <Typography variant="h5" gutterBottom>{'Machine Learning'}</Typography>
      <Typography width={700}>
        یادگیری ماشین مجموعه‌ای از روش‌های گوناگون است که کامپیوترها را قادر می‌سازد از داده‌ها بیاموزند و بر اساس آموخته‌هایشان تصمیم بگیرند. این آموخته‌ها شامل الگوها و روابط پیچیده‌ای است که در حجم انبوهی از داده‌ها وجود دارند، ولی به وضوح قابل‌تشخیص نیستند.کامپیوترها قادر خواهند بود بدون دخالت انسان این الگوها را یاد بگیرند و از آن‌ها برای حل مسائلی استفاده کنند که تا به حال با آنها مواجه نشده اند. کامپیوتر در واقع با پردازش داده‌ها، به یک بازنمایی یا مدل از آن‌ها دست می‌یابد.
      </Typography>
      <Typography width={700}>
        محصولات مبتنی بر این مدل‌ها را در همه جا می‌توان مشاهده کرد؛ از سیستم‌های پیشنهاددهنده‌ی فیلم و موسیقی گرفته تا دوربین‌های خوانش پلاک ماشین، نرم‌افزار تبدیل متن به صوت و عامل هوشمند تشخیص سرطان.
      </Typography>
      <Box mt={6} width={800} alignSelf={'start'}>
        <Image
          width={0} height={0} src={MLImage} alt=""
          style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [
    // { x: 650, y: 520, rotate: 90, length: 400 }
  ]
});

const ComputerVision = new Step({
  parent: ArtificalInteligence,
  id: "ComputerVision",
  x: -4000,
  y: -1300,
  scale: 0.66,
  children:
    <Stack alignItems={'center'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Stack width={700}>
        <Typography variant="h2" gutterBottom>{'بینایی ماشین'}</Typography>
        <Typography variant="h5" gutterBottom>{'Computer Vision'}</Typography>
        <Typography>
          یک تصویر دیجیتال از دید کامپیوتر، صرفا شامل مقادیر عددی رنگ پیکسل‌ها است. بینایی ماشین شاخه‌ای است که به کامپیوتر اجازه می‌دهد درک عمیق‌تری از این اعداد پیدا کند و اطلاعاتی مانند اشیای درونِ تصویر را استخراج کند؛ برای مثال در دیجی‌کالا، کاربران به زودی خواهند توانست با ارسال یک تصویر، کالاهای مشابه آن را از میان هزاران کالا پیدا کنند. شبکه‌های عصبی عمیق در پیشرفت این حوزه نقش به‌سزایی داشته‌اند. با این حال به علت نیاز به داده‌های زیاد در این شاخه، فراهم کردن میلیون‌ها تصویر با برچسب مناسب، همواره یک چالش بزرگ بوده است.
        </Typography>
      </Stack>
      <Stack mt={4} width={700} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Image width={0} height={0} src={CVImage} style={{ width: 600, height: 'auto' }} alt="" />
        <Box mr={-20}>
          <PlayGameButton gameLink={'https://quick-draw.darkube.app/'} />
        </Box>
      </Stack>
    </Stack>,
  links: [
    { x: 360, y: 190, rotate: -160, length: 680 },
  ]
});

const NaturalLanguageProcessing = new Step({
  parent: ArtificalInteligence,
  id: "NaturalLanguageProcessing",
  x: -3400,
  y: 2650,
  scale: 0.66,
  children:
    <Stack alignItems={'center'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'پردازش زبان طبیعی'}</Typography>
      <Stack width={600} paddingLeft={15}>
        <Typography alignSelf={'end'} variant="h5" gutterBottom>{'Natural Language Processing'}</Typography>
        <Typography>
          پردازش زبان طبیعی، شاخه‌ای میان‌رشته‌ای بین هوش مصنوعی و زبان‌شناسی است. هدف آن ساخت سیستم ایده‌آلی است که زبان طبیعی انسان را با تمام پیچیدگی‌های آن درک کند و با تشخیص ساختارهای زبانی و استخراج اطلاعات مهم از متن، پاسخ مناسبی به مسائل ارائه دهد. طی هفتاد سال اخیر هسته‌ی این سیستم‌ها از مجموعه‌ی بزرگی از قواعد زبانیِ دست‌نوشته به مدل‌های یادگیری ماشین تغییر یافته‌اند.
        </Typography>
      </Stack>
      <Stack width={'100%'} direction={'row'} alignItems={'start'}>
        <Image width={0} height={0} src={NLPImage} style={{ width: 500, height: 'auto' }} alt="" />
      </Stack>
    </Stack>,
  links: [
    // { x: 650, y: 520, rotate: 90, length: 400 }
  ]
});

const ObjectDetection = new Step({
  parent: ComputerVision,
  id: "ObjectDetection",
  x: -3200,
  y: -740,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'تشخیص اشیا'}</Typography>
      <Typography variant="h5" gutterBottom>{'Object Detection'}</Typography>
      <Typography width={500}>
        تشخیص اشیا یکی از مسائل حوزه‌ی بینایی ماشین است که هدف‌ آن تشخیص و مکان‌یابی اشیای موردنظر در تصویر یا ویدیو است. مرحله‌ی اولیه‌ی این مسئله، شناسایی موقعیت و مرزهای هر یک از اشیا و سپس طبقه‌بندی آن‌ها در دسته‌های مختلف است. اکثر مدل‌های موفقِ تشخیص اشیا از شبکه‌های عصبی به خصوص شبکه‌ی عصبی پیچشی استفاده می‌کنند.
      </Typography>
      <Box width={600} alignSelf={'start'}>
        <Image width={0} height={0} src={ODImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [
    // { x: 650, y: 520, rotate: 90, length: 400 }
  ]
});

export default [
  ArtificalInteligence,
  MachineLearning,
  ComputerVision,
  NaturalLanguageProcessing,
  ObjectDetection,
];