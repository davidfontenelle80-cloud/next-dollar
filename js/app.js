/**
 * app.js — Next Dollar
 * Personal Financial Coach — step-by-step EN/ES budget guide.
 * Bootstrapped by KHub shell (config.js, i18n.js, theme.js load first).
 */

// =====================================================================
// NEXT DOLLAR v2.0 — Full Financial Coach
// =====================================================================

// ── Icon / PWA meta (injected at runtime) ─────────────────────────
var APP_ICON = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFhMmU0YSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBkNGEyZSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJnb2xkIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjVjODQyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzg5NjBhIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9InVybCgjYmcpIi8+CiAgPGVsbGlwc2UgY3g9IjMyIiBjeT0iNTAiIHJ4PSIxNiIgcnk9IjUiIGZpbGw9InVybCgjZ29sZCkiLz48cmVjdCB4PSIxNiIgeT0iNDQiIHdpZHRoPSIzMiIgaGVpZ2h0PSI3IiByeD0iMSIgZmlsbD0idXJsKCNnb2xkKSIvPjxlbGxpcHNlIGN4PSIzMiIgY3k9IjQ0IiByeD0iMTYiIHJ5PSI1IiBmaWxsPSIjZjVjODQyIi8+CiAgPGVsbGlwc2UgY3g9IjMyIiBjeT0iNDAiIHJ4PSIxMyIgcnk9IjQiIGZpbGw9InVybCgjZ29sZCkiLz48cmVjdCB4PSIxOSIgeT0iMzUiIHdpZHRoPSIyNiIgaGVpZ2h0PSI2IiByeD0iMSIgZmlsbD0idXJsKCNnb2xkKSIvPjxlbGxpcHNlIGN4PSIzMiIgY3k9IjM1IiByeD0iMTMiIHJ5PSI0IiBmaWxsPSIjZjVjODQyIi8+CiAgPGVsbGlwc2UgY3g9IjMyIiBjeT0iMzEiIHJ4PSIxMCIgcnk9IjMuNSIgZmlsbD0idXJsKCNnb2xkKSIvPjxyZWN0IHg9IjIyIiB5PSIyNyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjUiIHJ4PSIxIiBmaWxsPSJ1cmwoI2dvbGQpIi8+PGVsbGlwc2UgY3g9IjMyIiBjeT0iMjciIHJ4PSIxMCIgcnk9IjMuNSIgZmlsbD0iI2Y1Yzg0MiIvPgogIDxsaW5lIHgxPSIzMiIgeTE9IjEwIiB4Mj0iMzIiIHkyPSIyNyIgc3Ryb2tlPSIjNGFkZTgwIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPHBhdGggZD0iTTMyIDEwIEw0NCAxNSBMMzIgMjAgWiIgZmlsbD0iIzIyYzU1ZSIvPgo8L3N2Zz4=";

