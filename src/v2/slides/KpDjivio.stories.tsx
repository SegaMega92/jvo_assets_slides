import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SlideStage, Abs, pt } from '../SlideStage';
import { img } from '../assets';
import { Card, JBadge, SlideTitle, Text, Marker, Pill, Check } from '../components/kit';

const D = 'kp_djivio';
const GR = {
  lime: 'linear-gradient(180deg, #D6FE9E 0%, #FFF2CC 100%)',
  pink: 'linear-gradient(180deg, #FFE4F6 0%, #FFDBD2 100%)',
  paleStat: 'linear-gradient(160deg, #FFFFFF 0%, #FBF4FA 100%)',
};
// фон-картинка слайда (full-bleed) как CSS background
const bg = (file: string) => `center / cover no-repeat url("${img(D, file)}"), #FFFFFF`;
const Img: React.FC<{ x: number; y: number; w: number; h: number; file: string; z?: number; rotate?: number }> =
  ({ x, y, w, h, file, z, rotate }) => (
    <Abs x={x} y={y} w={w} h={h} z={z} rotate={rotate}>
      <img src={img(D, file)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </Abs>
  );

const meta: Meta = { title: 'Презентации/КП Дживио', parameters: { layout: 'fullscreen' } };
export default meta;
type S = StoryObj;

// 01 — Титул: платформа для автоматизации
export const Слайд01: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <Img x={18.9} y={18.9} w={280.4} h={43.4} file="img_9eb928b89d34.png" />
      {/* пилюля «Решение №1…» (картинка) */}
      <Img x={18.9} y={103.4} w={304.0} h={21.5} file="img_92c23b19245a.png" />
      <Abs x={18.6} y={142.2} w={663.2}>
        <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(30), lineHeight: 1.12, letterSpacing: '-0.01em', color: '#410031' }}>
          Платформа для автоматизации аналитики и продвижения на маркетплейсах
        </div>
      </Abs>
      {/* дашборд-скриншот справа */}
      <Img x={543.1} y={32.7} w={796.1} h={474.6} file="img_ab4fad3f04e8.png" />

      {/* нижний бар ТОП-5/10/100 */}
      <Card x={18.9} y={434.4} w={475.0} h={72.9} radius={0.1718} background="#FBFBFB" border="1px solid #EFE6EC" />
      {[
        { x: 42, top: 'ТОП-5', sub1: 'Решений', sub2: 'для e-commerce' },
        { x: 192, top: 'ТОП-10', sub1: 'Решений', sub2: 'для маркетплейсов' },
        { x: 333, top: 'ТОП-100', sub1: 'Самых перспективных', sub2: 'компаний РФ' },
      ].map((c, i) => (
        <React.Fragment key={i}>
          <Text x={c.x} y={449} w={150} size={12} font="Unbounded" weight={600} color="#410031">{c.top}</Text>
          <Text x={c.x} y={472} w={150} size={8} weight={500} color="#410031" lineHeight={1.25}>{c.sub1}<br />{c.sub2}</Text>
        </React.Fragment>
      ))}
    </SlideStage>
  ),
};

// 02 — Награды и аккредитации
const AwardCard: React.FC<{ y: number; h: number; icon: string; iconSize: number; title: React.ReactNode; sub: string }> =
  ({ y, h, icon, iconSize, title, sub }) => (
    <>
      <Card x={56.7} y={y} w={410.6} h={h} radius={0.1} background="#FBFBFB" border="1px solid #EFE6EC" />
      <Abs x={62.9} y={y + 19} w={iconSize} h={iconSize}><img src={img(D, icon)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Abs>
      <Text x={148} y={y + 22} w={300} size={13} font="Unbounded" weight={600} color="#15181F" lineHeight={1.2}>{title} <span style={{ color: '#410031' }}>↗</span></Text>
      <Text x={148} y={y + h - 42} w={300} size={10} weight={500} color="#B7B7B7" lineHeight={1.3}>{sub}</Text>
    </>
  );
export const Слайд02: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <AwardCard y={49.0} h={110.4} icon="img_a2016e3af107.png" iconSize={72.6}
        title={<>Победитель премии «Большой&nbsp;Оборот-2025»</>} sub="в сфере «Продвижение на маркетплейсах»" />
      <AwardCard y={167.4} h={132.9} icon="img_5099390d08f1.png" iconSize={71.6}
        title={<>Победитель премии STARTECH AWARDS 2025</>} sub="в номинации «Лучшая технология в электронной коммерции и платежах»" />
      <AwardCard y={308.3} h={114.1} icon="img_af4674449ec4.png" iconSize={60.6}
        title={<>Дживио Агент на первой строчке</>} sub="в карте российского ИИ от издания «Инк.»" />

      {/* Forbes-карточка справа: пинк-фон + логотип + заголовок + фото */}
      <Img x={483.3} y={49.0} w={420.1} h={373.4} file="img_f168f2ac493d.png" />
      <Img x={523} y={96} w={150} h={40.4} file="img_7cf00137e066.png" z={2} />
      <Img x={523} y={150} w={340} h={73} file="img_08a60323cdfa.png" z={2} />
      <Img x={520} y={235} w={363} h={158} file="img_b6abcda600b6.png" z={2} />

      {/* нижний бар аккредитаций */}
      <Card x={56.7} y={430.4} w={846.6} h={60.6} radius={0.1667} background="#FBFBFB" border="1px solid #EFE6EC" />
      {[
        { x: 62.9, w: 152.9, ic: 'img_084bcc9fd703.png', t: 'Аккредитованая IT-компания' },
        { x: 223.1, w: 121.5, ic: 'img_9a7951281376.png', t: 'Резидент Сколково' },
        { x: 351.8, w: 158.5, ic: 'img_5f5e3b0a6560.png', t: 'Технологический партнер' },
        { x: 521.2, w: 168.1, ic: 'img_70788d40a978.png', t: 'Авторизированный партнер' },
        { x: 692.8, w: 207.4, ic: 'img_7839c1851a8f.png', t: 'Участник Московского инновационного кластера' },
      ].map((a, i) => (
        <React.Fragment key={i}>
          <Abs x={a.x + 7.4} y={443.3} w={34.9} h={34.9}><img src={img(D, a.ic)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Abs>
          <Text x={a.x + 48} y={446} w={a.w - 50} size={7.4} weight={500} color="#410031" lineHeight={1.25}>{a.t}</Text>
        </React.Fragment>
      ))}
    </SlideStage>
  ),
};

// 03 — С нами ТОП-компании выбиваются в лидеры
export const Слайд03: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <Abs x={136.3} y={18.9} w={687.3}>
        <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), lineHeight: 1.12, letterSpacing: '-0.01em', color: '#410031', textAlign: 'center' }}>
          С нами&nbsp;&nbsp;&nbsp;ТОП-компании выбиваются в лидеры на Wildberries
        </div>
      </Abs>
      <JBadge deck={D} x={369.8} y={16.5} />
      <Img x={85.4} y={175.8} w={789.2} h={332.2} file="img_2d3274e78f41.png" />
    </SlideStage>
  ),
};

// 04 — Рынок изменился (сравнение Раньше/Сейчас, тёмный фон)
const CompareList: React.FC<{ cardX: number; markerBg: string; markerArrow: string; items: string[]; markerYs: number[]; textColor: string }> =
  ({ cardX, markerBg, markerArrow, items, markerYs, textColor }) => (
    <>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <Marker x={cardX + 18} y={markerYs[i]} size={15.8} bg={markerBg} arrow={markerArrow} z={2} />
          <Text x={cardX + 42} y={markerYs[i] - 1} w={232} size={10} weight={500} color={textColor} lineHeight={1.3} z={2}>{t}</Text>
        </React.Fragment>
      ))}
    </>
  );
