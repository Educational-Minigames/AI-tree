import { Box, Stack, Typography } from "@mui/material";
import { Step } from "components/classes/Step";
import Image from "next/image";
import PlayGameButton from "components/molecules/PlayGameButton";
import MLImage from 'assets/ml-image.png';
import CVImage from 'assets/computer-vision-image.png';
import NLPImage from 'assets/natural-lanquage-processing-image.png';
import ODImage from 'assets/object-detection-image.png';
import MTImage from 'assets/machine-translation-image.png';
import SAImage from 'assets/sentiment-analysis-image.png';
import NNImage from 'assets/neural-network-image.png';
import SLImage from 'assets/supervised-learning-image.png';
import ClassificationImage from 'assets/classification-image.png';
import RSImage from 'assets/recommendation-system-image.png';
import ULImage from 'assets/unsupervised-learning-image.png';
import ClusteringImage from 'assets/clustering-image.png';
import RLImage from 'assets/reinforcement-learning-image.png';
import CNNImage from 'assets/convolutional-neural-network.png';

const OverallView = new Step({
  id: "OverallView",
  x: 0,
  y: 0,
  scale: 10,
  children: <></>,
  nextStep: 'ArtificalInteligence',
})

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
  ],
  previousStep: 'SentimentAnalysis',
  nextStep: 'MachineLearning',
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
    { x: 640, y: 780, rotate: 114, length: 400 },
    { x: 1130, y: 260, rotate: 50, length: 1000 },
    { x: 1030, y: 80, rotate: -60, length: 1200 },
    { x: 650, y: 75, rotate: -133, length: 1050 },
  ],
  previousStep: 'ArtificalInteligence',
  nextStep: 'SupervisedLearning',
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
  ],
  previousStep: 'ConvolutionalNeuralNetwork',
  nextStep: 'ObjectDetection',
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
    { x: 150, y: 200, rotate: -160, length: 600 },
    { x: 150, y: 240, rotate: 150, length: 700 },
  ],
  previousStep: 'ObjectDetection',
  nextStep: 'MachineTranslation',
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
  links: [],
  previousStep: 'ComputerVision',
  nextStep: 'NaturalLanguageProcessing',
});

const MachineTranslation = new Step({
  parent: NaturalLanguageProcessing,
  id: "MachineTranslation",
  x: -3660,
  y: -740,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'ترجمه ماشینی'}</Typography>
      <Typography variant="h5" gutterBottom>{'Machine Translation'}</Typography>
      <Typography width={600}>
        ترجمه‌ی ماشینی به فرایند ترجمه‌ی یک متن به کمک نرم‌افزار گفته می‌شود. این فرایند در گذشته بر اساس قواعد دست‌نوشته  انجام می‌شد و دقت پایینی داشت. سپس روش‌های آماری رونق گرفتند که با یادگیری از متن‌هایی در هر دو زبان مبدا و مقصد، یک ترجمه‌ی احتمالی برای عبارت ورودی تولید می‌کردند. در سال‌های اخیر روش‌های مبتنی بر شبکه‌های عصبی، به دلیل توانایی بهتر در یادگیری الگوهای پیچیده و ترجمه‌های بهتر، از همه‌ی روش‌ها پیشی گرفته‌اند.
      </Typography>
      <Box width={600} alignSelf={'start'}>
        <Image width={0} height={0} src={MTImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [],
  previousStep: 'NaturalLanguageProcessing',
  nextStep: 'SentimentAnalysis'
});

const SentimentAnalysis = new Step({
  parent: NaturalLanguageProcessing,
  id: "SentimentAnalysis",
  x: -3660,
  y: 940,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'تحلیل احساسات'}</Typography>
      <Typography variant="h5" gutterBottom>{'Sentiment Analysis'}</Typography>
      <Typography width={600}>
        تحلیل احساسات یک شاخه‌ی پرکاربرد در حوزه‌ی پردازش زبان طبیعی است که هدف آن تشخیص احساسات موجود در متن و بیان آن‌ها در قالب مقادیر عددی است. از مهم‌ترین کاربردهای این شاخه، تحلیل بازخورد مشتری‌ها در کسب‌وکارهای آنلاین است؛ برای مثال در دیجی‌کالا روزانه هزاران نظر مختلف برای کالاهای گوناگون ثبت می‌شود که بررسی تک‌تک آن‌ها کار زمان‌بری است. به کمک تحلیل احساسات، به طور خودکار نظرات مفید از  غیر مفید جدا می‌شوند و فرآیند بررسی،  سرعت بالایی پیدا می‌کند.
      </Typography>
      <Box width={700} alignSelf={'start'}>
        <Image width={0} height={0} src={SAImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [],
  previousStep: 'NaturalLanguageProcessing',
  nextStep: 'ArtificalInteligence'
});