// ── Strings (EN / ES) ────────────────────────────────────────────
var S = {
en:{
  tag:"Financial Coach", wsub:"Get the full picture of your money. We calculate your true surplus, score your financial health, map your next dollar on the Money Ladder, and give you a clear path to early retirement.",
  wyg:"What you get",
  f1t:"Financial Health Score", f1d:"A 0–100 score across 5 dimensions — see exactly where you stand",
  f2t:"Your Money Ladder", f2d:"A personalized 7-rung plan showing your next dollar's best home",
  f3t:"Spending Plan + Debt Comparison", f3d:"Three payoff strategies side by side, and a 4-bucket spending split",
  f4t:"Investing Roadmap + Bridge Calculator", f4d:"Account order, age-based allocation, and your early-retirement bridge target",
  btnStart:"Get my full financial picture →", importLnk:"Load a saved plan",
  noacct:"Nothing saved or shared. All numbers stay in your browser.",
  s1tag:"Step 1 of 6", s1h:"Your income", s1sub:"Enter your monthly take-home pay — the amount that hits your bank after taxes and deductions.",
  lTakehome:"Monthly take-home (after taxes)", lPayfreq:"Pay schedule",
  freqMonthly:"Monthly", freqSemiMonthly:"Semi-monthly (twice/mo)", freqBiweekly:"Bi-weekly (every 2 weeks)", freqWeekly:"Weekly",
  errS1:"Enter your monthly take-home pay.",
  s2tag:"Step 2 of 6", s2h:"Your monthly expenses", s2sub:"Estimate what you actually spend — be honest. Debt minimums come next.",
  lHousing:"Housing (rent or mortgage + insurance)", lFood:"Food (groceries + dining out)",
  lTransport:"Transportation (car, gas, insurance, transit)", lUtilities:"Utilities + subscriptions (phone, streaming, etc.)", lFunspend:"Fun & lifestyle (entertainment, clothing, misc.)",
  errS2:"Fill in at least one expense.",
  s3tag:"Step 3 of 6", s3h:"Your debts", s3sub:"Add every debt with its minimum payment. Skip your mortgage for now.",
  nick:"Name", bal:"Balance", rate:"Rate", minPay:"Min/mo", nickPh:"Chase Visa, Car loan...",
  addDebt:"+ Add another debt", errS3:"Fill in balance and rate for every debt.", surplusPreview:"Your estimated monthly surplus after bills and minimums",
  s4tag:"Step 4 of 6", s4h:"Your savings snapshot", s4sub:"What you have saved and invested right now — best estimate is fine.",
  lCash:"Cash buffer (checking/savings, quick access)", lEfund:"Emergency fund (separate, dedicated savings)", lRetirement:"Retirement accounts total (401k, Roth IRA, etc.)", lBrokerage:"Taxable brokerage / investments",
  s5tag:"Step 5 of 6", s5h:"Benefits & goals", s5sub:"A few questions about your job benefits and retirement target.",
  lHasmatch:"My employer offers a 401k match", lMatchpct:"Employer matches ___% of my contribution", lMatchupto:"Up to ___% of my salary", lMycontrib:"I currently contribute ___% of my salary",
  lHasroth:"I can contribute to a Roth IRA (income under limit)", lGoalsH:"Retirement goal",
  lRetireage:"Target retirement age", lYrs:"yrs old", lTargetspend:"Annual spending in retirement",
  s6tag:"Step 6 of 6", s6h:"What keeps you going?", s6sub:"Be honest — the best strategy is the one you actually stick with.",
  p1h:"Quick wins", p1p:"I need to see a debt disappear fast. Momentum beats math for me.",
  p2h:"Save the most", p2p:"I want the lowest total interest. I will stay the course even if the first win takes longer.",
  p3h:"Free up monthly cash", p3p:"My budget is tight. I want the most breathing room as fast as possible.",
  errS6:"Pick one to see your results.",
  back:"← Back", next:"Next →", seePlan:"See my full plan →",
  navOverview:"Overview", navDebt:"Debt", navLadder:"Ladder", navPlan:"Plan", navInvest:"Invest",
  scoreTag:"Financial Health", scoreExcellent:"Excellent", scoreGood:"Good", scoreFair:"Fair", scoreNeeds:"Needs Work",
  scoreDimEf:"Emergency fund", scoreDimDti:"Debt load", scoreDimSave:"Savings rate", scoreDimMatch:"Match capture", scoreDimInvest:"Investment rate",
  paycheckTag:"Paycheck Planner", paycheckH:"Split your next paycheck",
  paycheckSub:"Enter a paycheck and see exactly how to divide it.", paycheckFixed:"Fixed bills (your share)", paycheckDebt:"Debt minimums", paycheckLadder:"Ladder priority", paycheckFun:"Yours to spend",
  whatifTag:"What-If", whatifH:"See the impact of a little more",
  whatifSub:"Move the slider to add extra per month and watch what changes.", whatifSlider:"Extra per month",
  whatifFaster:"Debt-free sooner", whatifSavings:"Emergency fund sooner",
  debtTag:"Debt Comparison", ladderTag:"Money Ladder", ladderH:"Your 7-rung plan", ladderSub:"Each rung is a milestone. Complete them in order — we show you where you are.",
  planTag:"Spending Plan", planH:"Your 4-bucket split", planSub:"How your take-home is currently allocated vs. the targets.",
  investTag:"Investing", investH:"Your investing roadmap", investSub:"Account priority order based on your situation, plus your age-based allocation.",
  acctPriorityH:"Account priority — put money here first:",
  allocTag:"Suggested allocation", allocH:"Based on your age and timeline",
  rung1t:"Safety buffer", rung1d:"$1,000 cash + your largest insurance deductible",
  rung2t:"Capture the employer match", rung2d:"Contribute enough to get every dollar of free match money",
  rung3t:"Kill high-interest debt", rung3d:"All debts above 7% interest — using your chosen method",
  rung4t:"Full emergency fund", rung4d:"3–6 months of living expenses in liquid cash",
  rung5t:"Max tax-advantaged accounts", rung5d:"Roth IRA, HSA, then 401k — in that priority order",
  rung6t:"Build the bridge", rung6d:"Taxable brokerage to cover the years before age 59½",
  rung7t:"Build wealth", rung7d:"Low-rate debt payoff + long-term wealth accumulation",
  complete:"Complete", current:"Your next focus", locked:"Complete earlier rungs first",
  bridgeTarget:"Bridge account target", bridgeNote:"Money in taxable brokerage to cover the gap between your target retirement age and age 59½, when retirement accounts unlock without penalty.",
  bucketNeeds:"Needs & fixed costs", bucketInvest:"Investing", bucketSave:"Savings goals", bucketFun:"Yours to spend",
  targetRange:"Target", over:"Over", under:"Under", onTarget:"On target",
  planNeedsNote:"Housing, food, transport, utilities", planInvestNote:"Retirement + brokerage contributions", planSaveNote:"Emergency fund + goal savings", planFunNote:"Lifestyle, dining, entertainment",
  acct1t:"401k — up to full match", acct1d:"Never leave free money on the table",
  acct2t:"Roth IRA — max it ($7,000/yr)", acct2d:"Tax-free growth; best vehicle for early retirement",
  acct3t:"HSA — max it ($4,300/yr)", acct3d:"Triple tax advantage; use for healthcare or invest",
  acct4t:"401k — remaining space ($23,500/yr)", acct4d:"Max out after Roth and HSA are funded",
  acct5t:"Taxable brokerage (bridge account)", acct5d:"No age lock — essential for retiring before 59½",
  allocStocks:"Stocks", allocBonds:"Bonds", allocIntl:"International",
  planPfx:"Your plan: ", yourPick:"Your pick",
  lInterest:"Total interest", lFree:"Debt-free", lFirst:"First debt gone", lCash2:"Cash freed when done", lOrder:"Payoff order",
  tagBest:"Best", tagFast:"Fastest", mSnow:"Smallest Balance", tSnow:"Momentum over math",
  mAval:"Highest Rate", tAval:"Minimum interest paid", mCash:"Cash Flow First", tCash:"Most monthly relief",
  over50:"50+ yrs", debtLbl:"Debt ",
  export:"Export plan", print:"Save as PDF",
  disc:"Educational only — not personalized financial or investment advice. Projections are estimates based on the information you entered.",
  restart:"← Start over"
},
es:{
  tag:"Entrenador Financiero", wsub:"Obtén el panorama completo de tu dinero. Calculamos tu excedente real, calificamos tu salud financiera, mapeamos tu próximo dólar y trazamos un camino hacia el retiro anticipado.",
  wyg:"Lo que obtienes",
  f1t:"Puntaje de Salud Financiera", f1d:"Un puntaje de 0–100 en 5 dimensiones — ve exactamente dónde estás",
  f2t:"Tu Escalera del Dinero", f2d:"Un plan de 7 peldaños que muestra el mejor destino para tu próximo dólar",
  f3t:"Plan de Gastos + Comparación de Deudas", f3d:"Tres estrategias de pago lado a lado y una división de 4 cubetas",
  f4t:"Hoja de Ruta de Inversión + Calculadora Puente", f4d:"Orden de cuentas, asignación por edad y tu objetivo de retiro anticipado",
  btnStart:"Ver mi panorama financiero completo →", importLnk:"Cargar un plan guardado",
  noacct:"Nada se guarda ni se comparte. Los números permanecen en tu navegador.",
  s1tag:"Paso 1 de 6", s1h:"Tus ingresos", s1sub:"Ingresa tu salario mensual neto — la cantidad que llega a tu banco después de impuestos.",
  lTakehome:"Salario mensual neto (después de impuestos)", lPayfreq:"Frecuencia de pago",
  freqMonthly:"Mensual", freqSemiMonthly:"Quincenal (dos veces/mes)", freqBiweekly:"Cada dos semanas", freqWeekly:"Semanal",
  errS1:"Ingresa tu salario mensual neto.",
  s2tag:"Paso 2 de 6", s2h:"Tus gastos mensuales", s2sub:"Estima lo que realmente gastas. Los mínimos de deudas vienen después.",
  lHousing:"Vivienda (renta o hipoteca + seguro)", lFood:"Alimentos (compras + comidas fuera)",
  lTransport:"Transporte (auto, gasolina, seguro, transporte público)", lUtilities:"Servicios + suscripciones (teléfono, streaming, etc.)", lFunspend:"Entretenimiento y estilo de vida",
  errS2:"Completa al menos un gasto.",
  s3tag:"Paso 3 de 6", s3h:"Tus deudas", s3sub:"Agrega cada deuda con su pago mínimo. Omite la hipoteca por ahora.",
  nick:"Nombre", bal:"Saldo", rate:"Tasa", minPay:"Mín/mes", nickPh:"Visa Chase, Préstamo auto...",
  addDebt:"+ Agregar otra deuda", errS3:"Completa saldo y tasa para cada deuda.", surplusPreview:"Tu excedente mensual estimado después de gastos y mínimos",
  s4tag:"Paso 4 de 6", s4h:"Tu panorama de ahorros", s4sub:"Lo que tienes ahorrado e invertido ahora — una estimación aproximada está bien.",
  lCash:"Colchón de efectivo (acceso rápido)", lEfund:"Fondo de emergencia (ahorros separados)", lRetirement:"Total en cuentas de retiro (401k, Roth IRA, etc.)", lBrokerage:"Inversiones en cuenta de corretaje",
  s5tag:"Paso 5 de 6", s5h:"Beneficios y metas", s5sub:"Preguntas sobre los beneficios de tu trabajo y tu meta de retiro.",
  lHasmatch:"Mi empleador ofrece un match de 401k", lMatchpct:"El empleador iguala el ___% de mi contribución", lMatchupto:"Hasta el ___% de mi salario", lMycontrib:"Actualmente contribuyo el ___% de mi salario",
  lHasroth:"Puedo contribuir a una Roth IRA (ingreso bajo el límite)", lGoalsH:"Meta de retiro",
  lRetireage:"Edad de retiro objetivo", lYrs:"años", lTargetspend:"Gasto anual en el retiro",
  s6tag:"Paso 6 de 6", s6h:"¿Qué te mantiene en camino?", s6sub:"Sé honesto — la mejor estrategia es la que realmente seguirás.",
  p1h:"Victorias rápidas", p1p:"Necesito ver que una deuda desaparece rápido. El impulso me gana a los cálculos.",
  p2h:"Ahorrar al máximo", p2p:"Quiero pagar el menor interés total. Me mantendré aunque tarde más en ver la primera victoria.",
  p3h:"Liberar efectivo mensual", p3p:"Mi presupuesto es ajustado. Quiero el mayor respiro económico lo antes posible.",
  errS6:"Elige una opción para ver tus resultados.",
  back:"← Atrás", next:"Siguiente →", seePlan:"Ver mi plan completo →",
  navOverview:"Resumen", navDebt:"Deudas", navLadder:"Escalera", navPlan:"Plan", navInvest:"Invertir",
  scoreTag:"Salud Financiera", scoreExcellent:"Excelente", scoreGood:"Bueno", scoreFair:"Regular", scoreNeeds:"Necesita Trabajo",
  scoreDimEf:"Fondo de emergencia", scoreDimDti:"Carga de deudas", scoreDimSave:"Tasa de ahorro", scoreDimMatch:"Captura del match", scoreDimInvest:"Tasa de inversión",
  paycheckTag:"Planificador de Cheque", paycheckH:"Divide tu próximo cheque",
  paycheckSub:"Ingresa un cheque y ve exactamente cómo dividirlo.", paycheckFixed:"Gastos fijos (tu parte)", paycheckDebt:"Mínimos de deudas", paycheckLadder:"Prioridad de la escalera", paycheckFun:"Para gastar",
  whatifTag:"¿Y si...?", whatifH:"Ve el impacto de un poco más",
  whatifSub:"Mueve el control para agregar extra mensual.", whatifSlider:"Extra por mes",
  whatifFaster:"Sin deudas antes", whatifSavings:"Fondo de emergencia antes",
  debtTag:"Comparación de Deudas", ladderTag:"Escalera del Dinero", ladderH:"Tu plan de 7 peldaños", ladderSub:"Cada peldaño es un hito. Completa en orden — te mostramos dónde estás.",
  planTag:"Plan de Gastos", planH:"Tu división en 4 cubetas", planSub:"Cómo se asigna tu salario actual vs. los objetivos.",
  investTag:"Inversión", investH:"Tu hoja de ruta de inversión", investSub:"Orden de prioridad de cuentas y asignación sugerida por edad.",
  acctPriorityH:"Prioridad de cuentas — pon dinero aquí primero:",
  allocTag:"Asignación sugerida", allocH:"Basada en tu edad y horizonte",
  rung1t:"Colchón de seguridad", rung1d:"$1,000 en efectivo + tu deducible de seguro más alto",
  rung2t:"Captura el match del empleador", rung2d:"Contribuye lo suficiente para obtener cada dólar de dinero gratis",
  rung3t:"Elimina deudas de alto interés", rung3d:"Todas las deudas por encima del 7% usando tu método elegido",
  rung4t:"Fondo de emergencia completo", rung4d:"3–6 meses de gastos de vida en efectivo líquido",
  rung5t:"Maximiza cuentas con ventajas fiscales", rung5d:"Roth IRA, HSA, luego 401k — en ese orden de prioridad",
  rung6t:"Construye el puente", rung6d:"Corretaje gravable para cubrir los años antes de los 59½",
  rung7t:"Construye riqueza", rung7d:"Pago de deudas de bajo interés + acumulación de riqueza a largo plazo",
  complete:"Completado", current:"Tu próximo enfoque", locked:"Completa los peldaños anteriores primero",
  bridgeTarget:"Objetivo de la cuenta puente", bridgeNote:"Dinero en corretaje gravable para cubrir la brecha entre tu edad de retiro objetivo y los 59½, cuando las cuentas de retiro se desbloquean sin penalidad.",
  bucketNeeds:"Necesidades y gastos fijos", bucketInvest:"Inversión", bucketSave:"Metas de ahorro", bucketFun:"Para gastar",
  targetRange:"Objetivo", over:"Exceso", under:"Por debajo", onTarget:"En objetivo",
  planNeedsNote:"Vivienda, comida, transporte, servicios", planInvestNote:"Contribuciones a retiro + corretaje", planSaveNote:"Fondo de emergencia + metas de ahorro", planFunNote:"Estilo de vida, entretenimiento",
  acct1t:"401k — hasta el match completo", acct1d:"Nunca dejes dinero gratis sobre la mesa",
  acct2t:"Roth IRA — maximízala ($7,000/año)", acct2d:"Crecimiento libre de impuestos; mejor vehículo para retiro anticipado",
  acct3t:"HSA — maximízala ($4,300/año)", acct3d:"Triple ventaja fiscal; para salud o invertir",
  acct4t:"401k — espacio restante ($23,500/año)", acct4d:"Maximiza después de Roth y HSA",
  acct5t:"Corretaje gravable (cuenta puente)", acct5d:"Sin bloqueo de edad — esencial para retirarse antes de los 59½",
  allocStocks:"Acciones", allocBonds:"Bonos", allocIntl:"Internacional",
  planPfx:"Tu plan: ", yourPick:"Tu elección",
  lInterest:"Interés total", lFree:"Sin deudas", lFirst:"Primera deuda pagada", lCash2:"Efectivo liberado", lOrder:"Orden de pago",
  tagBest:"Mejor", tagFast:"Más rápido", mSnow:"Saldo más pequeño", tSnow:"Impulso antes que cálculos",
  mAval:"Tasa más alta", tAval:"Mínimo interés pagado", mCash:"Flujo de efectivo primero", tCash:"Máximo alivio mensual",
  over50:"50+ años", debtLbl:"Deuda ",
  export:"Exportar plan", print:"Guardar como PDF",
  disc:"Solo educativo — no es asesoramiento financiero o de inversión personalizado. Las proyecciones son estimaciones basadas en la información que ingresaste.",
  restart:"← Empezar de nuevo"
}
};