export const Слайд04: S = {
  render: () => (
    <SlideStage background="#410031">
      <Text x={18.9} y={74.9} w={922.2} size={28} font="Unbounded" weight={600} color="#FFE4F6" align="center">Рынок изменился</Text>
      <JBadge deck={D} x={459.1} y={26.9} />
      <Text x={217.6} y={128.1} w={524.8} size={12} weight={500} color="#FFE4F6" align="center">Маркетплейсы больше не прощают недоработки в карточках</Text>

      <Card x={174.3} y={178.4} w={300.8} h={318.4} radius={0.0399} background={GR.lime} />
      <Text x={202} y={196} w={250} size={12} weight={700} color="#1F2A09" z={2}>Раньше</Text>
      <CompareList cardX={174.3} markerBg="#1F2A09" markerArrow="#D8F995" textColor="#1F2A09"
        items={['Кто больше продает, тот первый в выдаче', 'Высокая рекламная ставка гарантирует продажи', 'Решения строятся на чужих цифрах']}
        markerYs={[230.1, 275.4, 320.7]} />
      <Pill x={190.3} y={452.0} w={209.1} h={30} background="#1F2A09" color="#D8F995" size={10} weight={500}>Легко контролировать</Pill>

      <Card x={485.0} y={178.4} w={300.8} h={318.4} radius={0.0399} background="#FFE4F6" />
      <Text x={513} y={196} w={250} size={12} weight={700} color="#410031" z={2}>Сейчас</Text>
      <CompareList cardX={485.0} markerBg="#410031" markerArrow="#FFE4F6" textColor="#410031"
        items={['100+ факторов ранжирования', 'Выдача персонализирована под пользователя и регион', 'Реклама не гарантирует просмотры, главное – органика', 'Решения требуют своих данных и гипотез', 'Фокус на качестве карточки и клиентском опыте']}
        markerYs={[230.1, 259.4, 304.9, 349.7, 394.6]} />
      <Pill x={501.0} y={452.0} w={209.1} h={30} background="#410031" color="#FF8FDA" size={10} weight={500}>Трудно контролировать</Pill>
    </SlideStage>
  ),
};

// 05 — Облако факторов ранжирования (тёмный фон)
export const Слайд05: S = {
  render: () => {
    const pills = [
      { x: 30.5, w: 255.9, t: 'Конверсия добавления в корзину' },
      { x: 313.6, w: 81.6, t: 'Цена' },
      { x: 422.4, w: 284.4, t: 'Кликабельность карточки из каталога' },
      { x: 106.7, w: 312.2, t: 'Закрытие возражений в карточке товара' },
      { x: 441.5, w: 230.6, t: 'Скорость доставки по региону' },
      { x: 691.8, w: 224.9, t: 'Привлекательность контента' },
      { x: 132.8, w: 224.9, t: 'Участие продуктов в акциях' },
      { x: 383.9, w: 248.5, t: 'Отзывы и детальный рейтинг' },
      { x: 658.6, w: 141.0, t: 'Процент выкупа' },
      { x: 39.3, w: 284.4, t: 'Контроль стока и оборачиваемости' },
      { x: 348.9, w: 81.6, t: 'SEO' },
      { x: 633.2, w: 81.6, t: 'Реклама' },
    ];
    const ys = [242.6, 242.6, 242.6, 306.6, 306.6, 306.6, 369.1, 369.1, 369.1, 428.0, 428.0, 428.0];
    return (
      <SlideStage background="#410031">
        <Text x={18.9} y={18.9} w={664.7} size={28} font="Unbounded" weight={600} color="#FFE4F6" lineHeight={1.15}>
          Чтобы продавать больше, нужно соответствовать актуальным алгоритмам
        </Text>
        <Text x={18.9} y={153.6} w={603.8} size={12} weight={500} color="#FFE4F6">Это лишь часть параметров</Text>
        <JBadge deck={D} />
        {pills.map((p, i) => (
          <Pill key={i} x={p.x} y={ys[i]} w={p.w} h={36.2} background="#FF8FDA" color="#410031" size={10} weight={500}>{p.t}</Pill>
        ))}
      </SlideStage>
    );
  },
};

// 07 — Применяйте комплексный подход (6 стат-карточек)
const BigStat: React.FC<{ x: number; y: number; bg: string; num: string; label: string; numColor?: string; labelColor?: string }> =
  ({ x, y, bg, num, label, numColor = '#410031', labelColor = '#410031' }) => (
    <>
      <Card x={x} y={y} w={300.8} h={138.0} radius={0.0758} background={bg} border={bg === '#410031' ? undefined : '1px solid #EFE6EC'} />
      <Text x={x + 24} y={y + 28} w={260} size={28} font="Unbounded" weight={600} color={numColor}>{num}</Text>
      <Text x={x + 24} y={y + 92} w={260} size={10} weight={500} color={labelColor} lineHeight={1.3}>{label}</Text>
    </>
  );
export const Слайд07: S = {
  render: () => (
    <SlideStage background={bg('bg_feacfaf43031.png')}>
      <Text x={18.9} y={76.8} w={922.2} size={28} font="Unbounded" weight={600} color="#410031" align="center">Применяйте комплексный подход</Text>
      <JBadge deck={D} x={459.1} y={26.9} />
      <Text x={178.1} y={173.5} w={603.8} size={12} weight={500} color="#410031" align="center">Иначе вам не удержаться в ТОПе e-commerce</Text>
      <BigStat x={18.9} y={233.8} bg={GR.paleStat} num="> 40 млн" label="Товаров на Wildberries" />
      <BigStat x={327.7} y={233.8} bg={GR.paleStat} num="1 млн" label="Продавцов на Wildberries" />
      <BigStat x={636.4} y={233.8} bg={GR.paleStat} num="25%" label="SEO" />
      <BigStat x={18.9} y={383.1} bg={GR.paleStat} num="на 30%" label="Рынок e-com в России растет ежегодно" />
      <BigStat x={327.7} y={383.1} bg="#410031" num="за 30 мест" label="Борются все продавцы в поисковой выдаче" numColor="#FFFFFF" labelColor="#F2D9EC" />
      <BigStat x={636.4} y={383.1} bg={GR.paleStat} num="OOS" label="Регулярные Out-Of-Stock" />
    </SlideStage>
  ),
};

// 08 — Единственная платформа (4 карточки преимуществ)
export const Слайд08: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <Card x={13.9} y={102.0} w={749.2} h={38.9} radius={0.3268} background="linear-gradient(90deg,#FF8FDA,#FFCFEF)" />
      <Card x={14.3} y={140.9} w={277.2} h={41.7} radius={0.3268} background="linear-gradient(90deg,#FF8FDA,#FFCFEF)" />
      <Abs x={18.9} y={18.9} w={826.7} z={2}>
        <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), lineHeight: 1.18, letterSpacing: '-0.01em', color: '#410031' }}>
          Дживио — единственная платформа, выдающая продвинутую и предиктивную аналитику, а затем – пошаговую стратегию роста продаж
        </div>
      </Abs>
      <JBadge deck={D} />
      {[
        { x: 18.9, bg: '#F2F3FA', ic: 'img_9f5bed20498e.png', iw: 57.2, ih: 51.9, t: 'Реализация стратегии — на вашей команде. Результат — в ваших руках.', c: '#15181F' },
        { x: 251.8, bg: GR.paleStat, ic: 'img_ff2212d9f2d8.png', iw: 52.6, ih: 50.8, t: 'Работает на AI, технология запатентована нами', c: '#34034C' },
        { x: 484.8, bg: GR.lime, ic: 'img_5be144ccb7de.png', iw: 57.2, ih: 57.2, t: 'Нет, вы так не сможете. 1$ млн инвестиций мы привлекли на разработку', c: '#1F2A09' },
        { x: 717.7, bg: '#FFE4F6', ic: 'img_abfc1793825d.png', iw: 66.4, ih: 48, t: 'Растим компании на WB и Ozon, Яндекс маркет и мегамаркет — скоро', c: '#410031' },
      ].map((c, i) => (
        <React.Fragment key={i}>
          <Card x={c.x} y={342.7} w={224.9} h={178.4} radius={0.0518} background={c.bg} />
          <Abs x={c.x + 20.6} y={358.5} w={c.iw} h={c.ih}><img src={img(D, c.ic)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Abs>
          <Text x={c.x + 20.6} y={428} w={188} size={12} weight={700} color={c.c} lineHeight={1.35}>{c.t}</Text>
        </React.Fragment>
      ))}
    </SlideStage>
  ),
};