const SupervisedLearning = new Step({
  parent: MachineLearning,
  id: "SupervisedLearning",
  x: -1190,
  y: 2430,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'یادگیری بانظارت'}</Typography>
      <Typography variant="h5" gutterBottom>{'Supervised Learning'}</Typography>
      <Typography width={900}>
        یادگیری بانظارت یک الگوی پرکاربرد در یادگیری ماشین است که از داده‌های دارای ویژگی هدف یا برچسب استفاده می‌کند. هدف یادگیری بانظارت، ساخت مدلی است که با بررسی ویژگی‌های مختلف یک داده، برچسب آن را پیش‌بینی کند. برای مثال در مسئله‌ی تشخیص هرزنامه، متن نامه‌های الکترونیک به دو دسته‌ی هرزنامه و غیرهرزنامه تقسیم شده‌اند و برچسب مشخصی دارند. با وجود این برچسب‌ها مشاهده‌ی روند یادگیری و کاهش خطای پیش‌بینی امکان‌پذیر است.
      </Typography>
      <Box width={700} alignSelf={'start'} pl={13} mt={2}>
        <Image width={0} height={0} src={SLImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [
    { x: 150, y: 200, rotate: -180, length: 900 },
    { x: 150, y: 240, rotate: 150, length: 1040 },
  ],
  previousStep: 'MachineLearning',
  nextStep: 'Classification'
});

const Classification = new Step({
  parent: SupervisedLearning,
  id: "Classification",
  x: -2950,
  y: -130,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'طبقه‌بندی'}</Typography>
      <Typography variant="h5" gutterBottom>{'Classification'}</Typography>
      <Typography width={600}>
        یکی از کاربردهای مهمِ یادگیری بانظارت، طبقه‌بندی داده‌ها در قالب دسته‌های از پیش تعیین‌شده است. به طور مثال از طریق این روش می‌توان هرزنامه بودن یا نبودنِ ایمیل‌ها را تشخیص داد، یا تعیین کرد که بازخورد نوشتاری یک مشتری نسبت به یک محصول مثبت، منفی یا خنثی بوده است. کامپیوتر با یادگیری الگو‌های مربوط به داده‌های هر طبقه، قادر خواهد بود طبقه‌ی نمونه‌هایی را نیز پیش‌بینی کند که تاکنون با آن‌ها روبرو نشده بوده است.
      </Typography>
      <Stack width={'100%'} direction='row' alignItems={'center'} justifyContent={'space-between'}>
        <Box width={700} alignSelf={'start'} mt={2}>
          <Image width={0} height={0} src={ClassificationImage} alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Box mr={-6}>
          <PlayGameButton gameLink={'https://teachable-machine.darkube.app/'} />
        </Box>
      </Stack>
    </Stack>,
  links: [],
  previousStep: 'SupervisedLearning',
  nextStep: 'RecommendationSystem'
});

const RecommendationSystem = new Step({
  parent: SupervisedLearning,
  id: "RecommendationSystem",
  x: -2950,
  y: 900,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'سیستم پیشنهادگر'}</Typography>
      <Stack direction={'row'} spacing={6}>
        <Box width={500} alignSelf={'start'}>
          <Image width={0} height={0} src={RSImage} alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Stack>
          <Typography variant="h5" gutterBottom>{'Recommendation System'}</Typography>
          <Typography width={600}>
            سیستم‌های پیشنهادگر سعی می‌کنند با تحلیل سلیقه و تاریخچه‌ی رفتار شما، مناسب‌ترین اقلام (کالا، موسیقی، فیلم و غیره) را به شما پیشنهاد دهند. یک گام مهم در این سیستم‌ها «تشخیص شباهت» میان سلیقه‌ی کاربران مختلف و همچنین میان اقلام مختلف است، که الگوریتم‌های یادگیری ماشین عملکرد خوبی در آن دارند. یک نمونه‌ی خوب از پیاده‌سازی این الگوریتم‌ها، دیجی‌کالا است؛ صفحه اصلی با توجه به تاریخچه‌ی خریدها و تعاملات شما شخصی‌سازی شده و کالاهای مشابهی به شما پیشنهاد می‌شوند. همچنین در صفحه‌ی مخصوص هر کالا، دیگر کالاهای مشابه از نظر تصویری و یا متنی، قابل مشاهده هستند.
          </Typography>
          <Typography width={600}>
            تصویر مقابل دو نوع اصلی سیستم‌های پیشنهادگر را نشان می‌دهد. در نوع اول، یعنی «پالایش مشارکتی»، افراد هم‌سلیقه با شما، به‌وسیله‌ی بررسی تاریخچه‌‌ی شما پیدا می‌شوند، سپس کالاهایی که افراد هم‌سلیقه با شما خریده‌اند به شما پیشنهاد می‌شود. در نوع دوم، یعنی «پالایش محتوایی»، با توجه به ویژگی‌های ظاهری و مشخصات کالاها، کالاهای مشابهِ اقلام خریداری‌شده‌ی‌ قبلی کاربر، مشخص شده و همراه با کالای اصلی مشخص‌شده‌ی کاربر به او نمایش داده می‌شوند.
          </Typography>
        </Stack>
      </Stack>
    </Stack>,
  links: [],
  previousStep: 'Classification',
  nextStep: 'UnsupervisedLearning'
});