// ── State ────────────────────────────────────────────────────────
var state = {
  takeHome:0, payFreq:"biweekly",
  housing:0, food:0, transport:0, utilities:0, funspend:0,
  debts:[],
  cash:0, efund:0, retirement:0, brokerage:0,
  hasMatch:false, matchPct:100, matchUpto:4, myContrib:0,
  hasRoth:false,
  retireAge:55, targetSpend:60000,
  personality:null,
  step:0
};

// ── Language ────────────────────────────────────────────────────
var lang = "en";
var theme = "system";

function t(k){ return (S[lang]||S.en)[k]||k; }

function applyStrings(){
  var m = {
    "lbl-tag":"tag","lbl-wsub":"wsub","lbl-wyg":"wyg",
    "lbl-f1t":"f1t","lbl-f1d":"f1d","lbl-f2t":"f2t","lbl-f2d":"f2d","lbl-f3t":"f3t","lbl-f3d":"f3d","lbl-f4t":"f4t","lbl-f4d":"f4d",
    "btn-start":"btnStart","lbl-import":"importLnk","lbl-noacct":"noacct",
    "lbl-s1tag":"s1tag","lbl-s1h":"s1h","lbl-s1sub":"s1sub",
    "lbl-takehome":"lTakehome","lbl-payfreq":"lPayfreq",
    "opt-monthly":"freqMonthly","opt-semimonthly":"freqSemiMonthly","opt-biweekly":"freqBiweekly","opt-weekly":"freqWeekly",
    "err-s1":"errS1","btn-b1":"back","btn-n1":"next",
    "lbl-s2tag":"s2tag","lbl-s2h":"s2h","lbl-s2sub":"s2sub",
    "lbl-housing":"lHousing","lbl-food":"lFood","lbl-transport":"lTransport","lbl-utilities":"lUtilities","lbl-funspend":"lFunspend",
    "err-s2":"errS2","btn-b2":"back","btn-n2":"next",
    "lbl-s3tag":"s3tag","lbl-s3h":"s3h","lbl-s3sub":"s3sub",
    "btn-add-debt":"addDebt","err-s3":"errS3","lbl-surplus-preview":"surplusPreview",
    "btn-b3":"back","btn-n3":"next",
    "lbl-s4tag":"s4tag","lbl-s4h":"s4h","lbl-s4sub":"s4sub",
    "lbl-cash":"lCash","lbl-efund":"lEfund","lbl-retirement":"lRetirement","lbl-brokerage":"lBrokerage",
    "btn-b4":"back","btn-n4":"next",
    "lbl-s5tag":"s5tag","lbl-s5h":"s5h","lbl-s5sub":"s5sub",
    "lbl-hasmatch":"lHasmatch","lbl-matchpct":"lMatchpct","lbl-matchupto":"lMatchupto","lbl-mycontrib":"lMycontrib",
    "lbl-hasroth":"lHasroth","lbl-goals-h":"lGoalsH",
    "lbl-retireage":"lRetireage","lbl-yrs":"lYrs","lbl-targetspend":"lTargetspend",
    "btn-b5":"back","btn-n5":"next",
    "lbl-s6tag":"s6tag","lbl-s6h":"s6h","lbl-s6sub":"s6sub",
    "lbl-p1h":"p1h","lbl-p1p":"p1p","lbl-p2h":"p2h","lbl-p2p":"p2p","lbl-p3h":"p3h","lbl-p3p":"p3p",
    "err-s6":"errS6","btn-b6":"back","btn-n6":"seePlan",
    "lbl-score-tag":"scoreTag",
    "lbl-paycheck-tag":"paycheckTag","lbl-paycheck-h":"paycheckH","lbl-paycheck-sub":"paycheckSub",
    "lbl-whatif-tag":"whatifTag","lbl-whatif-h":"whatifH","lbl-whatif-sub":"whatifSub","lbl-whatif-slider":"whatifSlider",
    "lbl-debt-tag":"debtTag",
    "lbl-ladder-tag":"ladderTag","lbl-ladder-h":"ladderH","lbl-ladder-sub":"ladderSub",
    "lbl-plan-tag":"planTag","lbl-plan-h":"planH","lbl-plan-sub":"planSub",
    "lbl-invest-tag":"investTag","lbl-invest-h":"investH","lbl-invest-sub":"investSub","lbl-acct-priority-h":"acctPriorityH",
    "lbl-alloc-tag":"allocTag","lbl-alloc-h":"allocH",
    "lbl-export":"export","lbl-print":"print","lbl-disc":"disc","btn-restart":"restart",
    "nav-overview":"navOverview","nav-debt":"navDebt","nav-ladder":"navLadder","nav-plan":"navPlan","nav-invest":"navInvest"
  };
  Object.keys(m).forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.textContent = t(m[id]);
  });
}