// 09 — Объединяйте силы (платформа vs команда, чек-листы)
export const Слайд09: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={649.7}>Объединяйте силы с нами!</SlideTitle>
      <JBadge deck={D} />
      <Text x={18.9} y={73.0} w={501.6} size={12} weight={500} color="#410031">Оставляйте команде только эффективные действия</Text>

      {/* боковые/центральная иллюстрации — ПОЗАДИ карточек (выглядывают по краям) */}
      <Img x={27.5} y={223.7} w={233.8} h={198.8} file="img_29e322d5d54f.png" z={0} />
      <Img x={682.3} y={223.7} w={233.8} h={198.8} file="img_29e322d5d54f.png" z={0} />
      <Img x={271.3} y={183.5} w={254.3} h={265.8} file="img_a128d625b366.png" z={0} />

      {/* левая карта — платформа */}
      <Card x={174.3} y={146.5} w={300.8} h={318.4} radius={0.0399} background="#410031" z={1} />
      <Text x={196} y={166} w={250} size={16} font="Unbounded" weight={600} color="#FFE4F6" z={2} lineHeight={1.2}>Что будет делать платформа Дживио</Text>
      {[
        { y: 255.1, t: '24/7 анализировать факторы, влияющие на выдачу и продажи' },
        { y: 306.0, t: 'Изучать вас и конкурентов' },
        { y: 374.6, t: 'На основе этих данных выдавать конкретные действия по каждой карточке, которые приведут к увеличению продаж' },
      ].map((b, i) => (
        <React.Fragment key={i}>
          <Check x={192.8} y={b.y} size={15.8} bg="#1F2A09" mark="#D8F995" z={2} />
          <Text x={216} y={b.y - 1} w={236} size={10} weight={500} color="#FFE4F6" lineHeight={1.3} z={2}>{b.t}</Text>
        </React.Fragment>
      ))}

      {/* правая карта — команда */}
      <Card x={485.0} y={146.5} w={300.8} h={318.4} radius={0.0399} background="linear-gradient(160deg,#FBFBFB,#FBFBFB 55%,#FFE4F6)" z={1} />
      <Text x={507} y={166} w={250} size={16} font="Unbounded" weight={600} color="#410031" z={2} lineHeight={1.2}>Что будет на вашей команде</Text>
      {[
        { y: 257.0, t: 'Во время выполнять задания по карточкам' },
        { y: 306.0, t: 'Принимать решения об изменении вашего подхода к МП на основе данных' },
        { y: 374.6, t: 'Получать премию за кратный рост продаж' },
      ].map((b, i) => (
        <React.Fragment key={i}>
          <Check x={504.6} y={b.y} size={15.8} bg="#FF8FDA" mark="#410031" z={2} />
          <Text x={528} y={b.y - 1} w={236} size={10} weight={500} color="#410031" lineHeight={1.3} z={2}>{b.t}</Text>
        </React.Fragment>
      ))}
    </SlideStage>
  ),
};

// 10 — Запатентованная технология (3 карточки с превью)
export const Слайд10: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={668.5} lineHeight={1.18}>Наша запатентованная технология никогда не спит и берет всю невыполнимую для человека работу</SlideTitle>
      <JBadge deck={D} />
      {[
        { x: 18.9, bg: '#EAD7FE', ic: 'img_7f53df0ed583.png', t: 'Сохраняет все изменения во всех существующих карточках на WB 24/7', c: '#34034C' },
        { x: 329.6, bg: GR.lime, ic: 'img_3867c31c5ce3.png', t: 'Отслеживает как каждое изменение в карточке сказывается на всех этапах конверсионной воронки', c: '#1F2A09' },
        { x: 640.3, bg: '#FFE4F6', ic: 'img_5c718d8f4e25.png', t: 'Формирует алерты с планом действий', c: '#410031' },
      ].map((c, i) => (
        <React.Fragment key={i}>
          <Card x={c.x} y={202.7} w={300.8} h={318.4} radius={0.0399} background={c.bg} />
          <Abs x={c.x + 8} y={210.7} w={284.8} h={178.1}><img src={img(D, c.ic)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Abs>
          <Text x={c.x + 22} y={408} w={262} size={12} weight={600} color={c.c} lineHeight={1.4}>{c.t}</Text>
        </React.Fragment>
      ))}
    </SlideStage>
  ),
};

// 11 — Рекомендуемые полезные действия (4 нумерованных шага)
export const Слайд11: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={668.5} lineHeight={1.18}>Рекомендуемые полезные действия на каждом пути пользователя</SlideTitle>
      <JBadge deck={D} />
      {[
        { x: 24.1, n: '1', title: 'Покупатель должен найти товар на МП', desc: 'Формируем конкретные задачи, чтобы ваши карточки на 100% соответствовали алгоритмам' },
        { x: 254.4, n: '2', title: 'Товар должен быть в наличии и укладываться в оборачиваемость', desc: 'Расчёт отгрузок на новые и действующие склады, контроль оборачиваемости' },
        { x: 484.8, n: '3', title: 'Карточка товара должна убедить пользователя купить у вас', desc: 'Проверяем карточки по цене, наполненности и соответствию ожиданий клиентов' },
        { x: 715.1, n: '4', title: 'Вы должны заработать с продажи', desc: 'Учитываем разные факторы маржи на МП, включая все расходы и процент выкупа по товару' },
      ].map((s, i) => (
        <React.Fragment key={i}>
          <Card x={s.x} y={212.9} w={222.4} h={308.3} radius={0.0413} background="#FFFFFF" border="1px solid #EFE6EC" />
          <Abs x={s.x + 18} y={219.3} w={24.4} h={24.4} z={2} style={{ background: '#FF8FDA', borderRadius: 24.4 * 0.32 * 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(17.8), color: '#410031', lineHeight: 1 }}>{s.n}</span>
          </Abs>
          <Text x={s.x + 19} y={291.6} w={183.4} size={12} weight={700} color="#410031" lineHeight={1.3} z={2}>{s.title}</Text>
          <Abs x={s.x + 19} y={388.8} w={186} z={2} style={{ borderTop: '1px solid rgba(65,0,49,0.15)' }} />
          <Text x={s.x + 19} y={400.7} w={183.4} size={10} weight={500} color="#410031" lineHeight={1.35} z={2}>{s.desc}</Text>
        </React.Fragment>
      ))}
    </SlideStage>
  ),
};