const UnsupervisedLearning = new Step({
  parent: MachineLearning,
  id: "UnsupervisedLearning",
  x: 3840,
  y: 1960,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'یادگیری بدون نظارت'}</Typography>
      <Typography variant="h5" gutterBottom>{'Unsupervised Learning'}</Typography>
      <Typography width={900}>
        در الگوی یادگیری بدون نظارت، از داده‌هایی استفاده می‌شود که دارای ویژگی هدف یا برچسب مشخصی نیستند. اکثر داده‌های موجود در جهان چنین شکلی دارند. هدف این الگو به جای پیش‌بینی در مورد هر داده، استخراج اطلاعات و الگوهای مخفی موجود در داده‌هاست. این الگوها و اطلاعات به تحلیل‌گران در تصمیم‌گیری و ساخت مدل‌ها بسیار کمک می‌کنند. دو مسئله‌ی مهم در یادگیری بدون نظارت، خوشه‌بندی و کاهش ابعاد است.
      </Typography>
      <Box width={700} alignSelf={'start'} pl={13} mt={2}>
        <Image width={0} height={0} src={ULImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [
    { x: 190, y: 240, rotate: 130, length: 1040 },
  ],
  previousStep: 'RecommendationSystem',
  nextStep: 'Clustering'
});

const Clustering = new Step({
  parent: UnsupervisedLearning,
  id: "Clustering",
  x: -2440,
  y: 1400,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'خوشه‌بندی'}</Typography>
      <Typography variant="h5" gutterBottom>{'Clustering'}</Typography>
      <Typography width={600}>
        خوشه‌بندی یکی از کاربردهای یادگیری بدون نظارت است که داده‌ها را به دسته‌ها یا خوشه‌های مختلفی تقسیم می‌کند، به طوری که داده‌های موجود در یک خوشه، مشابه همدیگر باشند. برای مثال در ویرایش یک تصویر، پیکسل‌ها به خوشه‌هایی دارای بافت و رنگ یکسان تقسیم می‌شوند. یا مثلا در دیجی‌کالا، به زودی کاربران بر اساس تاریخچه‌ی خرید و تعاملات‌شان خوشه‌بندی خواهند شد تا تجربه‌ی خرید بهتری داشته باشند. در بعضی از الگوریتم‌های خوشه‌بندی تعداد خوشه‌ها از پیش مشخص می‌شود و در بعضی الگوریتم‌ها تعداد خوشه‌ها توسط کامپیوتر تشخیص داده می‌شود.
      </Typography>
      <Box width={700} alignSelf={'start'} pl={4}>
        <Image width={0} height={0} src={ClusteringImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [],
  previousStep: 'UnsupervisedLearning',
  nextStep: 'ReinforcementLearning'
});

const ReinforcementLearning = new Step({
  parent: MachineLearning,
  id: "ReinforcementLearning",
  x: 3050,
  y: -3200,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'یادگیری تقویتی'}</Typography>
      <Typography variant="h5" gutterBottom>{'Reinforcement Learning'}</Typography>
      <Typography width={600}>
        خوشه‌بندی یکی از کاربردهای یادگیری بدون نظارت است که داده‌ها را به دسته‌ها یا خوشه‌های مختلفی تقسیم می‌کند، به طوری که داده‌های موجود در یک خوشه، مشابه همدیگر باشند. برای مثال در ویرایش یک تصویر، پیکسل‌ها به خوشه‌هایی دارای بافت و رنگ یکسان تقسیم می‌شوند. یا مثلا در دیجی‌کالا، به زودی کاربران بر اساس تاریخچه‌ی خرید و تعاملات‌شان خوشه‌بندی خواهند شد تا تجربه‌ی خرید بهتری داشته باشند. در بعضی از الگوریتم‌های خوشه‌بندی تعداد خوشه‌ها از پیش مشخص می‌شود و در بعضی الگوریتم‌ها تعداد خوشه‌ها توسط کامپیوتر تشخیص داده می‌شود.
      </Typography>
      <Box width={600} alignSelf={'start'} pl={36} mt={4}>
        <Image width={0} height={0} src={RLImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [],
  previousStep: 'Clustering',
  nextStep: 'NeuralNetwork'
});