function toggleLang(){
  lang = lang==="en"?"es":"en";
  document.getElementById("langBtn").textContent = lang==="en"?"ES":"EN";
  document.documentElement.lang = lang;
  applyStrings();
  if(state.step===3) renderDebtList();
  if(state.step===7) renderAllResults();
}

// ── Theme ────────────────────────────────────────────────────────
var TICONS = {system:"&#128187;",dark:"&#127769;",light:"&#9728;"};
var TCYCLE = ["system","dark","light"];

function applyTheme(){
  var eff = theme==="system"
    ? (window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")
    : theme;
  document.documentElement.setAttribute("data-theme",eff);
  document.getElementById("themeBtn").innerHTML = TICONS[theme];
}
function cycleTheme(){ theme=TCYCLE[(TCYCLE.indexOf(theme)+1)%TCYCLE.length]; applyTheme(); }

// ── Navigation ───────────────────────────────────────────────────
var SCREENS = ["welcome","s1","s2","s3","s4","s5","s6","results"];

function goTo(n){
  document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("active");});
  document.getElementById("screen-"+SCREENS[n]).classList.add("active");
  state.step = n;
  updateProgress(n);
  window.scrollTo(0,0);
  if(n===3) renderDebtList();
  if(n===7){ renderAllResults(); document.getElementById("bottomNav").classList.add("visible"); }
  else     { document.getElementById("bottomNav").classList.remove("visible"); }
}

function updateProgress(n){
  var bar = document.getElementById("progressBar");
  if(n===0||n===7){ bar.classList.add("hidden"); return; }
  bar.classList.remove("hidden");
  for(var i=0;i<6;i++){
    var d = document.getElementById("dot"+i);
    d.className = "prog-dot";
    if(i+1===n) d.classList.add("active");
    else if(i+1<n) d.classList.add("done");
  }
}

function switchTab(tab){
  document.querySelectorAll(".results-screen").forEach(function(s){s.classList.remove("active");});
  document.getElementById("tab-"+tab).classList.add("active");
  document.querySelectorAll(".nav-tab").forEach(function(b){
    b.classList.toggle("active", b.getAttribute("data-tab")===tab);
  });
}

function restart(){
  state = {takeHome:0,payFreq:"biweekly",housing:0,food:0,transport:0,utilities:0,funspend:0,
    debts:[],cash:0,efund:0,retirement:0,brokerage:0,hasMatch:false,matchPct:100,matchUpto:4,
    myContrib:0,hasRoth:false,retireAge:55,targetSpend:60000,personality:null,step:0};
  document.querySelectorAll("input[type=number]").forEach(function(i){i.value="";});
  document.getElementById("inp-hasmatch").checked=false;
  document.getElementById("inp-hasroth").checked=false;
  toggleMatchFields();
  goTo(0);
}

// ── Wizard validators ────────────────────────────────────────────
function nextS1(){
  var v = parseFloat(document.getElementById("inp-takehome").value);
  if(isNaN(v)||v<=0){ showErr("err-s1"); return; }
  clearErr("err-s1");
  state.takeHome = v;
  state.payFreq = document.getElementById("inp-payfreq").value;
  goTo(2);
}
function nextS2(){
  state.housing   = pf("inp-housing");
  state.food      = pf("inp-food");
  state.transport = pf("inp-transport");
  state.utilities = pf("inp-utilities");
  state.funspend  = pf("inp-funspend");
  if(state.housing+state.food+state.transport+state.utilities+state.funspend===0){ showErr("err-s2"); return; }
  clearErr("err-s2");
  goTo(3);
}
function nextS3(){
  var ok = state.debts.length===0 || state.debts.every(function(d){return parseFloat(d.balance)>0&&parseFloat(d.rate)>=0;});
  if(!ok){ showErr("err-s3"); return; }
  clearErr("err-s3");
  goTo(4);
}
function nextS4(){
  state.cash       = pf("inp-cash");
  state.efund      = pf("inp-efund");
  state.retirement = pf("inp-retirement");
  state.brokerage  = pf("inp-brokerage");
  goTo(5);
}
function nextS5(){
  state.hasMatch  = document.getElementById("inp-hasmatch").checked;
  state.matchPct  = pf("inp-matchpct")||100;
  state.matchUpto = pf("inp-matchupto")||4;
  state.myContrib = pf("inp-mycontrib")||0;
  state.hasRoth   = document.getElementById("inp-hasroth").checked;
  state.retireAge = pf("inp-retireage")||55;
  state.targetSpend = pf("inp-targetspend")||60000;
  goTo(6);
}
function nextS6(){
  if(!state.personality){ showErr("err-s6"); return; }
  clearErr("err-s6");
  goTo(7);
}

function toggleMatchFields(){
  var checked = document.getElementById("inp-hasmatch").checked;
  document.getElementById("match-fields").style.display = checked?"flex":"none";
}
function selectP(type){
  state.personality=type;
  ["snowball","avalanche","cashflow"].forEach(function(tp){
    document.getElementById("opt-"+tp).classList.toggle("selected",tp===type);
  });
}
function showErr(id){ var el=document.getElementById(id); if(el){el.classList.add("show");} }
function clearErr(id){ var el=document.getElementById(id); if(el){el.classList.remove("show");} }
function pf(id){ return parseFloat(document.getElementById(id).value)||0; }

// ── Debt list ────────────────────────────────────────────────────
function newDebt(){ return {name:"",balance:"",rate:"",min:""}; }
function addDebt(){ state.debts.push(newDebt()); renderDebtList(); }
function removeDebt(i){ if(state.debts.length<=1)return; state.debts.splice(i,1); renderDebtList(); }