// ── ToolSlide: общий лейаут тул-слайдов (заголовок + тёмные карточки + скрины) ──
type ToolCardSpec = { x: number; y: number; w?: number; h?: number; title: React.ReactNode; desc: React.ReactNode };
const ToolSlide: React.FC<{
  bgFile: string; titleColor: string; title: string; subtitle: string; subW?: number;
  cardBg: string; accent: string; descColor: string; cards: ToolCardSpec[];
  images: { x: number; y: number; w: number; h: number; file: string; z?: number; rotate?: number }[];
}> = ({ bgFile, titleColor, title, subtitle, subW = 364.2, cardBg, accent, descColor, cards, images }) => (
  <SlideStage background={bg(bgFile)}>
    <Text x={18.9} y={18.9} w={668.5} size={28} font="Unbounded" weight={600} color={titleColor}>{title}</Text>
    <JBadge deck={D} />
    <Text x={18.9} y={75.6} w={subW} size={12} weight={500} color={titleColor} lineHeight={1.35}>{subtitle}</Text>
    {images.map((im, i) => <Img key={`im${i}`} {...im} z={im.z ?? 1} />)}
    {cards.map((c, i) => (
      <Card key={`c${i}`} x={c.x} y={c.y} w={c.w ?? 308.6} h={c.h ?? 155.5} radius={0.078} background={cardBg} z={2}>
        <div style={{ padding: `${pt(18)}px ${pt(20)}px` }}>
          <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(15), color: accent, lineHeight: 1.2 }}>{c.title}</div>
          <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(10), color: descColor, lineHeight: 1.35, marginTop: pt(10) }}>{c.desc}</div>
        </div>
      </Card>
    ))}
  </SlideStage>
);

// 13 — Инструменты (разделитель)
export const Слайд13: S = {
  render: () => (
    <SlideStage background={bg('bg_8eecd9710587.png')}>
      <Img x={406.0} y={169.6} w={137.2} h={64.7} file="img_136a9e21b03e.png" />
      <Text x={18.9} y={249.6} w={922.2} size={48} font="Unbounded" weight={600} color="#410031" align="center">Инструменты</Text>
      <JBadge deck={D} />
    </SlideStage>
  ),
};

// ── CaseSlide: общий лейаут кейса (фото + метрики + заголовок-плашка) ──
const CaseSlide: React.FC<{
  title: string; titleColor?: string; pill: string; pillX: number; pillW: number;
  photo: string; tableY: number; metrics: { label: string; value: string }[];
  imgs?: { x: number; y: number; w: number; h: number; file: string }[];
  extra?: React.ReactNode;
}> = ({ title, titleColor = '#15181F', pill, pillX, pillW, photo, tableY, metrics, imgs = [], extra }) => {
  const rowH = metrics.length >= 4 ? 78.75 : 70.4;
  return (
    <SlideStage background="#FFFFFF">
      <Text x={18.9} y={18.9} w={400} size={28} font="Unbounded" weight={600} color={titleColor}>{title}</Text>
      <Pill x={pillX} y={18.9} w={pillW} h={34} background="#410031" color="#FFFFFF" size={12} weight={600}>{pill}</Pill>
      <JBadge deck={D} />
      <Card x={18.9} y={90.0} w={922.2} h={431.1} radius={0.0375} background="#FFFFFF" border="1px solid #ECE3E9" />
      <Img x={34.9} y={106.0} w={391.8} h={399.1} file={photo} z={2} />
      {metrics.map((m, i) => {
        const ry = tableY + 8 + i * rowH;
        return (
          <React.Fragment key={i}>
            <Text x={455} y={ry + 8} w={250} size={12} weight={600} color="#15181F" lineHeight={1.25} z={2}>{m.label}</Text>
            <Abs x={455} y={ry + 4} w={473} z={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: pt(34) }}>
              <span style={{ background: '#D8F995', color: '#1F2A09', fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(13), borderRadius: 999, padding: `${pt(6)}px ${pt(16)}px`, lineHeight: 1 }}>{m.value}</span>
            </Abs>
            {i < metrics.length - 1 && <Abs x={455} y={ry + rowH - 2} w={473} z={2} style={{ borderTop: '1px solid #F0E6EE' }} />}
          </React.Fragment>
        );
      })}
      {imgs.map((im, i) => <Img key={`ci${i}`} {...im} z={3} />)}
      {extra}
    </SlideStage>
  );
};

const cases = [
  { n: '20', title: 'AGROIMPEX', pill: 'Увеличили выручку на 34 млн ₽', pillX: 328.2, pillW: 279.8, photo: 'img_6d0e8106024e.jpg', tableY: 189.1,
    metrics: [{ label: 'Совокупное количество заказов', value: '+ 51 900 шт' }, { label: 'Выручка', value: '+ 34 млн ₽' }, { label: 'Снижение затрат на рекламу на Wildberries', value: '− 50%' }],
    imgs: [{ x: 455.4, y: 463.0, w: 178.2, h: 34.1, file: 'img_16a893ff07ef.png' }, { x: 840.4, y: 425.2, w: 72.7, h: 70.8, file: 'img_98d955796b42.png' }] },
  { n: '21', title: 'Laretto', pill: 'Прирост на 26% в первый месяц', pillX: 217.6, pillW: 304.7, photo: 'img_75e8eab01320.png', tableY: 106.0,
    metrics: [{ label: 'Прирост заказов', value: '+ 26%' }, { label: 'Увеличение кол-ва заказов', value: '+ 22%' }, { label: 'Увеличение количества просмотров карточек', value: '+ 36%' }, { label: 'Увеличение суммы продаж', value: '+ 9 928 321 ₽' }],
    imgs: [{ x: 449.0, y: 450.8, w: 160.1, h: 41.7, file: 'img_967e67f8ce50.png' }, { x: 835.6, y: 437.6, w: 78.3, h: 56.6, file: 'img_e57ac6656443.png' }] },
  { n: '22', title: 'Текстиль НН', pill: 'Сократили упущенную выручку на 48%', pillX: 270, pillW: 360, photo: 'img_5eb198dd9dd9.jpg', tableY: 106.0,
    metrics: [{ label: 'Прирост заказов', value: '+ 22%' }, { label: 'Прирост продаж', value: '+ 24%' }, { label: 'Упущенная выручка', value: '− 48%' }, { label: 'Выручка в месяц', value: '+ 888 516 ₽' }],
    imgs: [{ x: 835.6, y: 437.6, w: 78.3, h: 56.6, file: 'img_2d51ec69d8d6.png' }] },
  { n: '23', title: 'Сosmobeauty', pill: 'Заработали 10+ млн рублей', pillX: 290, pillW: 260, photo: 'img_517737b4fb2e.png', tableY: 106.0,
    metrics: [{ label: 'Прирост заказов', value: '+ 22%' }, { label: 'Рост переходов в карточку', value: '+ 100%' }, { label: 'Выручка в месяц', value: '+ 10,3 млн ₽' }],
    imgs: [{ x: 449.0, y: 450.8, w: 160.1, h: 41.7, file: 'img_a4599928e699.png' }, { x: 835.6, y: 437.6, w: 78.3, h: 56.6, file: 'img_bd77900450f7.png' }] },
];
export const Слайд20: S = { render: () => <CaseSlide {...cases[0]} /> };
export const Слайд21: S = { render: () => <CaseSlide {...cases[1]} /> };
export const Слайд22: S = { render: () => <CaseSlide {...cases[2]} /> };
export const Слайд23: S = { render: () => <CaseSlide {...cases[3]} /> };