const NeuralNetwork = new Step({
  parent: MachineLearning,
  id: "NeuralNetwork",
  x: -2660,
  y: -2700,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'شبکه عصبی'}</Typography>
      <Stack direction={'row'} spacing={6}>
        <Box width={600} alignSelf={'start'}>
          <Image width={0} height={0} src={NNImage} alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Stack alignItems={'end'}>
          <Typography variant="h5" gutterBottom>{'Neural Network'}</Typography>
          <Typography width={600}>
            شبکه‌ی عصبی مصنوعی مدلی از یادگیری ماشین با الهام از ساختار مغز است. بین نورون‌های مغز انسان اتصالات پیچیده‌ای وجود دارد که امکان ذخیره‌سازی و پردازش اطلاعات را فراهم می‌کنند. به همین ترتیب در مدل شبکه‌ی عصبی نیز ساختاری پیچیده وجود دارد که از واحدهایی با نام مشابه تشکیل شده است و قدرت محاسباتی و یادگیری بالایی را به وجود می‌آورد. در شبکه‌های عصبی، اطلاعات به صورت ساختارمند از نورون‌های ورودی به نورون‌های خروجی جریان می‌یابد و طی این فرآیند، پردازش و تفسیر این اطلاعات صورت می‌پذیرد. فرایند یادگیری در این شبکه‌ها با تقویت یا تضعیفِ اتصالات بین دو نورون رخ می‌دهد. قدرت و کارایی این مدل به حدی بالا است که یکی از بهترین راه‌حل‌ها برای طیف گسترده‌ای از مسائل محسوب می‌شود. مسائلی مانند تشخیص محتوای یک تصویر،  تبدیل گفتار به متن، خواندن اعداد دست‌نوشته و دیگر مسائل پیچیده از جمله‌ی آن‌ها هستند.
          </Typography>
          <Box mr={-2} mt={2}>
            <PlayGameButton gameLink={'https://neural-network-playground.darkube.app/#activation=sigmoid&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.15&regularizationRate=0&noise=0&networkShape=3,1&seed=0.95066&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false&showTestData_hide=true&activation_hide=true&noise_hide=true&resetButton_hide=false&regularization_hide=true&dataset_hide=false&playButton_hide=false&learningRate_hide=true&regularizationRate_hide=true&percTrainData_hide=true&discretize_hide=true&batchSize_hide=true&stepButton_hide=false&problem_hide=true/'} />
          </Box>
        </Stack>
      </Stack>
    </Stack>,
  links: [
    { x: 550, y: 220, rotate: -150, length: 2300 },
  ],
  previousStep: 'ReinforcementLearning',
  nextStep: 'ConvolutionalNeuralNetwork'
});

const ConvolutionalNeuralNetwork = new Step({
  parent: NeuralNetwork,
  id: "ConvolutionalNeuralNetwork",
  x: -4150,
  y: -2150,
  scale: 0.66,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'شبکه عصبیِ پیچشی'}</Typography>
      <Typography variant="h5" gutterBottom>{'Sentiment Analysis'}</Typography>
      <Typography width={600}>
        شبکه‌های عصبیِ پیچشی یکی از قوی‌ترین ابزارها برای پردازش تصویر و تشخیص الگو هستند. این شبکه‌ها یاد می‌گیرند با اِعمال فیلترهای مختلف، ابتدا ویژگی‌هایی ساده مثل لبه‌ها و بافت را از تصویر استخراج کنند. سپس در لایه‌های بالاتر، از این ویژگی‌ها برای کارهای پیچیده‌تری مثل شناسایی اشیا و حتی تولید تصاویر جدید استفاده کنند. این شبکه‌ها نقشی اساسی در موفقیت فناوری‌هایی همچون تشخیص چهره و ماشین‌های خودران داشته اند.
      </Typography>
      <Box width={700} alignSelf={'start'}>
        <Image width={0} height={0} src={CNNImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Stack>,
  links: [
    { x: 200, y: 780, rotate: 107, length: 1900 },
  ],
  previousStep: 'NeuralNetwork',
  nextStep: 'ComputerVision',
});

export default [
  OverallView,
  ArtificalInteligence,
  MachineLearning,
  ComputerVision,
  ObjectDetection,
  NaturalLanguageProcessing,
  MachineTranslation,
  SentimentAnalysis,
  SupervisedLearning,
  Classification,
  RecommendationSystem,
  UnsupervisedLearning,
  Clustering,
  ReinforcementLearning,
  NeuralNetwork,
  ConvolutionalNeuralNetwork,
];