function renderDebtList(){
  var list = document.getElementById("debt-list");
  list.innerHTML = "";
  state.debts.forEach(function(d,i){
    var row = document.createElement("div");
    row.className = "debt-row";
    var rm = state.debts.length>1?"<button class=\"btn-remove\" onclick=\"removeDebt("+i+")\">&times;</button>":"";
    row.innerHTML =
      "<div class=\"debt-row-header\"><span class=\"debt-row-num\">"+t("debtLbl")+(i+1)+"</span>"+rm+"</div>"+
      "<div class=\"debt-grid\">"+
        "<div class=\"field-group\"><div class=\"field-label\">"+t("nick")+"</div>"+
          "<input type=\"text\" placeholder=\""+esc(t("nickPh"))+"\" value=\""+esc(d.name)+"\" oninput=\"state.debts["+i+"].name=this.value\"></div>"+
        "<div class=\"field-group\"><div class=\"field-label\">"+t("bal")+"</div>"+
          "<div class=\"input-wrap has-prefix\"><span class=\"input-prefix\">$</span>"+
          "<input type=\"number\" placeholder=\"5000\" min=\"1\" inputmode=\"decimal\" value=\""+esc(d.balance)+"\" oninput=\"state.debts["+i+"].balance=this.value\"></div></div>"+
        "<div class=\"field-group\"><div class=\"field-label\">"+t("rate")+"</div>"+
          "<div class=\"input-wrap has-suffix\"><input type=\"number\" placeholder=\"22.9\" min=\"0\" max=\"100\" step=\"0.1\" inputmode=\"decimal\" value=\""+esc(d.rate)+"\" oninput=\"state.debts["+i+"].rate=this.value\">"+
          "<span class=\"input-suffix\">%</span></div></div>"+
        "<div class=\"field-group\"><div class=\"field-label\">"+t("minPay")+"</div>"+
          "<div class=\"input-wrap has-prefix\"><span class=\"input-prefix\">$</span>"+
          "<input type=\"number\" placeholder=\"125\" min=\"0\" inputmode=\"decimal\" value=\""+esc(d.min)+"\" oninput=\"state.debts["+i+"].min=this.value\"></div></div>"+
      "</div>";
    list.appendChild(row);
  });
  updateSurplusPreview();
}

function updateSurplusPreview(){
  var surplus = calcSurplus(state);
  var preview = document.getElementById("surplus-preview");
  var val = document.getElementById("surplus-val");
  if(state.debts.length>0 && state.takeHome>0){
    preview.style.display="block";
    val.textContent = fmt(surplus) + "/mo";
    val.className = surplus>=0?"val-green":"val-red";
  } else {
    preview.style.display="none";
  }
}

// ── CALC ENGINES ─────────────────────────────────────────────────
function calcMonthlyExpenses(s){
  return (s.housing||0)+(s.food||0)+(s.transport||0)+(s.utilities||0)+(s.funspend||0);
}
function calcMinPayments(s){
  return s.debts.reduce(function(sum,d){return sum+(parseFloat(d.min)||0);},0);
}
function calcSurplus(s){
  return s.takeHome - calcMonthlyExpenses(s) - calcMinPayments(s);
}
function getExtra(s){
  return Math.max(0, calcSurplus(s));
}
function getAge(s){
  // We don't collect birth year — estimate from retire age context; default to 35
  return 35;
}

function calcHealthScore(s){
  var score=0, parts={};
  var monthlyExp = calcMonthlyExpenses(s);
  var minPay = calcMinPayments(s);

  // Emergency fund (0-25 pts)
  var efMonths = monthlyExp>0 ? (s.efund||0)/monthlyExp : 0;
  var efScore = efMonths>=6?25:efMonths>=3?20:efMonths>=1?10:efMonths>0?5:0;
  parts.ef = { score:efScore, max:25, label:t("scoreDimEf") };
  score += efScore;

  // Debt-to-income (0-20 pts)
  var dti = s.takeHome>0 ? minPay/s.takeHome : 1;
  var dtiScore = dti<=0.10?20:dti<=0.15?16:dti<=0.20?12:dti<=0.30?6:dti<=0.40?2:0;
  parts.dti = { score:dtiScore, max:20, label:t("scoreDimDti") };
  score += dtiScore;

  // Savings rate (0-20 pts) — surplus as % of take-home
  var savRate = s.takeHome>0 ? Math.max(0,calcSurplus(s))/s.takeHome : 0;
  var savScore = savRate>=0.20?20:savRate>=0.15?16:savRate>=0.10?12:savRate>=0.05?6:0;
  parts.sav = { score:savScore, max:20, label:t("scoreDimSave") };
  score += savScore;

  // Match capture (0-15 pts)
  var matchScore;
  if(!s.hasMatch){ matchScore=15; }
  else { matchScore = s.myContrib>=s.matchUpto?15:Math.round(15*(s.myContrib/Math.max(s.matchUpto,1))); }
  parts.match = { score:matchScore, max:15, label:t("scoreDimMatch") };
  score += matchScore;

  // Investment rate (0-20 pts)
  var annualContrib = s.takeHome*12*(s.myContrib/100||0);
  var investRate = s.takeHome>0&&s.takeHome*12>0 ? annualContrib/(s.takeHome*12) : 0;
  var investScore = investRate>=0.15?20:investRate>=0.10?15:investRate>=0.05?8:investRate>0?3:0;
  parts.invest = { score:investScore, max:20, label:t("scoreDimInvest") };
  score += investScore;

  return { total:Math.min(100,score), parts:parts };
}

function calcLadder(s){
  var monthlyExp = calcMonthlyExpenses(s);
  var highRateDebts = s.debts.filter(function(d){return parseFloat(d.rate)>7;});
  var lowRateDebts = s.debts.filter(function(d){return parseFloat(d.rate)<=7&&parseFloat(d.rate)>0;});
  var bridgeTarget = Math.max(0,(59.5-(s.retireAge||55)))*(s.targetSpend||60000);
  var efTarget3 = monthlyExp*3;
  var efTarget6 = monthlyExp*6;
  var efCurrent = s.efund||0;
  var cash = (s.cash||0);

  var rung1ok = cash>=1000;
  var rung2ok = !s.hasMatch || s.myContrib>=s.matchUpto;
  var rung3ok = highRateDebts.length===0;
  var rung4ok = efCurrent>=efTarget3;
  var rung5ok = (s.retirement||0)>0 && (s.myContrib>0||s.hasRoth);
  var rung6ok = (s.brokerage||0)>=bridgeTarget && bridgeTarget>0;
  var rung7ok = lowRateDebts.length===0 && rung6ok;

  var complete = [rung1ok,rung2ok,rung3ok,rung4ok,rung5ok,rung6ok,rung7ok];
  var currentRung = 1;
  for(var i=0;i<complete.length;i++){ if(!complete[i]){currentRung=i+1;break;} if(i===complete.length-1)currentRung=7;}

  return { complete:complete, currentRung:currentRung, bridgeTarget:bridgeTarget, efTarget3:efTarget3, efTarget6:efTarget6 };
}

function simulate(debtsIn,extra,method){
  var debts=debtsIn.map(function(d){
    return{name:d.name||"Debt",balance:parseFloat(d.balance)||0,rate:parseFloat(d.rate)||0,
           min:Math.max(parseFloat(d.min)||1,1),paid:false,paidMonth:null};
  });
  if(method==="snowball")       debts.sort(function(a,b){return a.balance-b.balance;});
  else if(method==="avalanche") debts.sort(function(a,b){return b.rate-a.rate;});
  else                          debts.sort(function(a,b){return(b.min/Math.max(b.balance,1))-(a.min/Math.max(a.balance,1));});

  var month=0,totalInterest=0,firstPaid=null,MAX=600;
  while(debts.some(function(d){return!d.paid;})&&month<MAX){
    month++;
    debts.forEach(function(d){
      if(d.paid)return;
      var interest=d.balance*(d.rate/100/12);
      totalInterest+=interest;d.balance+=interest;
    });
    debts.forEach(function(d){
      if(d.paid)return;
      var pay=Math.min(d.min,d.balance);d.balance-=pay;
      if(d.balance<=0.005){d.balance=0;d.paid=true;d.paidMonth=month;
        if(firstPaid===null)firstPaid=month;}
    });
    var paidMins=debts.reduce(function(s,d){return s+(d.paid?d.min:0);},0);
    var snowball=extra+paidMins;
    var target=null;
    for(var i=0;i<debts.length;i++){if(!debts[i].paid){target=debts[i];break;}}
    if(target){
      var pay=Math.min(snowball,target.balance);target.balance-=pay;
      if(target.balance<=0.005){target.balance=0;target.paid=true;target.paidMonth=month;
        if(firstPaid===null)firstPaid=month;}
    }
  }
  var pd=new Date();pd.setMonth(pd.getMonth()+month);
  var totalMins=debts.reduce(function(s,d){return s+d.min;},0);
  return{method:method,months:month>=MAX?null:month,totalInterest:Math.round(totalInterest),
    payoffDate:month>=MAX?null:pd,firstPaid:firstPaid,
    monthlyFreed:Math.round(totalMins+extra),order:debts.map(function(d){return d.name;})};
}

