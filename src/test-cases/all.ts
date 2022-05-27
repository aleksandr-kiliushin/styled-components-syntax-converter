// @ts-nocheck - may need to be at the start of file
const Wrapper = styled('section', { shouldForwardProp: isPropValid })<{
  isMarketCardShown: boolean
}>(({ isMarketCardShown, theme }) => ({
  display: 'grid',
  gridTemplateAreas: "'market-card prices-card balances-card portfolio-card'",
  gridTemplateColumns: '372px 240px 144px 1fr',
  justifyContent: 'space-between',
  gap: '8px',
  paddingTop: '10px',
  paddingBottom: '32px',
  [theme.breakpoints.down('xxxl')]: {
    gridTemplateColumns: '340px 180px 144px 1fr',
  },
  [theme.breakpoints.down('xxl')]: {
    gridTemplateAreas: `
      'market-card prices-card balances-card'
      'portfolio-card portfolio-card portfolio-card';
    `,
    gridTemplateColumns: '5fr 3fr 2fr',
    maxWidth: '900px !important',
  },
  [theme.breakpoints.down('l')]: {
    gridTemplateAreas: `
      'actions actions'
      ${isMarketCardShown ? "'market-card market-card'" : ''}
      'prices-card balances-card'
      'portfolio-card portfolio-card';
    `,
    gridTemplateColumns: '2fr 1fr',
    width: 'unset',
    maxWidth: '640px !important',
  },
  [theme.breakpoints.down('m')]: {
    maxWidth: '100%',
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  [theme.breakpoints.down('s')]: {
    gridTemplateAreas: `
      'actions actions'
      ${isMarketCardShown ? "'market-card market-card'" : ''}
      'portfolio-card portfolio-card'
      'balances-card prices-card';
    `,
    gridTemplateColumns: '2fr 3fr',
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
}))

const Wrapper = styled('footer', { shouldForwardProp: isPropValid })<{
  isApp: boolean
  isMarketing: boolean
}>(({ isApp, isMarketing, theme }) => ({
  padding: '100px 0 60px',
  backgroundColor: isApp ? '#2f2b5f' : 'white',
  boxShadow: isMarketing
    ? '4px 4px 5px 0px #bdbdbd1a'
    : '4px -8px 30px rgba(182, 170, 215, 0.7)',
  borderRadius: isMarketing ? '20px' : 'none',
  margin: isMarketing ? '10px' : 'none',
  [theme.breakpoints.down('l')]: {
    padding: '44px 0',
  },
}))

const StyledAnchor = styled('a', { shouldForwardProp: isPropValid })<{
  isApp: boolean
  isActive: boolean
  isMarketing: boolean
}>(({ isActive, isApp, isMarketing }) => ({
  color: isActive ? '#68c6e6' : isApp ? '#3a3f41' : isMarketing ? '#272567' : 'white',
  fontSize: '14px',
  fontWeight: '700',
  transition: '0.15s',
  whiteSpace: 'nowrap',
  ':not(:last-of-type)': {
    paddingRight: '24px',
    borderRight: isApp ? '1px solid #def7ff' : '1px solid #2b297e',
  },
  ':not(:first-of-type)': {
    paddingLeft: '24px',
  },
  ':hover': {
    color: '#68c6e6',
    transform: 'scale(1.05)',
  },
  ':focus': {
    color: '#68c6e6',
  },
}))

const StyledDrawer = styled(Drawer, { shouldForwardProp: isPropValid })<{
  isApp: boolean
}>(({ isApp }) => ({
  '.MuiPaper-root': {
    background: isApp
      ? 'white'
      : 'linear-gradient(180.13deg, #2823ab 0.14%, #b6b4ff 87.78%)',
  },
}))

const MenuListItem = styled('li', { shouldForwardProp: isPropValid })<{
  isActive: boolean
  isApp: boolean
}>(({ isActive, isApp }) => ({
  a: {
    color: isActive ? '#68c6e6' : isApp ? '#3a3f41' : 'white',
    fontSize: '18px',
    fontWeight: '600',
  },
  'a:hover': {
    color: '#68c6e6',
  },
  '&:not(:last-child)': {
    paddingBottom: '24px',
    borderBottom: '1px solid #f3f3f3',
  },
}))

const WelcomeSectionContainer = styled('section')(({ theme }) => ({
  position: 'relative',
  paddingBottom: '70px',
  backgroundImage: 'linear-gradient(180deg, #2b2974 0%, #34338d 100%)',
  '&::before': {
    content: "''",
    position: 'absolute',
    height: '800px',
    width: '100vw',
    backgroundImage: 'url(/landing-welcome-desktop-background.svg)',
    backgroundPosition: 'right calc((100vw - 1520px) / 2) top -150px',
    backgroundRepeat: 'no-repeat',
    pointerEvents: 'none',
    transform: 'scale(1.25)',
  },
  [theme.breakpoints.down('xxl')]: {
    paddingBottom: '0',
    '&::before': {
      backgroundImage: 'url(/landing-pattern-mobile.png)',
      backgroundPosition: 'left 50% top 0',
      backgroundRepeat: 'no-repeat',
      transform: 'scale(1)',
    },
  },
}))

const WelcomeSectionContent = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: '1',
  display: 'grid',
  gridTemplateAreas: `
    'social-links'
    'heading'
    'sub-heading'
    'neuron-pools-description'
    'actions'
  `,
  maxWidth: '600px',
  paddingTop: '120px',
  [theme.breakpoints.down('xxl')]: {
    gridTemplateAreas: `
      'heading'
      'sub-heading'
      'neuron-pools-description'
      'social-links'
      'actions'
    `,
    maxWidth: 'initial',
    paddingTop: '60px',
    textAlign: 'center',
  },
}))