// 24 — Сравнение с конкурентами (таблица ✓/—)
export const Слайд24: S = {
  render: () => {
    const cols = ['Дживио', 'MPStat', 'Eggheads', 'Маяк'];
    const colX = [420, 534, 648, 762];
    const rows: [string, string, string, string, string][] = [
      ['Нацелен на подбор нового товара и прибыльных ниш', '—', '✓', '✓', '✓'],
      ['Дает список рекомендаций по увеличению выручки на основе 100+ скрытых критериев ранжирования', '✓', '—', '—', '—'],
      ['Подсвечивает проблемы в карточке товара и дает способы их решения', '✓', '—', '—', '—'],
      ['Дает список четких действий для увеличения продаж', '✓', '—', '—', '—'],
      ['Автоматизирует расчет поставок', '✓', '✓', '✓', '✓'],
      ['Анализирует индекс локализации и дает готовый план по расширению покрытия', '✓', '—', '✓', '—'],
      ['AI-Агент: полностью автономная работа с отзывами (ответы, отчеты, кросс-продажи)', '✓', '—', '—', '—'],
      ['Ежедневная актуализация изменений по SEO топовых конкурентов, готовые тексты от AI и мгновенная выгрузка на WB', '✓', '—', '—', '—'],
      ['Контроль OOS и планирование поставок с учетом особенностей конкретного селлера, кластера и склада', '✓', '—', '—', '—'],
    ];
    const top = 96, rowH = 41;
    return (
      <SlideStage background={bg('bg_4b6860c553b8.png')}>
        <Card x={59.6} y={68.1} w={840.9} h={431.1} radius={0.0375} background="#FFFFFF" border="1px solid #ECE3E9" />
        <Card x={419.2} y={70} w={114} h={427} radius={0.06} background="#F3EAFB" z={2} />
        <JBadge deck={D} />
        {/* header */}
        <Text x={84} y={top - 4} w={320} size={11} font="Unbounded" weight={600} color="#15181F" z={3}>Параметры</Text>
        {cols.map((c, i) => (
          <Text key={c} x={colX[i]} y={top - 4} w={114} size={11} font="Unbounded" weight={600} color={i === 0 ? '#410031' : '#999999'} align="center" z={3}>{c}</Text>
        ))}
        {rows.map((r, ri) => {
          const ry = top + 22 + ri * rowH;
          return (
            <React.Fragment key={ri}>
              <Abs x={84} y={ry - 6} w={792} z={3} style={{ borderTop: '1px solid #F0E6EE' }} />
              <Text x={92} y={ry} w={318} size={8.5} weight={500} color="#15181F" lineHeight={1.2} z={3}>{r[0]}</Text>
              {[1, 2, 3, 4].map((ci) => {
                const v = r[ci]; const cx = colX[ci - 1] + 57 - 8;
                if (v === '✓') return <Check key={ci} x={cx} y={ry + 1} size={16} bg={ci === 1 ? '#1F2A09' : '#D8F995'} mark={ci === 1 ? '#D8F995' : '#1F2A09'} z={4} />;
                return <Text key={ci} x={colX[ci - 1]} y={ry + 1} w={114} size={12} weight={600} color="#C9B7C5" align="center" z={4}>—</Text>;
              })}
            </React.Fragment>
          );
        })}
      </SlideStage>
    );
  },
};

// 06 — Как работает алгоритм (таблица атрибуции)
export const Слайд06: S = {
  render: () => {
    const rows: [string, string, string, string][] = [
      ['Скорость доставки', '5', '4▼', '7▲'],
      ['Процент покрытия', '10', '11▲', '8▼'],
      ['Количество отзывов', '954', '678▼', '1001▲'],
      ['CR в корзину', '15%', '10%▼', '17%▲'],
      ['Наличие товара', '7/10', '3/7▼', '10/10▲'],
      ['Детальный рейтинг', '4,6', '4,7▲', '4,5▼'],
    ];
    const colX = [159, 327, 495, 625];
    const colW = [168, 168, 130, 149];
    const headers = ['Атрибуция', 'Ваша карточка', 'Конкурент 1', 'Конкурент 2'];
    const top = 215, rowH = 42;
    const arr = (s: string) => {
      const up = s.includes('▲'); const dn = s.includes('▼'); const txt = s.replace(/[▲▼]/g, '');
      return <>{txt}{up && <span style={{ color: '#3AA655' }}> ▲</span>}{dn && <span style={{ color: '#E0631F' }}> ▼</span>}</>;
    };
    return (
      <SlideStage background="#410031">
        <SlideTitle size={28} w={664.7} color="#FFE4F6">Как работает алгоритм маркетплейса</SlideTitle>
        <JBadge deck={D} />
        <Text x={18.9} y={115.6} w={482} size={12} weight={500} color="#FFE4F6" lineHeight={1.35}>
          Алгоритм сравнивает вашу карточку с конкурентами по каждой атрибуции, а затем соотносят значения с Big Data
        </Text>
        <Card x={134.9} y={187.8} w={668.7} h={325.3} radius={0.0545} background="#FFFFFF" border="1px solid #ECE3E9" />
        <Card x={302.9} y={200.8} w={168} h={300} radius={0.05} background="#FBF2FB" z={2} />
        {headers.map((h, i) => (
          <Text key={h} x={colX[i] + (i === 0 ? 12 : 0)} y={top - 22} w={colW[i]} size={11} font="Unbounded" weight={600} color={i === 1 ? '#410031' : '#15181F'} align={i === 0 ? 'left' : 'center'} z={3}>{h}</Text>
        ))}
        {rows.map((r, ri) => {
          const ry = top + 12 + ri * rowH;
          return (
            <React.Fragment key={ri}>
              <Abs x={150} y={ry - 6} w={620} z={3} style={{ borderTop: '1px solid #F0E6EE' }} />
              <Text x={colX[0] + 12} y={ry} w={156} size={10} weight={500} color="#15181F" z={3}>{r[0]}</Text>
              {[1, 2, 3].map((ci) => (
                <Text key={ci} x={colX[ci]} y={ry} w={colW[ci]} size={11} weight={ci === 1 ? 700 : 500} color={ci === 1 ? '#410031' : '#15181F'} align="center" z={3}>{arr(r[ci])}</Text>
              ))}
            </React.Fragment>
          );
        })}
        <Pill x={156.2} y={466.4} w={119.7} h={26.8} background="#FF8FDA" color="#410031" size={10} weight={500}>90+ факторов</Pill>
      </SlideStage>
    );
  },
};

// 19 — Кейсы (разделитель)
export const Слайд19: S = {
  render: () => (
    <SlideStage background={bg('bg_1b5c246bf803.png')}>
      <Img x={430.2} y={169.8} w={102.2} h={65.9} file="img_238b6ac9de83.png" />
      <Text x={18.9} y={249.6} w={922.2} size={48} font="Unbounded" weight={600} color="#34034C" align="center">Кейсы</Text>
      <JBadge deck={D} />
    </SlideStage>
  ),
};

// 14 — Аналитика товарной матрицы
export const Слайд14: S = {
  render: () => (
    <ToolSlide bgFile="bg_7716d4734f01.png" titleColor="#1F2A09"
      title="Аналитика товарной матрицы" subtitle="Подробная аналитика в разрезе каждого товара" subW={603.8}
      cardBg="#1F2A09" accent="#D6FE9E" descColor="#FFFFFF"
      cards={[
        { x: 18.9, y: 202.7, title: <>Детализация в разрезе товара</>, desc: 'Комиссия, логистика, маржа, выручка, план-факт и другие показатели по каждому товару' },
        { x: 18.9, y: 365.6, title: 'Экспорт данных', desc: 'Удобная выгрузка любых данных по товарам за выбранный период времени' },
      ]}
      images={[
        { x: 396.1, y: 197.7, w: 431.5, h: 219.9, file: 'img_1a9f73f695d1.png' },
        { x: 719.1, y: 125.0, w: 180.3, h: 159.1, file: 'img_c9cbaca9f768.png' },
        { x: 614.1, y: 237.9, w: 237.0, h: 209.2, file: 'img_4097ce0ff287.png' },
        { x: 456.7, y: 146.3, w: 251.5, h: 40.5, file: 'img_1e0f564ae574.png' },
      ]} />
  ),
};

