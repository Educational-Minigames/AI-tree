import { Box, Button, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import { StepType } from "types/General";
import MLImage from 'assets/ml-image.png';
import CVImage from 'assets/computer-vision-image.png';
import Image from "next/image";
import PlayGameButton from "components/molecules/PlayGameButton";

const ArtificalInteligence: StepType = {
  id: "ArtificalInteligence",
  x: 0,
  y: 0,
  scale: 4,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h1" gutterBottom>{'هوش مصنوعی'}</Typography>
      <Typography variant="h5" gutterBottom>{'Artificial Inteligence'}</Typography>
      <Typography width={600}>
        هوش مصنوعی از اواسط قرن بیستم مورد توجه جدی دانشمندان و سرمایه‌گذاران قرار گرفت؛ اما نتایجِ به دست آمده از تحقیقات و پژوهش‌های کلان، با پیش‌بینی‌های خوش‌بینانه و انتظارات فزاینده‌ی آنان فاصله‌ی زیادی داشت. این شکست، سرانجام پس از مدت کوتاهی و در اواخر قرن بیستم منجر به فروپاشی صنایع وابسته و قطع بودجه‌های پژوهشی در این حوزه شد. این شرایط که حدود سه دهه ادامه داشت بعدها به زمستان هوش مصنوعی مشهور شد. آنچه در درخت هوش مصنوعی می‌بینید مروری بر ابداعات و ابتکاراتی ا‌ست که در قرن بیست و یکم، هوش مصنوعی را از  زمستان خود به بهاری  پربار  رسانده است.
      </Typography>
    </Stack>,
  links: [
    { x: 1100, y: 330, rotate: 0, length: 440 }
  ]
};

const MachineLearning: StepType = {
  id: "MachineLearning",
  x: 4800,
  y: 0,
  scale: 3,
  children:
    <Stack alignItems={'end'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'یادگیری ماشین'}</Typography>
      <Typography variant="h5" gutterBottom>{'Machine Learning'}</Typography>
      <Typography width={600}>
        یادگیری ماشین مجموعه‌ای از روش‌های گوناگون است که کامپیوترها را قادر می‌سازد از داده‌ها بیاموزند و بر اساس آموخته‌هایشان تصمیم بگیرند. این آموخته‌ها شامل الگوها و روابط پیچیده‌ای است که در حجم انبوهی از داده‌ها وجود دارند، ولی به وضوح قابل‌تشخیص نیستند.کامپیوترها قادر خواهند بود بدون دخالت انسان این الگوها را یاد بگیرند و از آن‌ها برای حل مسائلی استفاده کنند که تا به حال با آنها مواجه نشده اند. کامپیوتر در واقع با پردازش داده‌ها، به یک بازنمایی یا مدل از آن‌ها دست می‌یابد.
      </Typography>
      <Typography width={600}>
        محصولات مبتنی بر این مدل‌ها را در همه جا می‌توان مشاهده کرد؛ از سیستم‌های پیشنهاددهنده‌ی فیلم و موسیقی گرفته              تا دوربین‌های خوانش پلاک ماشین، نرم‌افزار تبدیل متن به صوت و عامل هوشمند تشخیص سرطان.
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
};

const ComputerVision: StepType = {
  id: "ComputerVision",
  x: -2800,
  y: -2400,
  scale: 3,
  children:
    <Stack alignItems={'center'} justifyContent={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h2" gutterBottom>{'بینایی ماشین'}</Typography>
      <Typography variant="h5" gutterBottom>{'Computer Vision'}</Typography>
      <Typography width={600}>
        یک تصویر دیجیتال از دید کامپیوتر، صرفا شامل مقادیر عددی رنگ پیکسل‌ها است. بینایی ماشین شاخه‌ای است که به کامپیوتر اجازه می‌دهد درک عمیق‌تری از این اعداد پیدا کند و اطلاعاتی مانند اشیای درونِ تصویر را استخراج کند؛ برای مثال در دیجی‌کالا، کاربران به زودی خواهند توانست با ارسال یک تصویر، کالاهای مشابه آن را از میان هزاران کالا پیدا کنند. شبکه‌های عصبی عمیق در پیشرفت این حوزه نقش به‌سزایی داشته‌اند. با این حال به علت نیاز به داده‌های زیاد در این شاخه، فراهم کردن میلیون‌ها تصویر با برچسب مناسب، همواره یک چالش بزرگ بوده است.
      </Typography>
      <Stack width={'100%'} direction={'row'} justifyContent={'space-evenly'}>
        <Box mt={4} width={500} alignSelf={'start'}>
          <Image
            width={0} height={0} src={CVImage} alt=""
            style={{ width: '100%', height: 'auto' }} />
        </Box>
        <PlayGameButton gameLink={'https://neural-network-playground.darkube.app/#activation=sigmoid&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.15&regularizationRate=0&noise=0&networkShape=3,1&seed=0.95066&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false&showTestData_hide=true&activation_hide=true&noise_hide=true&resetButton_hide=false&regularization_hide=true&dataset_hide=false&playButton_hide=false&learningRate_hide=true&regularizationRate_hide=true&percTrainData_hide=true&discretize_hide=true&batchSize_hide=true&stepButton_hide=false&problem_hide=true'} />
      </Stack>

    </Stack>,
  links: [
    // { x: 650, y: 520, rotate: 90, length: 400 }
  ]
};


export default [
  ArtificalInteligence,
  MachineLearning,
  ComputerVision,
];