const ScrollToNextSectionAnchor = styled('a')(({ theme }) => ({
  display: 'block',
  width: 'fit-content',
  margin: '100px auto 0',
  svg: {
    fill: '#413da8',
    transition: 'fill 0.15s ease-in-out',
  },
  'svg:hover': {
    fill: '#bac1ff',
  },
  [theme.breakpoints.down('xxl')]: {
    display: 'none',
  },
}))

const CardsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: `
    'distribution option-pools security'
    'distribution option-pools single-assets'
  `,
  justifyContent: 'center',
  gridTemplateColumns: '14fr 18fr 20fr',
  gap: '28px',
  [theme.breakpoints.down('xl')]: {
    gridTemplateAreas: `
      'security'
      'distribution'
      'option-pools'
      'single-assets';
    `,
    gridTemplateColumns: 'initial',
    gap: '16px',
    marginTop: '24px',
  },
}))

const GoToAppButton = styled(Button)(({ theme }) => ({
  width: '182px',
  marginLeft: 'auto',
  color: '#332fbe',
  '&.Mui-disabled': {
    backgroundColor: '#afafaf',
    color: '#392b5f',
  },
  [theme.breakpoints.down('l')]: {
    display: 'none',
  },
}))

const NavigationAnchor = styled('a', { shouldForwardProp: isPropValid })<{
  isApp: boolean
  isDisabled: boolean
}>(({ isApp, isDisabled }) => ({
  color: isDisabled ? '#9797a1' : isApp ? '#68c6e6' : '#2f2b5f',
  fontSize: '14px',
  fontWeight: '700',
  transition: '0.15s',
  pointerEvents: isDisabled ? 'none' : 'unset',
  ':hover': {
    color: isApp ? 'white' : 'var(--main-light-blue)',
  },
}))

const Container = styled('header', { shouldForwardProp: isPropValid })<{
  isApp: boolean
  isMarketing: boolean
}>(({ isApp, isMarketing, theme }) => ({
  zIndex: '1',
  backgroundColor: isApp ? 'white' : isMarketing ? 'transparent ' : '#272567',
  boxShadow: isApp
    ? '0px 4px 30px 5px rgba(211, 211, 211, 0.2)'
    : isMarketing
    ? 'none'
    : '0px 4px 6px #23215f',
  [theme.breakpoints.down('l')]: {
    backgroundColor: isApp ? 'white' : '#2b2974',
    boxShadow: 'none',
  },
}))

const Card = styled('div', { shouldForwardProp: isPropValid })<Props>(
  ({
    hasDesktopIllustration = false,
    hasMobileAndDesktopIllustration = false,
    theme,
  }) => ({
    position:
      hasDesktopIllustration || hasMobileAndDesktopIllustration ? 'relative' : 'static',
    maxWidth: '500px',
    padding:
      hasDesktopIllustration || hasMobileAndDesktopIllustration
        ? '80px 24px 24px'
        : '24px',
    backgroundColor: '#2a2aae',
    border: '1px solid #3e66fb',
    borderRadius: '8px',
    [theme.breakpoints.down('xl')]: {
      paddingTop: hasMobileAndDesktopIllustration ? '80px' : '24px',
    },
  })
)

const CardIllustration = styled('img', { shouldForwardProp: isPropValid })<Props>(
  ({ desktopOnly = false, theme }) => ({
    position: 'absolute',
    left: '12px',
    top: '-36px',
    height: '128px',
    width: '128px',
    [theme.breakpoints.down('xl')]: {
      display: desktopOnly ? 'none' : 'block',
    },
  })
)