function calcSpendingPlan(s){
  var th = s.takeHome;
  if(th<=0) return null;
  var needs   = (s.housing||0)+(s.transport||0)+(s.utilities||0);
  var minPay  = calcMinPayments(s);
  var fundFood= s.food||0;
  var fun     = s.funspend||0;
  var annualContrib = th*12*(s.myContrib/100||0);
  var invest  = Math.round(annualContrib/12);
  var savings = Math.max(0, calcSurplus(s)-invest)*0.3;
  var totalAssigned = needs+minPay+fundFood+fun+invest+savings;
  var unassigned = Math.max(0,th-totalAssigned);
  fun += unassigned;

  return{
    needs:   {amt:needs+minPay+fundFood, pct:Math.round((needs+minPay+fundFood)/th*100), tMin:50,tMax:60, note:t("planNeedsNote")},
    invest:  {amt:invest,     pct:Math.round(invest/th*100),  tMin:10,tMax:100, note:t("planInvestNote")},
    savings: {amt:Math.round(savings), pct:Math.round(savings/th*100), tMin:5,tMax:10, note:t("planSaveNote")},
    fun:     {amt:Math.round(fun), pct:Math.round(fun/th*100), tMin:20,tMax:35, note:t("planFunNote")}
  };
}

function calcAllocation(retireAge){
  var age = Math.min(65,Math.max(25,retireAge-20));
  var stocks = Math.min(90,Math.max(40,110-age));
  var bonds  = Math.min(40,Math.max(10,age-40));
  var intl   = Math.round(stocks*0.25);
  stocks -= intl;
  bonds = 100 - stocks - intl;
  return{stocks:stocks,intl:intl,bonds:bonds};
}

// ── RENDER FUNCTIONS ─────────────────────────────────────────────
var MKEYS={snowball:{n:"mSnow",tg:"tSnow",i:"&#127942;"},
           avalanche:{n:"mAval",tg:"tAval",i:"&#128176;"},
           cashflow:{n:"mCash",tg:"tCash",i:"&#127754;"}};

function renderAllResults(){
  renderOverview();
  renderDebtTab();
  renderLadderTab();
  renderPlanTab();
  renderInvestTab();
  switchTab("overview");
  setTimeout(animateResults, 80);
}

function renderOverview(){
  var hs = calcHealthScore(state);
  var score = hs.total;
  var grade = score>=80?t("scoreExcellent"):score>=60?t("scoreGood"):score>=40?t("scoreFair"):t("scoreNeeds");
  var color = score>=80?"#10D9C4":score>=60?"#F59E0B":score>=40?"#F87171":"#EF4444";
  document.getElementById("score-grade").textContent = grade;
  document.getElementById("score-num").textContent = "0";
  var ring = document.getElementById("score-ring");
  var circ = 2*Math.PI*54;
  ring.setAttribute("stroke",color);
  ring.setAttribute("stroke-dasharray",circ.toFixed(1));
  ring.setAttribute("stroke-dashoffset",circ.toFixed(1));
  ring.setAttribute("data-target",(circ*(1-score/100)).toFixed(1));

  var bars = "";
  var parts = hs.parts;
  Object.keys(parts).forEach(function(k){
    var p = parts[k];
    var pct = Math.round(p.score/p.max*100);
    var col = pct>=80?"#10D9C4":pct>=50?"#F59E0B":"#F87171";
    bars += "<div class=\"score-bar-row\"><span class=\"score-bar-label\">"+p.label+"</span>"+
      "<div class=\"score-bar-track\"><div class=\"score-bar-fill\" style=\"background:"+col+";width:0\" data-target=\""+pct+"%\"></div></div>"+
      "<span class=\"score-bar-val\" style=\"color:"+col+"\">"+p.score+"</span></div>";
  });
  document.getElementById("score-bars").innerHTML = bars;

  // Summary strip
  var th=state.takeHome, surplus=calcSurplus(state), minPay=calcMinPayments(state);
  document.getElementById("summary-strip").innerHTML =
    "<div class=\"summary-strip\">"+
    "<div class=\"sum-item\"><div class=\"sum-label\">" +t("lTakehome").split("(")[0].trim()+"</div><div class=\"sum-val\">"+fmt(th)+"</div></div>"+
    "<div class=\"sum-item\"><div class=\"sum-label\">"+t("scoreDimDti")+"</div><div class=\"sum-val\">" +fmt(minPay)+"</div></div>"+
    "<div class=\"sum-item\"><div class=\"sum-label\">" +"Surplus"+"</div><div class=\"sum-val "+(surplus>=0?"val-green":"val-red")+"\">"+fmt(surplus)+"</div></div>"+
    "</div>";

  // Insight cards
  var extra = getExtra(state);
  var ladder = calcLadder(state);
  var insights = "";
  var debtTotal = state.debts.reduce(function(s,d){return s+parseFloat(d.balance||0);},0);
  if(debtTotal>0){
    var r=simulate(state.debts,extra,state.personality||"avalanche");
    if(r.months){
      var pd=fmtDate(r.payoffDate);
      insights += insightCard("&#128179;","Debt-free by <strong>"+pd+"</strong> — paying "+fmt(r.totalInterest)+" in total interest.");
    }
  }
  var efTarget = calcMonthlyExpenses(state)*3;
  if((state.efund||0)<efTarget && efTarget>0){
    var needed = efTarget-(state.efund||0);
    var months = extra>0?Math.ceil(needed/extra):null;
    insights += insightCard("&#127920;","Emergency fund needs <strong>"+fmt(needed)+" more</strong>"+(months?" — "+months+" months at your current pace.":" — start with any amount."));
  }
  if(state.hasMatch && state.myContrib<state.matchUpto){
    var miss = (state.matchUpto-state.myContrib)/100*state.takeHome*12;
    insights += insightCard("&#128178;","You are leaving <strong>~"+fmt(miss)+"/yr</strong> of free employer match money on the table.");
  }
  if(!insights) insights = insightCard("&#9989;","Your finances look solid. Keep following the Money Ladder and stay the course.");
  document.getElementById("insight-cards").innerHTML = insights;
}

function insightCard(icon,html){
  return "<div class=\"insight-card\"><span class=\"insight-icon\">"+icon+"</span><div class=\"insight-text\">"+html+"</div></div>";
}

function renderPaycheck(){
  var amt = parseFloat(document.getElementById("inp-paycheck").value)||0;
  var container = document.getElementById("paycheck-rows");
  if(amt<=0){container.innerHTML="";return;}
  var s = state;
  var monthlyExp = calcMonthlyExpenses(s);
  var minPay = calcMinPayments(s);
  var paychecksPerMonth = s.payFreq==="weekly"?4.33:s.payFreq==="biweekly"?2.167:s.payFreq==="semimonthly"?2:1;
  var fixedShare = Math.round(monthlyExp/paychecksPerMonth);
  var debtShare  = Math.round(minPay/paychecksPerMonth);
  var ladderAmt  = Math.round(Math.max(0,calcSurplus(s))*0.5/paychecksPerMonth);
  var funAmt     = Math.max(0,amt-fixedShare-debtShare-ladderAmt);
  var rows=[
    {label:t("paycheckFixed"),val:fixedShare,cls:""},
    {label:t("paycheckDebt"),val:debtShare,cls:"val-red"},
    {label:t("paycheckLadder"),val:ladderAmt,cls:"val-accent"},
    {label:t("paycheckFun"),val:funAmt,cls:"val-green"}
  ];
  container.innerHTML="<div class=\"paycheck-rows\">"+rows.map(function(r){
    return "<div class=\"paycheck-row\"><span class=\"paycheck-row-label\">"+r.label+"</span><span class=\"paycheck-row-val "+r.cls+"\">"+fmt(r.val)+"</span></div>";
  }).join("")+"</div>";
}