// 15 — Дашборд
export const Слайд15: S = {
  render: () => (
    <ToolSlide bgFile="bg_e7e0a48dfc9d.png" titleColor="#2A1E01"
      title="Дашборд" subtitle="Отслеживайте все метрики здоровья бизнеса в едином аналитическом дашборде"
      cardBg="#2A1E01" accent="#FACF61" descColor="#FFECB7"
      cards={[
        { x: 18.9, y: 202.7, title: 'Сводка по всей матрице', desc: 'Подробные данные обо всех показателях бизнеса' },
        { x: 18.9, y: 365.6, title: 'Аналитика финансов', desc: 'Оценим маржинальность, упущенные заказы и подсчитаем потенциальную выручку' },
        { x: 336.7, y: 365.6, title: 'Готовые задачи', desc: 'Формируем готовые задачи для увеличения продаж, вместо сложных аналитических таблиц' },
      ]}
      images={[
        { x: 449.4, y: 52.7, w: 262.5, h: 205.5, file: 'img_ee9a065e1d07.png' },
        { x: 727.7, y: 87.8, w: 137.9, h: 119.6, file: 'img_9002bf28431c.png' },
        { x: 582.4, y: 138.7, w: 302.3, h: 193.6, file: 'img_0e5f5fd20bf8.png' },
      ]} />
  ),
};

// 16 — Логистика PRO
export const Слайд16: S = {
  render: () => (
    <ToolSlide bgFile="bg_2aa81d4f7945.png" titleColor="#5B0F00"
      title="Логистика PRO" subtitle="Распределяйте остатки по складам с учетом коэффицентов, рентабельности и рисков OOS"
      cardBg="#381300" accent="#FF965F" descColor="#FFDBD2"
      cards={[
        { x: 18.9, y: 202.7, title: 'Распределение остатков', desc: 'Распределим остатки на склады с учетом оборачиваемости, коэффициента приемки и стоимости логистики' },
        { x: 18.9, y: 365.6, title: 'Задачи по логистике', desc: 'Предупредим об OOS и автоматически рассчитаем точные поставки на каждый склад' },
        { x: 336.7, y: 365.6, title: 'Региональные отгрузки', desc: 'Распределим реальные остатки с помощью загрузки из 1С' },
      ]}
      images={[
        { x: 420.7, y: 83.1, w: 327.7, h: 250.5, file: 'img_46c2dd1cc52c.png' },
        { x: 719.8, y: 34.8, w: 164.3, h: 211.2, file: 'img_51df14196631.png' },
        { x: 675.3, y: 260.9, w: 213.6, h: 200.2, file: 'img_69271ce23b6c.png' },
      ]} />
  ),
};

// 17 — SEO PRO
export const Слайд17: S = {
  render: () => (
    <ToolSlide bgFile="bg_1ff398dd80c8.png" titleColor="#410031"
      title="SEO PRO" subtitle="Каждый день автоматически контролирует и улучшает SEO-оптимизацию"
      cardBg="#410031" accent="#FF8FDA" descColor="#FFFFFF"
      cards={[
        { x: 18.9, y: 202.7, title: <span style={{ color: '#FFFFFF' }}>Система трекинг-контроля</span>, desc: 'Автоматически анализирует SEO-показатели вас и ваших конкурентов и ежедневно улучшает SEO-оптимизацию' },
        { x: 336.7, y: 202.7, title: <span style={{ color: '#FFFFFF' }}>Готовые тексты</span>, desc: 'Дживио АI моментально реагирует на изменения в аналитике и генерирует готовые тексты для карточек' },
        { x: 18.9, y: 365.6, title: <span style={{ color: '#FFFFFF' }}>Контроль результатов</span>, desc: 'Подробная SEO-аналитика ваших SKU' },
        { x: 336.7, y: 365.6, title: 'Расчет потенциала частотности', desc: 'Дживио AI не только улучшает SEO, но и прогнозирует рост частотности' },
      ]}
      images={[
        { x: 411.2, y: 32.9, w: 367.8, h: 147.6, file: 'img_14aff29da8d6.png' },
        { x: 677.7, y: 135.8, w: 243.0, h: 318.4, file: 'img_004a89843c40.png' },
        { x: 728.0, y: 74.5, w: 156.0, h: 41.7, file: 'img_d15d72f72269.png' },
      ]} />
  ),
};

// 18 — Дживио агент
export const Слайд18: S = {
  render: () => (
    <ToolSlide bgFile="bg_284e27e26a03.png" titleColor="#34034C"
      title="Дживио агент" subtitle="Персональный AI-менеджер для автоматизации в e-commerce"
      cardBg="#34034C" accent="#FFFFFF" descColor="#EAD7FE"
      cards={[
        { x: 18.9, y: 202.7, h: 318.4, title: 'Персональный подход в отзывах', desc: 'Агент отвечает персонально и аргументированно, чтобы показать неконструктивность негативных отзывов для потенциальных покупателей' },
        { x: 336.7, y: 202.7, title: 'Автоматизация ежедневных задач', desc: 'Освободите команду от рутинных задач, чтобы сосредоточиться на масштабировании' },
        { x: 336.7, y: 365.6, title: 'AI-отчеты, которые заменят отдел аналитики', desc: 'Дживио агент не просто собирает данные – он превращает их в готовые решения' },
      ]}
      images={[
        { x: 421.9, y: 57.6, w: 399.9, h: 101.5, file: 'img_04df40bbbed3.png' },
        { x: 666.1, y: 129.2, w: 248.5, h: 126.5, file: 'img_f7f271795957.png' },
        { x: 683.5, y: 267.3, w: 224.3, h: 113.7, file: 'img_70e405d78cd9.png' },
        { x: 683.5, y: 393.2, w: 187.1, h: 94.9, file: 'img_aabed76b3f12.png' },
      ]} />
  ),
};

// ── TariffCard: карточка тарифа ────────────────────────────────────────
const TariffCard: React.FC<{
  x: number; y?: number; title: string; chips: { w: number; t: string }[];
  rows: { label: string; value: string }[]; total: string; perDay: string; bonus?: string;
  totalY?: number; perDayY?: number; tableY?: number;
}> = ({ x, y = 95.3, title, chips, rows, total, perDay, bonus, totalY = 374.8, perDayY = 400.8, tableY = 186.9 }) => {
  const cw = 300.8, rowH = 27.5;
  return (
    <>
      <Card x={x} y={y} w={cw} h={388.9} radius={0.0568} background="#FFFFFF" border="1px solid #ECE3E9" />
      <Text x={x + 16.3} y={y + 11.9} w={270} size={16} font="Unbounded" weight={600} color="#000000" z={2}>{title}</Text>
      {(() => { let cx = x + 17.2; return chips.map((c, i) => { const el = <Pill key={i} x={cx} y={y + 52.6} w={c.w} h={24.1} background="#FF8FDA" color="#410031" size={10} weight={700}>{c.t}</Pill>; cx += c.w + 6; return el; }); })()}
      {rows.map((r, i) => {
        const ry = tableY + i * rowH;
        const isFirst = i === 0;
        return (
          <React.Fragment key={i}>
            <Text x={x + 17} y={ry + 6} w={185} size={isFirst ? 11 : 10} weight={isFirst ? 700 : 500} color="#15181F" z={2}>{r.label}</Text>
            <Text x={x + 200} y={ry + 6} w={84} size={isFirst ? 11 : 10} weight={isFirst ? 700 : 500} color={r.value === 'вкл' ? '#9ECF38' : '#15181F'} align="right" z={2}>{r.value}</Text>
            <Abs x={x + 17} y={ry + rowH - 2} w={267} z={2} style={{ borderTop: '1px solid #F0E6EE' }} />
          </React.Fragment>
        );
      })}
      <Text x={x + 20} y={totalY} w={270} size={11} font="Unbounded" weight={500} color="#000000" z={2}>{total}</Text>
      <Text x={x + 20} y={perDayY} w={260} size={9} weight={500} color="#999999" z={2}>{perDay}</Text>
      {bonus && <Pill x={x + 15.5} y={431.9} w={252.2} h={22.4} background={GR.lime} color="#1F2A09" size={9} weight={500} font="Manrope">{bonus}</Pill>}
    </>
  );
};