const Form = styled('form')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '228px 1fr 220px',
  gridTemplateAreas: "'token-select deposit-amount-input submit-button'",
  gap: '8px',
  [theme.breakpoints.down('l')]: {
    gridTemplateAreas: `
      'token-select'
      'deposit-amount-input'
      'submit-button'
    `,
    gridTemplateColumns: 'unset',
  },
}))

const StyledMoveToNeurButton = styled('button')({
  position: 'relative',
  display: 'block',
  height: '58px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(90deg, #EA7189 0%, rgba(40, 38, 104, 0.96) 61.77%, #282668 100%)',
  borderRadius: '8px',
  padding: '0 !important',
  color: 'white',
  fontWeight: '700',
  textTransform: 'uppercase',
  transition: '0.3s',
  boxShadow: '0px 4px 10px 0px #39383833',

  '::before': {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    content: '"MOVE TO NEURON"',
    textAlign: 'center',
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
    top: '0',
    opacity: '0',
    background: '#282668',
    borderRadius: 'inherit',
    transition: 'opacity 0.3s',
  },
  ':hover::before': {
    opacity: '1',
  },
})

const Wrapper = styled('div', { shouldForwardProp: isPropValid })<{
  withBorder: boolean
}>(({ withBorder }) => ({
  height: '100%',
  width: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
  background: `${
    withBorder ? 'linear-gradient(180deg, #E26E88 0%, #282668 100%)' : 'white'
  }`,
  borderRadius: '20px',

  boxShadow: '4px 4px 5px 0px #bdbdbd1a',
}))

const Wrapper = styled('header', { shouldForwardProp: isPropValid })<{
  strategyName: OptionStrategyName
}>(({ strategyName, theme }) => ({
  position: 'relative',
  zIndex: '1',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '32px',
  padding: '24px 32px',
  backgroundColor: strategyName === 'covered-call' ? '#fAf9ff' : '#f9fdff',
  border: '1px solid #f8f8f8',
  borderRadius: '8px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '16px',
  },
  [theme.breakpoints.down('l')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('s')]: {
    gap: '20px',
    padding: '12px',
  },
}))

const StrategyAndDeposit = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '80px auto',
  '::before': {
    position: 'absolute',
    zIndex: '-1',
    left: '-24px',
    top: '-16px',
    content: "''",
    height: 'calc(100% + 16px * 2)',
    width: 'calc(100% + 24px * 2)',
    backgroundColor: 'white',
    border: '1px solid #f8f9f9',
    borderRadius: '8px',
  },
  [theme.breakpoints.down('m')]: {
    gridTemplateColumns: '60px auto',
  },
  [theme.breakpoints.down('s')]: {
    '::before': {
      left: '-8px',
      top: '-8px',
      height: 'calc(100% + 8px * 2)',
      width: 'calc(100% + 8px * 2)',
    },
  },
}))

const StyledInfoTable = styled(InfoTable)(({ theme }) => ({
  width: '480px',
  padding: '24px 36px',
  td: { width: '50%', padding: '20px' },
  [theme.breakpoints.down('l')]: {
    'td:nth-of-type(1)': { width: '60%' },
    'td:nth-of-type(2)': { width: '40%' },
  },
  [theme.breakpoints.down('m')]: {
    width: '440px',
  },
  [theme.breakpoints.down('s')]: {
    width: '100%',
    padding: '16px',
    td: { padding: '8px' },
  },
  [theme.breakpoints.down('xxs')]: {
    tr: { display: 'flex', flexDirection: 'column' },
    td: { width: '100% !important', padding: '8px 0', border: 'none !important' },
  },
}))

const WidgetBlockInfoRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: '8px',
  padding: '24px 0 20px',
  borderBottom: '1px solid #f1f1f1',
  '& > div:nth-of-type(2)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  [theme.breakpoints.down('xl')]: {
    display: 'none',
  },
}))

const BackdropRow = styled(Row, { shouldForwardProp: isPropValid })<{
  isBorderShown: boolean
}>(({ isBorderShown }) => ({
  position: 'relative',
  zIndex: '1',
  margin: '16px 0',
  '::before': {
    position: 'absolute',
    zIndex: '-1',
    left: '-32px',
    top: '-20px',
    content: "''",
    height: 'calc(100% + 20px * 2)',
    width: 'calc(100% + 32px * 2)',
    backgroundColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: isBorderShown ? '#3e66fb' : 'transparent',
    borderRadius: '8px',
    boxShadow: '0px 0px 16px rgba(215, 215, 215, 0.25)',
  },
}))

const Wrapper = styled('div', { shouldForwardProp: isPropValid })<{ active: boolean }>(
  ({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('l')]: {
      gridArea: 'actions',
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '640px',
      margin: '0 auto',
    },
    [theme.breakpoints.down('s')]: {
      flexDirection: 'column-reverse',
      width: '240px',
    },
    [theme.breakpoints.down('xxs')]: {
      width: '100%',
    },
  })
)