function renderWhatIf(){
  var extra = parseInt(document.getElementById("whatif-extra").value)||0;
  document.getElementById("whatif-extra-val").textContent = "$"+extra+"/mo";
  var s = state;
  var baseExtra = getExtra(s);
  var newExtra  = baseExtra + extra;

  var debtDelta="—",efDelta="—";
  if(s.debts.length>0){
    var r1=simulate(s.debts,baseExtra,s.personality||"avalanche");
    var r2=simulate(s.debts,newExtra, s.personality||"avalanche");
    if(r1.months&&r2.months){
      var diff=r1.months-r2.months;
      debtDelta=(diff>0?"-":"")+Math.abs(diff)+" mo";
    }
  }
  var efTarget=calcMonthlyExpenses(s)*3;
  var needed=(efTarget-(s.efund||0));
  if(needed>0&&newExtra>0){
    var base=baseExtra>0?Math.ceil(needed/baseExtra):999;
    var newM=Math.ceil(needed/newExtra);
    var diff=base-newM;
    efDelta=(diff>0?"-":"")+Math.abs(diff)+" mo";
  }
  document.getElementById("whatif-outputs").innerHTML=
    "<div class=\"whatif-cell\"><div class=\"whatif-delta delta-pos\">"+debtDelta+"</div><div class=\"whatif-label\">"+t("whatifFaster")+"</div></div>"+
    "<div class=\"whatif-cell\"><div class=\"whatif-delta delta-pos\">"+efDelta+"</div><div class=\"whatif-label\">"+t("whatifSavings")+"</div></div>";
}

function renderDebtTab(){
  var extra = getExtra(state);
  var rec = state.personality||"avalanche";
  var methods=["snowball","avalanche","cashflow"];
  var results=methods.map(function(m){return simulate(state.debts,extra,m);});
  var mk=MKEYS[rec];
  document.getElementById("res-headline").textContent=t("planPfx")+t(mk.n);
  document.getElementById("res-subhead").textContent=t(mk.tg);
  if(state.debts.length===0){
    document.getElementById("debt-methods-container").innerHTML=
      "<div class=\"card\" style=\"text-align:center;padding:32px\"><div style=\"font-size:40px;margin-bottom:10px\">&#9989;</div><p style=\"color:var(--text-muted)\">No high-interest debts entered — great position to be in.</p></div>";
    return;
  }
  var valid=results.filter(function(r){return r.months!==null;});
  var minInt=valid.length?Math.min.apply(null,valid.map(function(r){return r.totalInterest;})):Infinity;
  var minMo=valid.length?Math.min.apply(null,valid.map(function(r){return r.months;})):Infinity;
  var ordered=results.slice().sort(function(a,b){if(a.method===rec)return-1;if(b.method===rec)return 1;return 0;});
  var html="<div class=\"method-cards\">";
  ordered.forEach(function(r){
    var mk2=MKEYS[r.method];
    var isRec=r.method===rec;
    var bestInt=r.totalInterest===minInt&&valid.length>1;
    var fastest=r.months===minMo&&valid.length>1;
    var payStr=r.payoffDate?fmtDate(r.payoffDate):t("over50");
    var firstStr=r.firstPaid?fmtDate(addMonths(new Date(),r.firstPaid)):"--";
    var orderHtml=r.order.map(function(n,idx){return "<span class=\"order-num\">"+(idx+1)+".</span> "+esc(n);}).join(" &rarr; ");
    html+="<div class=\"method-card"+(isRec?" recommended":"")+"\">"+
      "<div class=\"method-card-header\">"+
        "<div><div class=\"method-name\">"+mk2.i+" "+t(mk2.n)+"</div><div class=\"method-tagline\">"+t(mk2.tg)+"</div></div>"+
        (isRec?"<span class=\"method-badge\">"+t("yourPick")+"</span>":"")+
      "</div>"+
      "<div class=\"stat-grid\">"+
        "<div class=\"stat-cell\"><div class=\"stat-label\">"+t("lInterest")+(bestInt?"<span class=\"best-tag\">"+t("tagBest")+"</span>":"")+"</div><div class=\"stat-value val-red\">"+fmt(r.totalInterest)+"</div></div>"+
        "<div class=\"stat-cell\"><div class=\"stat-label\">"+t("lFree")+(fastest?"<span class=\"best-tag\">"+t("tagFast")+"</span>":"")+"</div><div class=\"stat-value"+(fastest?" val-green":"")+"\">" +payStr+"</div></div>"+
        "<div class=\"stat-cell\"><div class=\"stat-label\">"+t("lFirst")+"</div><div class=\"stat-value val-amber\">"+firstStr+"</div></div>"+
        "<div class=\"stat-cell\"><div class=\"stat-label\">"+t("lCash2")+"</div><div class=\"stat-value val-green\">+"+fmt(r.monthlyFreed)+"/mo</div></div>"+
        "<div class=\"stat-cell wide\"><div class=\"stat-label\" style=\"margin-bottom:5px\">"+t("lOrder")+"</div><div class=\"order-list\">"+orderHtml+"</div></div>"+
      "</div></div>";
  });
  html+="</div>";
  document.getElementById("debt-methods-container").innerHTML=html;
}

function renderLadderTab(){
  var ladder=calcLadder(state);
  var rungKeys=["rung1","rung2","rung3","rung4","rung5","rung6","rung7"];
  var html="";
  rungKeys.forEach(function(k,i){
    var complete=ladder.complete[i];
    var current=!complete&&(i===0||ladder.complete[i-1]);
    var locked=!complete&&!current;
    var cls="rung"+(complete?" complete":current?" current":locked?" locked":"");
    var icon=complete?"&#9989;":current?"&#9654;":"&#128274;";
    html+="<div class=\""+cls+"\">"+
      "<div class=\"rung-num\">"+(i+1)+"</div>"+
      "<div class=\"rung-body\"><div class=\"rung-title\">"+t(k+"t")+"</div><div class=\"rung-detail\">"+t(k+"d")+"</div></div>"+
      "<div class=\"rung-status\">"+icon+"</div>"+
    "</div>";
  });
  document.getElementById("ladder-rungs").innerHTML=html;
  var bt=ladder.bridgeTarget;
  var current=state.brokerage||0;
  var pct=bt>0?Math.min(100,Math.round(current/bt*100)):0;
  document.getElementById("bridge-box").innerHTML=
    "<div class=\"label-tag\" style=\"text-align:center;margin-bottom:8px\">"+t("bridgeTarget")+"</div>"+
    "<div class=\"bridge-amount\" data-target-fmt=\"true\">"+fmt(bt)+"</div>"+
    "<div style=\"font-size:12px;color:var(--text-muted);margin:6px 0 12px\">"+t("bridgeNote")+"</div>"+
    "<div style=\"height:6px;background:var(--glass-border);border-radius:3px;overflow:hidden;margin-bottom:6px\"><div style=\"height:100%;width:"+pct+"%;background:var(--grad);border-radius:3px;transition:width 1.2s\"></div></div>"+
    "<div style=\"font-size:12px;color:var(--text-muted);text-align:center\">"+fmt(current)+" saved &bull; "+pct+"% of target</div>";
}