// ── PriceTable: список «услуга … цена ₽» (для Pay-as-you-go) ───────────
const PriceTable: React.FC<{ x: number; y: number; w: number; rows: { label: string; value: string }[]; rowH?: number; labelColor?: string; muted?: boolean }> =
  ({ x, y, w, rows, rowH = 35.5, labelColor = '#15181F', muted = false }) => (
    <>
      {rows.map((r, i) => {
        const ry = y + i * rowH;
        return (
          <React.Fragment key={i}>
            <Text x={x} y={ry + 6} w={w - 60} size={11} weight={500} color={labelColor} lineHeight={1.2} z={2} style={muted ? { opacity: 0.55 } : undefined}>{r.label}</Text>
            <Text x={x + w - 60} y={ry + 6} w={56} size={11} weight={600} color={labelColor} align="right" z={2} style={muted ? { opacity: 0.55 } : undefined}>{r.value}</Text>
            <Abs x={x} y={ry + rowH - 4} w={w} z={2} style={{ borderTop: '1px solid #EFE6EE', opacity: muted ? 0.4 : 1 }} />
          </React.Fragment>
        );
      })}
    </>
  );

// 25 — Тарифы «Стандарт» / «Премиум»
export const Слайд25: S = {
  render: () => (
    <SlideStage background={bg('bg_8d9eda872072.png')}>
      <Pill x={18.9} y={19.5} w={321.1} h={39.6} background={GR.lime} color="#1F2A09" size={12} weight={600}>Специальное предложение до 11.12</Pill>
      <JBadge deck={D} />
      <TariffCard x={169.1} title="«Стандарт»" chips={[{ w: 54.2, t: '1 API' }, { w: 128.7, t: '1 Пользователь' }]}
        rows={[{ label: 'Подписка на 6 месяцев', value: '1 099 900 ₽' }, { label: 'SEO PRO, 100 SKU', value: 'вкл' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }]}
        total="Итого: 1 099 900 ₽ / 6 мес." perDay="Всего 6 110 ₽ / день" bonus="25%  на баланс Агента в виде бонусов" />
      <TariffCard x={490.2} title="«Премиум»" chips={[{ w: 54.2, t: '3 API' }, { w: 145.0, t: '5 Пользователей' }]}
        rows={[{ label: 'Подписка на 12 месяцев', value: '1 899 900 ₽' }, { label: 'SEO PRO, 200 SKU', value: 'вкл' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }, { label: 'Персональный менеджер', value: 'вкл' }, { label: 'Ozon', value: 'вкл' }]}
        total="Итого: 1 899 900 ₽ / 12 мес." perDay="Всего 5 277 ₽ / день" bonus="50%  на баланс Агента в виде бонусов" />
    </SlideStage>
  ),
};

// 26 — Тарифы (пакетные предложения)
export const Слайд26: S = {
  render: () => (
    <SlideStage background={bg('bg_7716d4734f01.png')}>
      <Pill x={18.9} y={19.5} w={239.2} h={39.6} background="#410031" color="#FF8FDA" size={12} weight={600}>Пакетные предложения</Pill>
      <JBadge deck={D} />
      <TariffCard x={169.1} y={94.6} tableY={186.3} totalY={423.6} perDayY={449.6} title="«Стандарт»"
        chips={[{ w: 54.2, t: '1 API' }, { w: 128.7, t: '1 Пользователь' }]}
        rows={[{ label: 'Подписка на 6 месяцев', value: '1 099 900 ₽' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }]}
        total="Итого: 1 099 900 ₽ / 6 мес." perDay="Всего 6 110 ₽ / день" />
      <TariffCard x={490.2} y={94.6} tableY={186.3} totalY={423.6} perDayY={449.6} title="«Премиум»"
        chips={[{ w: 54.2, t: '3 API' }, { w: 145.0, t: '5 Пользователей' }]}
        rows={[{ label: 'Подписка на 12 месяцев', value: '1 899 900 ₽' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }, { label: 'Персональный менеджер', value: 'вкл' }, { label: 'Ozon', value: 'вкл' }, { label: 'Все будущие обновления', value: 'вкл' }, { label: 'Фиксированная цена', value: 'вкл' }]}
        total="Итого: 1 899 900 ₽ / 12 мес." perDay="Всего 5 277 ₽ / день" />
    </SlideStage>
  ),
};

// 27 — Лучшие условия: «Оплата за действие» (рекап)
const MiniTariff: React.FC<{ x: number; title: string; rows: { label: string; value: string }[]; total: string }> = ({ x, title, rows, total }) => (
  <>
    <Card x={x} y={160} w={195} h={256} radius={0.05} background="#FFFFFF" border="1px solid #ECE3E9" />
    <Text x={x + 12} y={172} w={170} size={11} font="Unbounded" weight={600} color="#000000" z={2}>{title}</Text>
    {rows.map((r, i) => (
      <React.Fragment key={i}>
        <Text x={x + 12} y={205 + i * 20} w={120} size={7.5} weight={i === 0 ? 700 : 500} color="#15181F" z={2}>{r.label}</Text>
        <Text x={x + 110} y={205 + i * 20} w={75} size={7.5} weight={i === 0 ? 700 : 500} color={r.value === 'вкл' ? '#9ECF38' : '#15181F'} align="right" z={2}>{r.value}</Text>
      </React.Fragment>
    ))}
    <Text x={x + 12} y={392} w={175} size={8} font="Unbounded" weight={500} color="#000000" z={2}>{total}</Text>
  </>
);
export const Слайд27: S = {
  render: () => (
    <SlideStage background={bg('bg_4b6860c553b8.png')}>
      <Pill x={18.9} y={19.5} w={360} h={32} background="linear-gradient(90deg,#FFE4F6,#FFCFEF)" color="#410031" size={11} weight={600}>Лучшие условия на рынке E-com, актуально до 12.12</Pill>
      <JBadge deck={D} />
      {/* зачёркнутые мини-пакеты */}
      <MiniTariff x={67} title="«Стандарт»" rows={[{ label: 'Подписка 6 мес', value: '1 099 900 ₽' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }]} total="Итого: 1 099 900 ₽" />
      <MiniTariff x={272} title="«Премиум»" rows={[{ label: 'Подписка 12 мес', value: '1 899 900 ₽' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }, { label: 'Перс. менеджер', value: 'вкл' }, { label: 'Ozon', value: 'вкл' }]} total="Итого: 1 899 900 ₽" />
      <Abs x={61} y={150} w={421} h={266} z={3} style={{ overflow: 'visible' }}>
        <svg width="100%" height="100%" style={{ position: 'absolute' }}><line x1="0" y1="0" x2="100%" y2="100%" stroke="#FF5853" strokeWidth="3" /></svg>
      </Abs>

      {/* большая карта PAYG */}
      <Card x={509.7} y={86.7} w={312.2} h={395.6} radius={0.053} background="#FFFFFF" border="1px solid #ECE3E9" z={2} />
      <Text x={532.3} y={104} w={270} size={16} font="Unbounded" weight={600} color="#000000" z={3}>«ОПЛАТА ЗА ДЕЙСТВИЕ»</Text>
      <Pill x={533.1} y={139.3} w={54.2} h={24.1} background="#FF8FDA" color="#410031" size={10} weight={700} z={3}>3 API</Pill>
      <Pill x={593.2} y={139.3} w={145} h={24.1} background="#FF8FDA" color="#410031" size={10} weight={700} z={3}>5 Пользователей</Pill>
      {['Всё из пакета Стандарт', 'Всё из пакета Премиум'].map((t, i) => (
        <React.Fragment key={i}>
          <Text x={540} y={186 + i * 28} w={210} size={10} weight={500} color="#15181F" z={3}>{t}</Text>
          <Check x={788} y={185 + i * 28} size={15} bg="#D8F995" mark="#1F2A09" z={3} />
        </React.Fragment>
      ))}
      <Card x={520.3} y={238.9} w={291} h={142.7} radius={0.07} background="linear-gradient(180deg,#EBF9C1,#D6FE9E)" z={3} />
      {['Ответы на отзывы и вопросы с AI', 'Умное управление ценами', 'Глубокая аналитика', '+ Беспроцентная рассрочка от Т-банка'].map((t, i) => (
        <React.Fragment key={i}>
          <Text x={540} y={252 + i * 30} w={210} size={10} weight={500} color="#1F2A09" z={4}>{t}</Text>
          <Check x={788} y={251 + i * 30} size={15} bg="#1F2A09" mark="#D8F995" z={4} />
        </React.Fragment>
      ))}
      <Text x={532.3} y={425.9} w={270} size={11} font="Unbounded" weight={500} color="#000000" z={3}>Итого: 590 900 ₽</Text>
      <Text x={529.8} y={451.9} w={258} size={9} weight={500} color="#999999" z={3}>Pay as you go</Text>
    </SlideStage>
  ),
};