const Chip = styled(Button, { shouldForwardProp: isPropValid })<{
  isActive?: boolean
}>(({ isActive }) => ({
  display: 'inline-block',
  height: '32px',
  minWidth: 'unset',
  padding: '0 16px',
  backgroundColor: isActive ? '#3e66fb' : '#f2f2f2',
  borderRadius: '16px',
  color: isActive ? 'white' : '#8d8d8d',
  fontSize: '12px',
  fontWeight: '700',
  textTransform: 'uppercase',
  transition: 'all 0.2s',
  ':hover': {
    color: 'white',
  },
  '& > svg': {
    height: '16px',
    width: '16px',
    fill: 'currentColor',
  },
}))

const Label = styled('div')(({ theme }) => ({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '20px 1fr 56px 56px',
  gap: '8px',
  width: '100%',
  padding: '6px 8px 6px 0',
  [theme.breakpoints.down('xs')]: {
    gridTemplateColumns: '20px repeat(7, 1fr)',
    width: '100%',
    '& > img': {
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
    },
    '& > p:nth-of-type(1)': {
      gridColumn: '2 / 9',
      gridRow: '1 / 2',
    },
    '& > p:nth-of-type(2)': {
      gridColumn: '1 / 4',
      gridRow: '2 / 3',
    },
    '& > p:nth-of-type(3)': {
      gridColumn: '4 / 9',
      gridRow: '2 / 3',
    },
  },
}))

const RadioGroupWrapper = styled(FormControl)(({ theme }) => ({
  width: '100%',
  '.MuiFormGroup-root': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '4px',
    flexWrap: 'nowrap',
    maxHeight: '256px',
    overflowY: 'auto',
  },
  '.MuiFormControlLabel-root': {
    flexShrink: '0',
    height: '52px',
  },
  '.MuiRadio-root': {
    margin: '0 8px',
    padding: '8px',
  },
  [theme.breakpoints.down('s')]: {
    '.MuiFormGroup-root': {
      maxHeight: 'unset',
    },
  },
  [theme.breakpoints.down('xs')]: {
    '.MuiFormControlLabel-root:not(:first-of-type)': {
      alignItems: 'start',
      height: '80px',
      paddingTop: '8px',
    },
  },
}))

const Option = styled('div')(({ theme }) => ({
  '& > input': {
    display: 'none',
  },
  '& > input:not(:checked) + label': {
    color: '#788185',
  },
  '& > input:not(:checked) + label:hover': {
    color: theme.palette.primary.main,
  },
  '& > input:checked + label': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}))

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '700px !important',
  button: { width: '100%', margin: '0 auto' },
  '& > *:not(:first-child)': {
    marginLeft: '8px',
  },
  [theme.breakpoints.down('s')]: {
    flexDirection: 'column-reverse',
    maxWidth: '360px !important',
    '& > *:not(:first-child)': {
      marginLeft: '0px',
    },
    '& > *:not(:last-child)': {
      marginTop: '8px',
    },
  },
  [theme.breakpoints.up('l')]: { display: 'none' },
}))

const Body = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '20px 40px',
  width: '100%',
  margin: '0 auto',
  [theme.breakpoints.down('s')]: { gridTemplateColumns: 'unset', maxWidth: '380px' },
}))

const StyledInfoTable = styled(InfoTable)(({ theme }) => ({
  padding: '16px',
  td: { width: '100%', padding: '16px' },
  [theme.breakpoints.down('s')]: {
    padding: '12px',
    td: { padding: '12px' },
  },
}))

const DurationButton = styled(MiniButton, { shouldForwardProp: isPropValid })<{
  isActive: boolean
}>(({ isActive, theme }) => ({
  backgroundColor: isActive ? theme.palette.primary.light : theme.palette.primary.main,
}))

const StyledButton = styled(ButtonBase)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '8px',
  maxWidth: '48px',
  '&:disabled': {
    filter: 'opacity(0.4)',
  },
})

const OuterWrapper = styled('div')({
  animation: `${tickerExpandKeyframes} 0.5s ease-in-out`,
  padding: '4px 0',
})

const InnerWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  float: 'left',
  whiteSpace: 'nowrap',
  animation: `${tickerMoveKeyframes} 100s linear 0.3s infinite`,
  '&:hover': {
    animationPlayState: 'paused',
  },
})

const AppSuffix = styled('p')({
  position: 'absolute',
  right: '0',
  top: '20%',
  color: '#9d9d9d',
  fontSize: '14px',
  fontWeight: '700',
  transform: 'translate(100%, -100%)',
})

const TransactionAnchor = styled('a')({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: 'var(--main-light-blue)',
  ':hover': {
    textDecoration: 'underline',
  },
})

export {}