function renderPlanTab(){
  var plan=calcSpendingPlan(state);
  if(!plan){
    document.getElementById("bucket-list").innerHTML="<div class=\"card\" style=\"text-align:center;padding:24px\"><p style=\"color:var(--text-muted)\">Enter your income and expenses to see your spending plan.</p></div>";
    return;
  }
  var buckets=[
    {key:"needs",  name:t("bucketNeeds"),  color:"#F87171",data:plan.needs},
    {key:"invest", name:t("bucketInvest"), color:"#10D9C4",data:plan.invest},
    {key:"savings",name:t("bucketSave"),   color:"#F59E0B",data:plan.savings},
    {key:"fun",    name:t("bucketFun"),    color:"#8B5CF6",data:plan.fun}
  ];
  var html="";
  buckets.forEach(function(b){
    var d=b.data;
    var over=d.pct>d.tMax, under=d.pct<d.tMin&&b.key!=="invest";
    var statusCls=over?"status-over":under?"status-warn":"status-ok";
    var statusTxt=over?t("over"):under?t("under"):t("onTarget");
    html+="<div class=\"bucket\">"+
      "<div class=\"bucket-header\"><span class=\"bucket-name\">"+b.name+"</span>"+
      "<span class=\"bucket-pct\" style=\"color:"+b.color+"\">"+d.pct+"%</span></div>"+
      "<div class=\"bucket-bar-track\"><div class=\"bucket-bar-fill\" style=\"background:"+b.color+";width:0\" data-target=\""+Math.min(100,d.pct)+"%\"></div></div>"+
      "<div class=\"bucket-meta\"><span style=\"color:var(--text-muted)\">"+fmt(d.amt)+"/mo &bull; "+d.note+"</span>"+
      "<span class=\"bucket-status "+statusCls+"\">"+statusTxt+" ("+d.tMin+(d.tMax<100?"–"+d.tMax:"+")+"%)</span></div>"+
    "</div>";
  });
  document.getElementById("bucket-list").innerHTML=html;
}

function renderInvestTab(){
  var alloc=calcAllocation(state.retireAge||55);
  var items=[
    {show:state.hasMatch, t:"acct1t",d:"acct1d",amt:fmt(state.takeHome*(state.matchUpto/100))+" /mo"},
    {show:state.hasRoth,  t:"acct2t",d:"acct2d",amt:"$583 /mo"},
    {show:true,           t:"acct3t",d:"acct3d",amt:"$358 /mo"},
    {show:true,           t:"acct4t",d:"acct4d",amt:fmt(23500/12)+" /mo"},
    {show:true,           t:"acct5t",d:"acct5d",amt:"Remaining surplus"}
  ].filter(function(i){return i.show;});

  var pHTML="";
  items.forEach(function(item,i){
    pHTML+="<div class=\"priority-item\">"+
      "<div class=\"priority-num\">"+(i+1)+"</div>"+
      "<div class=\"priority-body\"><div class=\"priority-title\">"+t(item.t)+"</div><div class=\"priority-detail\">"+t(item.d)+"</div></div>"+
      "<div class=\"priority-amount\">"+item.amt+"</div>"+
    "</div>";
  });
  document.getElementById("priority-list").innerHTML=pHTML;

  document.getElementById("alloc-grid").innerHTML=
    "<div class=\"alloc-cell\"><div class=\"alloc-pct val-green\">"+alloc.stocks+"%</div><div class=\"alloc-label\">"+t("allocStocks")+"</div></div>"+
    "<div class=\"alloc-cell\"><div class=\"alloc-pct val-amber\">"+alloc.intl+"%</div><div class=\"alloc-label\">"+t("allocIntl")+"</div></div>"+
    "<div class=\"alloc-cell\"><div class=\"alloc-pct val-accent\">"+alloc.bonds+"%</div><div class=\"alloc-label\">"+t("allocBonds")+"</div></div>";
}

// ── Animations ──────────────────────────────────────────────────
function animateResults(){
  // Health score ring
  var ring=document.getElementById("score-ring");
  if(ring&&ring.getAttribute("data-target")){
    ring.style.strokeDashoffset=ring.getAttribute("data-target");
  }
  // Score number count-up
  var scoreEl=document.getElementById("score-num");
  var hs=calcHealthScore(state);
  animCount(scoreEl,0,hs.total,1200,"","");
  // Score bar fills
  document.querySelectorAll(".score-bar-fill").forEach(function(el){
    el.style.width=el.getAttribute("data-target");
  });
  // Bucket bar fills
  document.querySelectorAll(".bucket-bar-fill").forEach(function(el){
    el.style.width=el.getAttribute("data-target");
  });
  // Card tilt
  initTilt();
}

function animCount(el,from,to,duration,prefix,suffix){
  var start=Date.now();
  var step=function(){
    var pct=Math.min(1,(Date.now()-start)/duration);
    var ease=1-Math.pow(1-pct,3);
    el.textContent=prefix+Math.round(from+(to-from)*ease)+suffix;
    if(pct<1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initTilt(){
  document.querySelectorAll(".card,.method-card").forEach(function(card){
    card.addEventListener("mousemove",function(e){
      var rect=card.getBoundingClientRect();
      var x=(e.clientX-rect.left)/rect.width-.5;
      var y=(e.clientY-rect.top)/rect.height-.5;
      card.style.transform="perspective(900px) rotateX("+(-y*6)+"deg) rotateY("+(x*6)+"deg) translateZ(6px)";
    });
    card.addEventListener("mouseleave",function(){
      card.style.transform="";
      card.style.transition="transform .5s ease";
      setTimeout(function(){card.style.transition="";},500);
    });
  });
}

// ── Export / Import ──────────────────────────────────────────────
function exportPlan(){
  var payload={app:"next-dollar",version:"2.0",exported:new Date().toISOString(),lang:lang,state:state};
  var blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  var url=URL.createObjectURL(blob);
  var a=document.createElement("a");
  a.href=url;a.download="next-dollar-plan.json";a.click();
  URL.revokeObjectURL(url);
}

function importPlan(evt){
  var file=evt.target.files[0]; if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var data=JSON.parse(e.target.result);
      if(data.state){
        Object.keys(data.state).forEach(function(k){state[k]=data.state[k];});
        if(data.lang){lang=data.lang;document.getElementById("langBtn").textContent=lang==="en"?"ES":"EN";}
        // Restore input fields — map HTML id to camelCase state key
        var inputMap={
          "takehome":"takeHome","housing":"housing","food":"food","transport":"transport",
          "utilities":"utilities","funspend":"funspend","cash":"cash","efund":"efund",
          "retirement":"retirement","brokerage":"brokerage","retireage":"retireAge","targetspend":"targetSpend"
        };
        Object.keys(inputMap).forEach(function(id){
          var el=document.getElementById("inp-"+id);
          var val=state[inputMap[id]];
          if(el&&val) el.value=val;
        });
        // Restore toggles
        document.getElementById("inp-hasmatch").checked=!!state.hasMatch;
        document.getElementById("inp-hasroth").checked=!!state.hasRoth;
        toggleMatchFields();
        applyStrings();
        goTo(data.state.personality?7:1);
      }
    }catch(err){alert("Could not read that file.");}
  };
  reader.readAsText(file);
  evt.target.value="";
}

// ── Helpers ──────────────────────────────────────────────────────
function fmt(n){ return "$"+Math.abs(Math.round(n)).toLocaleString(); }
function fmtDate(d){ return d.toLocaleDateString("en-US",{month:"short",year:"numeric"}); }
function addMonths(d,n){ var r=new Date(d);r.setMonth(r.getMonth()+n);return r; }
function esc(s){ return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&#34;"); }

// ── Init ─────────────────────────────────────────────────────────
(function init(){
  // Set icon
  var iconLink=document.querySelector("link[rel=icon]");
  if(iconLink) iconLink.href=APP_ICON;
  // Apple touch icon
  var touchIcon=document.createElement("link");
  touchIcon.rel="apple-touch-icon";touchIcon.href=APP_ICON;
  document.head.appendChild(touchIcon);
  // PWA meta
  var metaTheme=document.createElement("meta");
  metaTheme.name="theme-color";metaTheme.content="#06091A";
  document.head.appendChild(metaTheme);

  applyTheme();
  applyStrings();
  // Init empty debt row
  state.debts=[newDebt()];
  goTo(0);
})();

window.addEventListener('error',function(e){
  console.error('[NextDollar] Uncaught:',e.error||e.message);
  var eb=document.getElementById('error-boundary');
  var em=document.getElementById('error-message');
  if(eb&&em){em.textContent=e.message||'An unexpected error occurred.';eb.hidden=false;}
});
window.addEventListener('unhandledrejection',function(e){
  console.error('[NextDollar] Rejection:',e.reason);
});