// 28 — Дживио Агент: оплата за действие (Pay as you go)
const PAYG_LEFT = [
  { label: 'Ценообразование от Дживио AI', value: '1 ₽' }, { label: 'Ответы на отзыв с Дживио AI', value: '2 ₽' },
  { label: 'Ответы на вопросы с Дживио AI', value: '2 ₽' }, { label: 'Инсайты по продукту AI', value: '100 ₽' },
  { label: 'Ответы по шаблону', value: '2 ₽' },
];
const PAYG_MID = [
  '+ Кросс-продажи в ответах', '+ Определение тональности', '+ Анализ переходов', '+ Анализ добавления в корзину',
  '+ Анализ конверсий в корзину', '+ Анализ конверсий в заказ', '+ Анализ рейтинга', '+ Анализ последних отзывов', '+ Анализ СПП',
].map((l) => ({ label: l, value: '3 ₽' }));
const PAYG_RIGHT = [
  '+ Анализ маржи и маржинальности', '+ Анализ оборачиваемости', '+ Анализ истории продаж', '+ Анализ истории заказов',
  '+ Анализ остатка по всем складам', '+ Анализ остатка в резерве', '+ Анализ конверсии по РК', '+ Анализ просмотров по РК',
].map((l) => ({ label: l, value: '3 ₽' }));

const PaygSlide: React.FC<{ bgFile?: string }> = ({ bgFile }) => (
  <SlideStage background={bgFile ? bg(bgFile) : '#EFE9FB'}>
    <Card x={19} y={27} w={922} h={482} radius={0.04} background="#FFFFFF" border="1px solid #E7DEF2" />
    <Img x={49} y={40} w={60} h={18} file="img_cd7729d366e4.png" z={2} />
    <Text x={45} y={64} w={300} size={28} font="Unbounded" weight={600} color="#34034C" z={2}>Дживио Агент</Text>
    <Text x={45} y={104} w={233} size={12} weight={500} color="#8A7C97" z={2}>Оплата за действие (Pay as you go)</Text>
    <Abs x={19} y={316} w={922} z={2} style={{ borderTop: '1px solid #EFE6EE' }} />
    <PriceTable x={45} y={150} w={271} rows={PAYG_LEFT} rowH={31} labelColor="#34034C" />
    <PriceTable x={348} y={64} w={270} rows={PAYG_MID} rowH={28} labelColor="#8A7C97" />
    <PriceTable x={645} y={65} w={272} rows={PAYG_RIGHT} rowH={31} labelColor="#8A7C97" />

    {/* бренды */}
    <Abs x={45} y={333} w={22} h={22} z={2}><img src={img(D, 'img_a802b49a4b3b.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Abs>
    <Text x={75} y={336} w={300} size={13} font="Unbounded" weight={600} color="#34034C" z={2}>Выбирают крупнейшие бренды</Text>
    <Img x={45} y={373} w={299} h={117} file="img_e5b7d79cc7cd.png" z={2} />

    {/* оффер */}
    <Card x={506} y={360} w={325} h={117} radius={0.07} background="#34034C" z={2} />
    <Card x={525} y={376} w={291} h={26} radius={0.3} background="linear-gradient(90deg,#FF8FDA,#FFCFEF)" z={3} />
    <Text x={540} y={382} w={276} size={10} weight={600} color="#410031" align="center" z={4} style={{ whiteSpace: 'nowrap' }}>Специальное предложение до 27.02</Text>
    <Abs x={525} y={418} w={38} h={38} z={3}><img src={img(D, 'img_03f9809e5eaa.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Abs>
    <Text x={578} y={420} w={253} size={12} weight={600} color="#FFFFFF" z={3} lineHeight={1.25}>Вся сумма на баланс Агента в виде бонусов</Text>
    <JBadge deck={D} />
  </SlideStage>
);
export const Слайд28: S = { render: () => <PaygSlide /> };
export const Слайд29: S = { render: () => <PaygSlide /> };
export const Слайд30: S = { render: () => <PaygSlide /> };
export const Слайд31: S = { render: () => <PaygSlide /> };

// 32 — Финал: не упустите шанс
export const Слайд32: S = {
  render: () => (
    <SlideStage background={bg('bg_7ae225c42536.png')}>
      <Img x={18.9} y={18.9} w={279.6} h={43.4} file="img_e9562de5e27d.png" />
      {[
        { x: 443.0, w: 145.7, ic: 'img_2f38b399273f.png', icx: 465.9, tx: 490.0, t: 'Telegram' },
        { x: 596.6, w: 117.7, ic: 'img_a8b7f977a807.png', icx: 619.6, tx: 647.3, t: 'jvo.ru' },
        { x: 722.4, w: 218.7, ic: 'img_9791a9f8151e.png', icx: 749.7, tx: 775.4, t: '+7 499-322-09-33' },
      ].map((c, i) => (
        <React.Fragment key={i}>
          <Card x={c.x} y={18.9} w={c.w} h={58.2} radius={0.5} background="rgba(255,255,255,0.55)" border="1px solid rgba(65,0,49,0.18)" />
          <Abs x={c.icx} y={39.1} w={17.9} h={17.9} z={2}><img src={img(D, c.ic)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Abs>
          <Text x={c.tx} y={40} w={150} size={12} weight={500} color="#410031" z={2}>{c.t}</Text>
        </React.Fragment>
      ))}
      <Abs x={18.6} y={157.4} w={536.9} z={2}>
        <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(30), lineHeight: 1.15, letterSpacing: '-0.01em', color: '#410031' }}>
          Не упустите шанс повысить эффективность
        </div>
      </Abs>
    </SlideStage>
  ),
};

// 12 — «это больше, чем все платформы аналитики»
export const Слайд12: S = {
  render: () => (
    <SlideStage background={bg('bg_49b21cc1d9c0.png')}>
      <Img x={324.7} y={82.9} w={310.6} h={48.5} file="img_e9562de5e27d.png" />
      <Card x={228.6} y={196.6} w={504.8} h={41.7} radius={0.3268} background="linear-gradient(90deg,#FF8FDA,#FFCFEF)" z={1} />
      <Text x={145.8} y={156.3} w={668.5} size={28} font="Unbounded" weight={600} color="#410031" align="center" lineHeight={1.25} z={2}>
        это больше, чем все существующие платформы аналитики
      </Text>
      <JBadge deck={D} />
    </SlideStage>
  ),
};
