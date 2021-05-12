function handlesubmit(){
  // Saving input in local variables from input page, keep name of variable same as id name

  //************************HOT MIX ASPHALT****************************

  //Layer specification
  const hm_wc_w = document.getElementById("hm_wc_w").value;
  const hm_wc_d = document.getElementById("hm_wc_d").value;
  const hm_wc_l = document.getElementById("hm_wc_l").value;

  const hm_ba_w = document.getElementById("hm_ba_w").value;
  const hm_ba_d = document.getElementById("hm_ba_d").value;
  const hm_ba_l = document.getElementById("hm_ba_l").value;

  const hm_sb_w = document.getElementById("hm_sb_w").value;
  const hm_sb_d = document.getElementById("hm_sb_d").value;
  const hm_sb_l = document.getElementById("hm_sb_l").value;

  const hm_sg_w = document.getElementById("hm_sg_w").value;
  const hm_sg_d = document.getElementById("hm_sg_d").value;
  const hm_sg_l = document.getElementById("hm_sg_l").value;

  
  //Initial construction materials
  //for wearing course
  const hmc_wc_va_v = document.getElementById("hmc_wc_va_v").value;
  const hmc_wc_va_td = document.getElementById("hmc_wc_va_td").value;

  const hmc_wc_b_v = document.getElementById("hmc_wc_b_v").value;
  const hmc_wc_b_td = document.getElementById("hmc_wc_b_td").value;

  const hmc_wc_w_v = document.getElementById("hmc_wc_w_v").value;
  const hmc_wc_w_td = document.getElementById("hmc_wc_w_td").value;

  const hmc_wc_tm_v = document.getElementById("hmc_wc_tm_v").value;
  const hmc_wc_tm_td = document.getElementById("hmc_wc_tm_td").value;

  //for base
  const hmc_ba_r_v = document.getElementById("hmc_ba_r_v").value;
  const hmc_ba_r_td = document.getElementById("hmc_ba_r_td").value;

  const hmc_ba_g_v = document.getElementById("hmc_ba_g_v").value;
  const hmc_ba_g_td = document.getElementById("hmc_ba_g_td").value;

  const hmc_ba_sa_v = document.getElementById("hmc_ba_sa_v").value;
  const hmc_ba_sa_td = document.getElementById("hmc_ba_sa_td").value;

  const hmc_ba_so_v = document.getElementById("hmc_ba_so_v").value;
  const hmc_ba_so_td = document.getElementById("hmc_ba_so_td").value;

  const hmc_ba_c_v = document.getElementById("hmc_ba_c_v").value;
  const hmc_ba_c_td = document.getElementById("hmc_ba_c_td").value;

    //for sub-base
    const hmc_sb_r_v = document.getElementById("hmc_sb_r_v").value;
    const hmc_sb_r_td = document.getElementById("hmc_sb_r_td").value;
  
    const hmc_sb_g_v = document.getElementById("hmc_sb_g_v").value;
    const hmc_sb_g_td = document.getElementById("hmc_sb_g_td").value;
  
    const hmc_sb_sa_v = document.getElementById("hmc_sb_sa_v").value;
    const hmc_sb_sa_td = document.getElementById("hmc_sb_sa_td").value;
  
    const hmc_sb_so_v = document.getElementById("hmc_sb_so_v").value;
    const hmc_sb_so_td = document.getElementById("hmc_sb_so_td").value;
  
    const hmc_sb_c_v = document.getElementById("hmc_sb_c_v").value;
    const hmc_sb_c_td = document.getElementById("hmc_sb_c_td").value;

    //for subgrade
    const hmc_sg_r_v = document.getElementById("hmc_sg_r_v").value;
    const hmc_sg_r_td = document.getElementById("hmc_sg_r_td").value;
  
    const hmc_sg_g_v = document.getElementById("hmc_sg_g_v").value;
    const hmc_sg_g_td = document.getElementById("hmc_sg_g_td").value;
  
    const hmc_sg_sa_v = document.getElementById("hmc_sg_sa_v").value;
    const hmc_sg_sa_td = document.getElementById("hmc_sg_sa_td").value;
  
    const hmc_sg_so_v = document.getElementById("hmc_sg_so_v").value;
    const hmc_sg_so_td = document.getElementById("hmc_sg_so_td").value;
  
    const hmc_sg_c_v = document.getElementById("hmc_sg_c_v").value;
    const hmc_sg_c_td = document.getElementById("hmc_sg_c_td").value;

    //for embankment
    const hmc_em_r_v = document.getElementById("hmc_em_r_v").value;
    const hmc_em_r_td = document.getElementById("hmc_em_r_td").value;
  
    const hmc_em_g_v = document.getElementById("hmc_em_g_v").value;
    const hmc_em_g_td = document.getElementById("hmc_em_g_td").value;
  
    const hmc_em_sa_v = document.getElementById("hmc_em_sa_v").value;
    const hmc_em_sa_td = document.getElementById("hmc_em_sa_td").value;
  
    const hmc_em_so_v = document.getElementById("hmc_em_so_v").value;
    const hmc_em_so_td = document.getElementById("hmc_em_so_td").value;
  
    const hmc_em_c_v = document.getElementById("hmc_em_c_v").value;
    const hmc_em_c_td = document.getElementById("hmc_em_c_td").value;

    //maintenance phase materials
  //for wearing course
  const hmm_wc_va_v = document.getElementById("hmm_wc_va_v").value;
  const hmm_wc_va_td = document.getElementById("hmm_wc_va_td").value;

  const hmm_wc_b_v = document.getElementById("hmm_wc_b_v").value;
  const hmm_wc_b_td = document.getElementById("hmm_wc_b_td").value;

  const hmm_wc_w_v = document.getElementById("hmm_wc_w_v").value;
  const hmm_wc_w_td = document.getElementById("hmm_wc_w_td").value;

  const hmm_wc_tm_v = document.getElementById("hmm_wc_tm_v").value;
  const hmm_wc_tm_td = document.getElementById("hmm_wc_tm_td").value;

  //for base
  const hmm_ba_r_v = document.getElementById("hmm_ba_r_v").value;
  const hmm_ba_r_td = document.getElementById("hmm_ba_r_td").value;

  const hmm_ba_g_v = document.getElementById("hmm_ba_g_v").value;
  const hmm_ba_g_td = document.getElementById("hmm_ba_g_td").value;

  const hmm_ba_sa_v = document.getElementById("hmm_ba_sa_v").value;
  const hmm_ba_sa_td = document.getElementById("hmm_ba_sa_td").value;

  const hmm_ba_so_v = document.getElementById("hmm_ba_so_v").value;
  const hmm_ba_so_td = document.getElementById("hmm_ba_so_td").value;

  const hmm_ba_c_v = document.getElementById("hmm_ba_c_v").value;
  const hmm_ba_c_td = document.getElementById("hmm_ba_c_td").value;

    //for sub-base
    const hmm_sb_r_v = document.getElementById("hmm_sb_r_v").value;
    const hmm_sb_r_td = document.getElementById("hmm_sb_r_td").value;
  
    const hmm_sb_g_v = document.getElementById("hmm_sb_g_v").value;
    const hmm_sb_g_td = document.getElementById("hmm_sb_g_td").value;
  
    const hmm_sb_sa_v = document.getElementById("hmm_sb_sa_v").value;
    const hmm_sb_sa_td = document.getElementById("hmm_sb_sa_td").value;
  
    const hmm_sb_so_v = document.getElementById("hmm_sb_so_v").value;
    const hmm_sb_so_td = document.getElementById("hmm_sb_so_td").value;
  
    const hmm_sb_c_v = document.getElementById("hmm_sb_c_v").value;
    const hmm_sb_c_td = document.getElementById("hmm_sb_c_td").value;

    //for subgrade
    const hmm_sg_r_v = document.getElementById("hmm_sg_r_v").value;
    const hmm_sg_r_td = document.getElementById("hmm_sg_r_td").value;
  
    const hmm_sg_g_v = document.getElementById("hmm_sg_g_v").value;
    const hmm_sg_g_td = document.getElementById("hmm_sg_g_td").value;
  
    const hmm_sg_sa_v = document.getElementById("hmm_sg_sa_v").value;
    const hmm_sg_sa_td = document.getElementById("hmm_sg_sa_td").value;
  
    const hmm_sg_so_v = document.getElementById("hmm_sg_so_v").value;
    const hmm_sg_so_td = document.getElementById("hmm_sg_so_td").value;
  
    const hmm_sg_c_v = document.getElementById("hmm_sg_c_v").value;
    const hmm_sg_c_td = document.getElementById("hmm_sg_c_td").value;

    //for embankment
    const hmm_em_r_v = document.getElementById("hmm_em_r_v").value;
    const hmm_em_r_td = document.getElementById("hmm_em_r_td").value;
  
    const hmm_em_g_v = document.getElementById("hmm_em_g_v").value;
    const hmm_em_g_td = document.getElementById("hmm_em_g_td").value;
  
    const hmm_em_sa_v = document.getElementById("hmm_em_sa_v").value;
    const hmm_em_sa_td = document.getElementById("hmm_em_sa_td").value;
  
    const hmm_em_so_v = document.getElementById("hmm_em_so_v").value;
    const hmm_em_so_td = document.getElementById("hmm_em_so_td").value;
  
    const hmm_em_c_v = document.getElementById("hmm_em_c_v").value;
    const hmm_em_c_td = document.getElementById("hmm_em_c_td").value;

    let flag=0;
    if(parseFloat(hm_wc_l)>=3 && parseFloat(hm_wc_l)<=4){
    flag=1;
    }
    localStorage.setItem("FLAG", flag);

    // Use all formulas here
  // 1.material production
  //initial construction phase

  //1. wearing course
  enp_hmc_wc_va = hmc_wc_va_v*2.92*154;
  enp_hmc_wc_b = hmc_wc_b_v*1.1*19757;
  enp_hmc_wc_w = hmc_wc_w_v*1.1*0.006;
  enp_hmc_wc_tm = hmc_wc_tm_v*1.61*227;

  //2.base
  enp_hmc_ba_r = hmc_ba_r_v*2.62*154;
  enp_hmc_ba_g = hmc_ba_g_v*1.77*154;
  enp_hmc_ba_sa = hmc_ba_sa_v*1.63*154;
  enp_hmc_ba_so = hmc_ba_so_v*2.13*3.58*34.2*10/315;
  enp_hmc_ba_c = hmc_ba_c_v*1.66*3775;

  //3.sub-base
  enp_hmc_sb_r = hmc_sb_r_v*2.62*154;
  enp_hmc_sb_g = hmc_sb_g_v*1.77*154;
  enp_hmc_sb_sa = hmc_sb_sa_v*1.63*154;
  enp_hmc_sb_so = hmc_sb_so_v*2.13*3.58*34.2*10/315;
  enp_hmc_sb_c = hmc_sb_c_v*1.66*3775;

  //4.subgrade
  enp_hmc_sg_r = hmc_sg_r_v*2.62*154;
  enp_hmc_sg_g = hmc_sg_g_v*1.77*154;
  enp_hmc_sg_sa = hmc_sg_sa_v*1.63*154;
  enp_hmc_sg_so = hmc_sg_so_v*2.13*3.58*34.2*10/315;
  enp_hmc_sg_c = hmc_sg_c_v*1.66*3775;

 //5.embankment
 enp_hmc_em_r = hmc_em_r_v*2.62*154;
 enp_hmc_em_g = hmc_em_g_v*1.77*154;
 enp_hmc_em_sa = hmc_em_sa_v*1.63*154;
 enp_hmc_em_so = hmc_em_so_v*2.13*3.58*34.2*10/315;
 enp_hmc_em_c = hmc_em_c_v*1.66*3775;

//maintenace phase
//1. wearing course
enp_hmm_wc_va = hmm_wc_va_v*2.92*154;
enp_hmm_wc_b = hmm_wc_b_v*1.1*19757;
enp_hmm_wc_w = hmm_wc_w_v*1.1*0.006;
enp_hmm_wc_tm = hmm_wc_tm_v*1.61*227;

//2.base
enp_hmm_ba_r = hmm_ba_r_v*2.62*154;
enp_hmm_ba_g = hmm_ba_g_v*1.77*154;
enp_hmm_ba_sa = hmm_ba_sa_v*1.63*154;
enp_hmm_ba_so = hmm_ba_so_v*2.13*3.58*34.2*10/315;
enp_hmm_ba_c = hmm_ba_c_v*1.66*3775;

//3.sub-base
enp_hmm_sb_r = hmm_sb_r_v*2.62*154;
enp_hmm_sb_g = hmm_sb_g_v*1.77*154;
enp_hmm_sb_sa = hmm_sb_sa_v*1.63*154;
enp_hmm_sb_so = hmm_sb_so_v*2.13*3.58*34.2*10/315;
enp_hmm_sb_c = hmm_sb_c_v*1.66*3775;

//4.subgrade
enp_hmm_sg_r = hmm_sg_r_v*2.62*154;
enp_hmm_sg_g = hmm_sg_g_v*1.77*154;
enp_hmm_sg_sa = hmm_sg_sa_v*1.63*154;
enp_hmm_sg_so = hmm_sg_so_v*2.13*3.58*34.2*10/315;
enp_hmm_sg_c = hmm_sg_c_v*1.66*3775;

//5.embankment
enp_hmm_em_r = hmm_em_r_v*2.62*154;
enp_hmm_em_g = hmm_em_g_v*1.77*154;
enp_hmm_em_sa = hmm_em_sa_v*1.63*154;
enp_hmm_em_so = hmm_em_so_v*2.13*3.58*34.2*10/315;
enp_hmm_em_c = hmm_em_c_v*1.66*3775;

tot1_hm_en = parseFloat(enp_hmc_wc_va)+parseFloat(enp_hmc_wc_b)+parseFloat(enp_hmc_wc_w)+parseFloat(enp_hmc_wc_tm)+parseFloat(enp_hmc_ba_r)+parseFloat(enp_hmc_ba_g)+parseFloat(enp_hmc_ba_sa)+parseFloat(enp_hmc_ba_so)+parseFloat(enp_hmc_ba_c)+parseFloat(
 enp_hmc_sb_r)+parseFloat(enp_hmc_sb_g)+parseFloat(enp_hmc_sb_sa)+parseFloat(enp_hmc_sb_so)+parseFloat(enp_hmc_sb_c)+parseFloat(enp_hmc_sg_r)+parseFloat(enp_hmc_sg_g)+parseFloat(enp_hmc_sg_sa)+parseFloat(enp_hmc_sg_so)+parseFloat(enp_hmc_sg_c)+parseFloat(
 enp_hmc_em_r)+parseFloat(enp_hmc_em_g)+parseFloat(enp_hmc_em_sa)+parseFloat(enp_hmc_em_so)+parseFloat(enp_hmc_em_c)+parseFloat(enp_hmm_wc_va)+parseFloat(enp_hmm_wc_b)+parseFloat(enp_hmm_wc_w)+parseFloat(enp_hmm_wc_tm)+parseFloat(enp_hmm_ba_r)+parseFloat(enp_hmm_ba_g)+parseFloat(enp_hmm_ba_sa)+parseFloat(enp_hmm_ba_so)+parseFloat(enp_hmm_ba_c)+parseFloat(
 enp_hmm_sb_r)+parseFloat(enp_hmm_sb_g)+parseFloat(enp_hmm_sb_sa)+parseFloat(enp_hmm_sb_so)+parseFloat(enp_hmm_sb_c)+parseFloat(enp_hmm_sg_r)+parseFloat(enp_hmm_sg_g)+parseFloat(enp_hmm_sg_sa)+parseFloat(enp_hmm_sg_so)+parseFloat(enp_hmm_sg_c)+parseFloat(
 enp_hmm_em_r)+parseFloat(enp_hmm_em_g)+parseFloat(enp_hmm_em_sa)+parseFloat(enp_hmm_em_so)+parseFloat(enp_hmm_em_c);
 tot1_hm_en = tot1_hm_en/hm_wc_l;
 localStorage.setItem("TOT1_HM_EN", tot1_hm_en);
//2.Transportation energy
//initial construction phase
//1. wearing course

ent_hmc_wc_va = hmc_wc_va_v*hmc_wc_va_td*2.92*0.42*35.85/1.02/20;
ent_hmc_wc_b = hmc_wc_b_v*hmc_wc_b_td*1.1*0.42*35.85/1.02/20;
ent_hmc_wc_w = hmc_wc_w_v*hmc_wc_w_td*1.1*0.42*35.85/1.02/20;
ent_hmc_wc_tm = hmc_wc_tm_v*hmc_wc_tm_td*1.61*0.42*35.85/1.02/20;

//2.base
ent_hmc_ba_r = hmc_ba_r_v*hmc_ba_r_td*2.62*0.42*35.85/1.02/20;
ent_hmc_ba_g = hmc_ba_g_v*hmc_ba_g_td*1.77*0.42*35.85/1.02/20;
ent_hmc_ba_sa = hmc_ba_sa_v*hmc_ba_sa_td*1.63*0.42*35.85/1.02/20;
ent_hmc_ba_so = hmc_ba_so_v*hmc_ba_so_td*2.13**0.42*35.85/1.02/20;
ent_hmc_ba_c = hmc_ba_c_v*hmc_ba_c_td*1.66**0.42*35.85/1.02/20;

//3.sub-base
ent_hmc_sb_r = hmc_sb_r_v*hmc_sb_r_td*2.62*0.42*35.85/1.02/20;
ent_hmc_sb_g = hmc_sb_g_v*hmc_sb_g_td*1.77*0.42*35.85/1.02/20;
ent_hmc_sb_sa = hmc_sb_sa_v*hmc_sb_sa_td*1.63*0.42*35.85/1.02/20;
ent_hmc_sb_so = hmc_sb_so_v*hmc_sb_so_td*2.13**0.42*35.85/1.02/20;
ent_hmc_sb_c = hmc_sb_c_v*hmc_sb_c_td*1.66**0.42*35.85/1.02/20;

//4.subgrade
ent_hmc_sg_r = hmc_sg_r_v*hmc_sg_r_td*2.62*0.42*35.85/1.02/20;
ent_hmc_sg_g = hmc_sg_g_v*hmc_sg_g_td*1.77*0.42*35.85/1.02/20;
ent_hmc_sg_sa = hmc_sg_sa_v*hmc_sg_sa_td*1.63*0.42*35.85/1.02/20;
ent_hmc_sg_so = hmc_sg_so_v*hmc_sg_so_td*2.13**0.42*35.85/1.02/20;
ent_hmc_sg_c = hmc_sg_c_v*hmc_sg_c_td*1.66**0.42*35.85/1.02/20;

//5.embankment
ent_hmc_em_r = hmc_em_r_v*hmc_em_r_td*2.62*0.42*35.85/1.02/20;
ent_hmc_em_g = hmc_em_g_v*hmc_em_g_td*1.77*0.42*35.85/1.02/20;
ent_hmc_em_sa = hmc_em_sa_v*hmc_em_sa_td*1.63*0.42*35.85/1.02/20;
ent_hmc_em_so = hmc_em_so_v*hmc_em_so_td*2.13**0.42*35.85/1.02/20;
ent_hmc_em_c = hmc_em_c_v*hmc_em_c_td*1.66**0.42*35.85/1.02/20;

//maintenance phase
//1. wearing course
ent_hmm_wc_va = hmm_wc_va_v*hmm_wc_va_td*2.92*0.42*35.85/1.02/20;
ent_hmm_wc_b = hmm_wc_b_v*hmm_wc_b_td*1.1*0.42*35.85/1.02/20;
ent_hmm_wc_w = hmm_wc_w_v*hmm_wc_w_td*1.1*0.42*35.85/1.02/20;
ent_hmm_wc_tm = hmm_wc_tm_v*hmm_wc_tm_td*1.61*0.42*35.85/1.02/20;

//2.base
ent_hmm_ba_r = hmm_ba_r_v*hmm_ba_r_td*2.62*0.42*35.85/1.02/20;
ent_hmm_ba_g = hmm_ba_g_v*hmm_ba_g_td*1.77*0.42*35.85/1.02/20;
ent_hmm_ba_sa = hmm_ba_sa_v*hmm_ba_sa_td*1.63*0.42*35.85/1.02/20;
ent_hmm_ba_so = hmm_ba_so_v*hmm_ba_so_td*2.13**0.42*35.85/1.02/20;
ent_hmm_ba_c = hmm_ba_c_v*hmm_ba_c_td*1.66**0.42*35.85/1.02/20;

//3.sub-base
ent_hmm_sb_r = hmm_sb_r_v*hmm_sb_r_td*2.62*0.42*35.85/1.02/20;
ent_hmm_sb_g = hmm_sb_g_v*hmm_sb_g_td*1.77*0.42*35.85/1.02/20;
ent_hmm_sb_sa = hmm_sb_sa_v*hmm_sb_sa_td*1.63*0.42*35.85/1.02/20;
ent_hmm_sb_so = hmm_sb_so_v*hmm_sb_so_td*2.13**0.42*35.85/1.02/20;
ent_hmm_sb_c = hmm_sb_c_v*hmm_sb_c_td*1.66**0.42*35.85/1.02/20;

//4.subgrade
ent_hmm_sg_r = hmm_sg_r_v*hmm_sg_r_td*2.62*0.42*35.85/1.02/20;
ent_hmm_sg_g = hmm_sg_g_v*hmm_sg_g_td*1.77*0.42*35.85/1.02/20;
ent_hmm_sg_sa = hmm_sg_sa_v*hmm_sg_sa_td*1.63*0.42*35.85/1.02/20;
ent_hmm_sg_so = hmm_sg_so_v*hmm_sg_so_td*2.13**0.42*35.85/1.02/20;
ent_hmm_sg_c = hmm_sg_c_v*hmm_sg_c_td*1.66**0.42*35.85/1.02/20;

//5.embankment
ent_hmm_em_r = hmm_em_r_v*hmm_em_r_td*2.62*0.42*35.85/1.02/20;
ent_hmm_em_g = hmm_em_g_v*hmm_em_g_td*1.77*0.42*35.85/1.02/20;
ent_hmm_em_sa = hmm_em_sa_v*hmm_em_sa_td*1.63*0.42*35.85/1.02/20;
ent_hmm_em_so = hmm_em_so_v*hmm_em_so_td*2.13**0.42*35.85/1.02/20;
ent_hmm_em_c = hmm_em_c_v*hmm_em_c_td*1.66**0.42*35.85/1.02/20;

tot2_hm_en = parseFloat(ent_hmc_wc_va)+parseFloat(ent_hmc_wc_b)+parseFloat(ent_hmc_wc_w)+parseFloat(ent_hmc_wc_tm)+parseFloat(ent_hmc_ba_r)+parseFloat(ent_hmc_ba_g)+parseFloat(ent_hmc_ba_sa)+parseFloat(ent_hmc_ba_so)+parseFloat(ent_hmc_ba_c)+parseFloat(
 ent_hmc_sb_r)+parseFloat(ent_hmc_sb_g)+parseFloat(ent_hmc_sb_sa)+parseFloat(ent_hmc_sb_so)+parseFloat(ent_hmc_sb_c)+parseFloat(ent_hmc_sg_r)+parseFloat(ent_hmc_sg_g)+parseFloat(ent_hmc_sg_sa)+parseFloat(ent_hmc_sg_so)+parseFloat(ent_hmc_sg_c)+parseFloat(
 ent_hmc_em_r)+parseFloat(ent_hmc_em_g)+parseFloat(ent_hmc_em_sa)+parseFloat(ent_hmc_em_so)+parseFloat(ent_hmc_em_c)+parseFloat(ent_hmm_wc_va)+parseFloat(ent_hmm_wc_b)+parseFloat(ent_hmm_wc_w)+parseFloat(ent_hmm_wc_tm)+parseFloat(ent_hmm_ba_r)+parseFloat(ent_hmm_ba_g)+parseFloat(ent_hmm_ba_sa)+parseFloat(ent_hmm_ba_so)+parseFloat(ent_hmm_ba_c)+parseFloat(
 ent_hmm_sb_r)+parseFloat(ent_hmm_sb_g)+parseFloat(ent_hmm_sb_sa)+parseFloat(ent_hmm_sb_so)+parseFloat(ent_hmm_sb_c)+parseFloat(ent_hmm_sg_r)+parseFloat(ent_hmm_sg_g)+parseFloat(ent_hmm_sg_sa)+parseFloat(ent_hmm_sg_so)+parseFloat(ent_hmm_sg_c)+parseFloat(
 ent_hmm_em_r)+parseFloat(ent_hmm_em_g)+parseFloat(ent_hmm_em_sa)+parseFloat(ent_hmm_em_so)+parseFloat(ent_hmm_em_c);
 tot2_hm_en = tot2_hm_en/hm_wc_l;
 localStorage.setItem("TOT2_HM_EN", tot2_hm_en);
 

//3.Construction Phase
//wearing course
enc_hm_wc = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*3.58*10*0.174;

//now we have to take the sum of all the base materilas (initila )+parseFloat( maint) and then proceed with the formula
hm_ba_tm_v = parseFloat(hmc_ba_r_v)+parseFloat(hmm_ba_r_v)+parseFloat(hmc_ba_g_v)+parseFloat(hmm_ba_g_v)+parseFloat(hmc_ba_sa_v)+parseFloat(hmm_ba_sa_v)+parseFloat(hmc_ba_so_v)+parseFloat(hmm_ba_so_v)+parseFloat(hmc_ba_c_v)+parseFloat(hmm_ba_c_v);
hm_sb_tm_v = parseFloat(hmc_sb_r_v)+parseFloat(hmm_sb_r_v)+parseFloat(hmc_sb_g_v)+parseFloat(hmm_sb_g_v)+parseFloat(hmc_sb_sa_v)+parseFloat(hmm_sb_sa_v)+parseFloat(hmc_sb_so_v)+parseFloat(hmm_sb_so_v)+parseFloat(hmc_sb_c_v)+parseFloat(hmm_sb_c_v);
hm_sg_tm_v = parseFloat(hmc_sg_r_v)+parseFloat(hmm_sg_r_v)+parseFloat(hmc_sg_g_v)+parseFloat(hmm_sg_g_v)+parseFloat(hmc_sg_sa_v)+parseFloat(hmm_sg_sa_v)+parseFloat(hmc_sg_so_v)+parseFloat(hmm_sg_so_v)+parseFloat(hmc_sg_c_v)+parseFloat(hmm_sg_c_v);
hm_em_tm_v = parseFloat(hmc_em_r_v)+parseFloat(hmm_em_r_v)+parseFloat(hmc_em_g_v)+parseFloat(hmm_em_g_v)+parseFloat(hmc_em_sa_v)+parseFloat(hmm_em_sa_v)+parseFloat(hmc_em_so_v)+parseFloat(hmm_em_so_v)+parseFloat(hmc_em_c_v)+parseFloat(hmm_em_c_v);

//base
enc_hm_ba = hm_ba_tm_v*1.96*3.58*10*0.123;
//sub-base
enc_hm_sb = hm_sb_tm_v*1.96*3.58*10*0.123;
//subgrade
enc_hm_sg = hm_sg_tm_v*1.96*3.58*10*0.123;
//embankment
enc_hm_em = hm_em_tm_v*1.96*3.58*10*0.123;

tot3_hm_en = parseFloat(enc_hm_wc)+parseFloat(enc_hm_ba)+parseFloat(enc_hm_sb)+parseFloat(enc_hm_sg)+parseFloat(enc_hm_em);
tot3_hm_en = tot3_hm_en/hm_wc_l;
localStorage.setItem("TOT3_HM_EN", tot3_hm_en);

tot_hm_en = parseFloat(tot1_hm_en )+parseFloat( tot2_hm_en )+parseFloat( tot3_hm_en);
localStorage.setItem("TOT_HM_EN", tot_hm_en);

////////////////// energy part completed //////////////////////////
 

////////////////////CHG EMISSION/////////////////////////////////////

                          //CO2\\
// 1.material production
  //1. wearing course
  CO2_p_hm_wc_va = (parseFloat(hmc_wc_va_v)+parseFloat(hmm_wc_va_v))*2.92*10922/1000;
  CO2_p_hm_wc_b = (parseFloat(hmc_wc_b_v)+parseFloat(hmm_wc_b_v))*1.1*121978/1000;
  CO2_p_hm_wc_w = (parseFloat(hmc_wc_w_v)+parseFloat(hmm_wc_w_v))*1.1*0.497/1000;
  CO2_p_hm_wc_tm = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*2.04;

  //2.base
  CO2_p_hm_ba_r = (parseFloat(hmc_ba_r_v)+parseFloat(hmm_ba_r_v))*2.62*10922/1000;
  CO2_p_hm_ba_g = (parseFloat(hmc_ba_g_v)+parseFloat(hmm_ba_g_v))*1.77*10922/1000;
  CO2_p_hm_ba_sa = (parseFloat(hmc_ba_sa_v)+parseFloat(hmm_ba_sa_v))*1.63*10922/1000;
  CO2_p_hm_ba_so = (parseFloat(hmc_ba_so_v)+parseFloat(hmm_ba_so_v))*2.13*34.2*852*3.16/315/1000;
  CO2_p_hm_ba_c = (parseFloat(hmc_ba_c_v)+parseFloat(hmm_ba_c_v))*1.66*264925/1000;

  //3.sub-base
  CO2_p_hm_sb_r = (parseFloat(hmc_sb_r_v)+parseFloat(hmm_sb_r_v))*2.62*10922/1000;
  CO2_p_hm_sb_g = (parseFloat(hmc_sb_g_v)+parseFloat(hmm_sb_g_v))*1.77*10922/1000;
  CO2_p_hm_sb_sa = (parseFloat(hmc_sb_sa_v)+parseFloat(hmm_sb_sa_v))*1.63*10922/1000;
  CO2_p_hm_sb_so = (parseFloat(hmc_sb_so_v)+parseFloat(hmm_sb_so_v))*2.13*34.2*852*3.16/315/1000;
  CO2_p_hm_sb_c = (parseFloat(hmc_sb_c_v)+parseFloat(hmm_sb_c_v))*1.66*264925/1000;

  //4.subgrade
  CO2_p_hm_sg_r = (parseFloat(hmc_sg_r_v)+parseFloat(hmm_sg_r_v))*2.62*10922/1000;
  CO2_p_hm_sg_g = (parseFloat(hmc_sg_g_v)+parseFloat(hmm_sg_g_v))*1.77*10922/1000;
  CO2_p_hm_sg_sa = (parseFloat(hmc_sg_sa_v)+parseFloat(hmm_sg_sa_v))*1.63*10922/1000;
  CO2_p_hm_sg_so = (parseFloat(hmc_sg_so_v)+parseFloat(hmm_sg_so_v))*2.13*34.2*852*3.16/315/1000;
  CO2_p_hm_sg_c = (parseFloat(hmc_sg_c_v)+parseFloat(hmm_sg_c_v))*1.66*264925/1000;

 //5.embankment
 CO2_p_hm_em_r = (parseFloat(hmc_em_r_v)+parseFloat(hmm_em_r_v))*2.62*10922/1000;
 CO2_p_hm_em_g = (parseFloat(hmc_em_g_v)+parseFloat(hmm_em_g_v))*1.77*10922/1000;
 CO2_p_hm_em_sa = (parseFloat(hmc_em_sa_v)+parseFloat(hmm_em_sa_v))*1.63*10922/1000;
 CO2_p_hm_em_so = (parseFloat(hmc_em_so_v)+parseFloat(hmm_em_so_v))*2.13*34.2*852*3.16/315/1000;
 CO2_p_hm_em_c = (parseFloat(hmc_em_c_v)+parseFloat(hmm_em_c_v))*1.66*264925/1000;

 tot1_hm_CO2 = parseFloat(CO2_p_hm_wc_va)+parseFloat(CO2_p_hm_wc_b)+parseFloat(CO2_p_hm_wc_w)+parseFloat(CO2_p_hm_wc_tm)+parseFloat(CO2_p_hm_ba_r)+parseFloat(CO2_p_hm_ba_g)+parseFloat(CO2_p_hm_ba_sa)+parseFloat(CO2_p_hm_ba_so)+parseFloat(CO2_p_hm_ba_c)+parseFloat(CO2_p_hm_sb_r)+parseFloat(CO2_p_hm_sb_g)+parseFloat(CO2_p_hm_sb_sa)+parseFloat(CO2_p_hm_sb_so)+parseFloat(CO2_p_hm_sb_c)+parseFloat(CO2_p_hm_sg_r)+parseFloat(CO2_p_hm_sg_g)+parseFloat(CO2_p_hm_sg_sa)+parseFloat(CO2_p_hm_sg_so)+parseFloat(CO2_p_hm_sg_c)+parseFloat(CO2_p_hm_em_r)+parseFloat(CO2_p_hm_em_g)+parseFloat(CO2_p_hm_em_sa)+parseFloat(CO2_p_hm_em_so)+parseFloat(CO2_p_hm_em_c);
 tot1_hm_CO2 = tot1_hm_CO2/hm_wc_l;
 localStorage.setItem("TOT1_HM_CO2", tot1_hm_CO2);

//2.Material transportation
//1. wearing course
CO2_t_hm_wc_va = (parseFloat(hmc_wc_va_v*hmc_wc_va_td)+parseFloat(hmm_wc_va_v*hmm_wc_va_td))*2.92*0.42*2678.89/1.102/20/1000;
CO2_t_hm_wc_b = (parseFloat(hmc_wc_b_v*hmc_wc_b_td)+parseFloat(hmm_wc_b_v*hmm_wc_b_td))*1.1*0.42*2678.89/1.102/20/1000;
CO2_t_hm_wc_w = (parseFloat(hmc_wc_w_v*hmc_wc_w_td)+parseFloat(hmm_wc_w_v*hmm_wc_w_td))*1.1*0.42*2678.89/1.102/20/1000;;
CO2_t_hm_wc_tm = (parseFloat(hmc_wc_tm_v*hmc_wc_tm_td)+parseFloat(hmm_wc_tm_v*hmm_wc_tm_td))*1.61*0.42*2678.89/1.102/20/1000;

//2.base
CO2_t_hm_ba_r = (parseFloat(hmc_ba_r_v*hmc_ba_r_td)+parseFloat(hmm_ba_r_v*hmm_ba_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_hm_ba_g = (parseFloat(hmc_ba_g_v*hmc_ba_g_td)+parseFloat(hmm_ba_g_v*hmm_ba_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_hm_ba_sa = (parseFloat(hmc_ba_sa_v*hmc_ba_sa_td)+parseFloat(hmm_ba_sa_v*hmm_ba_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_hm_ba_so = (parseFloat(hmc_ba_so_v*hmc_ba_so_td)+parseFloat(hmm_ba_so_v*hmm_ba_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_hm_ba_c = (parseFloat(hmc_ba_c_v*hmc_ba_c_td)+parseFloat(hmm_ba_c_v*hmm_ba_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//3.sub-base
CO2_t_hm_sb_r = (parseFloat(hmc_sb_r_v*hmc_sb_r_td)+parseFloat(hmm_sb_r_v*hmm_sb_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_hm_sb_g = (parseFloat(hmc_sb_g_v*hmc_sb_g_td)+parseFloat(hmm_sb_g_v*hmm_sb_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_hm_sb_sa = (parseFloat(hmc_sb_sa_v*hmc_sb_sa_td)+parseFloat(hmm_sb_sa_v*hmm_sb_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_hm_sb_so = (parseFloat(hmc_sb_so_v*hmc_sb_so_td)+parseFloat(hmm_sb_so_v*hmm_sb_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_hm_sb_c = (parseFloat(hmc_sb_c_v*hmc_sb_c_td)+parseFloat(hmm_sb_c_v*hmm_sb_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//4.subgrade
CO2_t_hm_sg_r = (parseFloat(hmc_sg_r_v*hmc_sg_r_td)+parseFloat(hmm_sg_r_v*hmm_sg_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_hm_sg_g = (parseFloat(hmc_sg_g_v*hmc_sg_g_td)+parseFloat(hmm_sg_g_v*hmm_sg_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_hm_sg_sa = (parseFloat(hmc_sg_sa_v*hmc_sg_sa_td)+parseFloat(hmm_sg_sa_v*hmm_sg_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_hm_sg_so = (parseFloat(hmc_sg_so_v*hmc_sg_so_td)+parseFloat(hmm_sg_so_v*hmm_sg_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_hm_sg_c = (parseFloat(hmc_sg_c_v*hmc_sg_c_td)+parseFloat(hmm_sg_c_v*hmm_sg_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//5.embankment
CO2_t_hm_em_r = (parseFloat(hmc_em_r_v*hmc_em_r_td)+parseFloat(hmm_em_r_v*hmm_em_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_hm_em_g = (parseFloat(hmc_em_g_v*hmc_em_g_td)+parseFloat(hmm_em_g_v*hmm_em_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_hm_em_sa = (parseFloat(hmc_em_sa_v*hmc_em_sa_td)+parseFloat(hmm_em_sa_v*hmm_em_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_hm_em_so = (parseFloat(hmc_em_so_v*hmc_em_so_td)+parseFloat(hmm_em_so_v*hmm_em_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_hm_em_c = (parseFloat(hmc_em_c_v*hmc_em_c_td)+parseFloat(hmm_em_c_v*hmm_em_c_td))*1.66*0.42*2678.89/1.102/20/1000;

tot2_hm_CO2 =  parseFloat(CO2_t_hm_wc_va)+parseFloat(CO2_t_hm_wc_b)+parseFloat(CO2_t_hm_wc_w)+parseFloat(CO2_t_hm_wc_tm)+parseFloat(CO2_t_hm_ba_r)+parseFloat(CO2_t_hm_ba_g)+parseFloat(CO2_t_hm_ba_sa)+parseFloat(CO2_t_hm_ba_so)+parseFloat(CO2_t_hm_ba_c)+parseFloat(CO2_t_hm_sb_r)+parseFloat(CO2_t_hm_sb_g)+parseFloat(CO2_t_hm_sb_sa)+parseFloat(CO2_t_hm_sb_so)+parseFloat(CO2_t_hm_sb_c)+parseFloat(CO2_t_hm_sg_r)+parseFloat(CO2_t_hm_sg_g)+parseFloat(CO2_t_hm_sg_sa)+parseFloat(CO2_t_hm_sg_so)+parseFloat(CO2_t_hm_sg_c)+parseFloat(CO2_t_hm_em_r)+parseFloat(CO2_t_hm_em_g)+parseFloat(CO2_t_hm_em_sa)+parseFloat(CO2_t_hm_em_so)+parseFloat(CO2_t_hm_em_c);
tot2_hm_CO2 = tot2_hm_CO2/hm_wc_l;
localStorage.setItem("TOT2_HM_CO2", tot2_hm_CO2);
//3.Construction Phase
//wearing course
CO2_c_hm_wc = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*852*3.16*0.174/1000;

//base
CO2_c_hm_ba = hm_ba_tm_v*1.96*852*3.16*0.123/1000;
//sub-base
CO2_c_hm_sb = hm_sb_tm_v*1.96*852*3.16*0.123/1000;
//subgrade
CO2_c_hm_sg = hm_sg_tm_v*1.96*852*3.16*0.123/1000;
//embankment
CO2_c_hm_em = hm_em_tm_v*1.96*852*3.16*0.123/1000;

tot3_hm_CO2 = parseFloat(CO2_c_hm_wc)+parseFloat(CO2_c_hm_ba)+parseFloat(CO2_c_hm_sb)+parseFloat(CO2_c_hm_sg)+parseFloat(CO2_c_hm_em);
tot3_hm_CO2 = tot3_hm_CO2/hm_wc_l;
localStorage.setItem("TOT3_HM_CO2", tot3_hm_CO2);
//total CO2 emmission
tot_hm_CO2 = parseFloat(tot1_hm_CO2 )+parseFloat( tot2_hm_CO2 )+parseFloat( tot3_hm_CO2);
localStorage.setItem("TOT_HM_CO2", tot_hm_CO2);

 //NOX\\
// 1.material production
  //1. wearing course
  NOX_p_hm_wc_va = (parseFloat(hmc_wc_va_v)+parseFloat(hmm_wc_va_v))*2.92*22/1000;
  NOX_p_hm_wc_b = (parseFloat(hmc_wc_b_v)+parseFloat(hmm_wc_b_v))*1.1*6239/1000;
  NOX_p_hm_wc_w = (parseFloat(hmc_wc_w_v)+parseFloat(hmm_wc_w_v))*1.1*0.003/1000;
  NOX_p_hm_wc_tm = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*0.1816;

  //2.base
  NOX_p_hm_ba_r = (parseFloat(hmc_ba_r_v)+parseFloat(hmm_ba_r_v))*2.62*22/1000;
  NOX_p_hm_ba_g = (parseFloat(hmc_ba_g_v)+parseFloat(hmm_ba_g_v))*1.77*22/1000;
  NOX_p_hm_ba_sa = (parseFloat(hmc_ba_sa_v)+parseFloat(hmm_ba_sa_v))*1.63*22/1000;
  NOX_p_hm_ba_so = (parseFloat(hmc_ba_so_v)+parseFloat(hmm_ba_so_v))*2.13*131*14.7/315/1000;
  NOX_p_hm_ba_c = (parseFloat(hmc_ba_c_v)+parseFloat(hmm_ba_c_v))*1.66*3186/1000;

  //3.sub-base
  NOX_p_hm_sb_r = (parseFloat(hmc_sb_r_v)+parseFloat(hmm_sb_r_v))*2.62*22/1000;
  NOX_p_hm_sb_g = (parseFloat(hmc_sb_g_v)+parseFloat(hmm_sb_g_v))*1.77*22/1000;
  NOX_p_hm_sb_sa = (parseFloat(hmc_sb_sa_v)+parseFloat(hmm_sb_sa_v))*1.63*22/1000;
  NOX_p_hm_sb_so = (parseFloat(hmc_sb_so_v)+parseFloat(hmm_sb_so_v))*2.13*131*14.7/315/1000;
  NOX_p_hm_sb_c = (parseFloat(hmc_sb_c_v)+parseFloat(hmm_sb_c_v))*1.66*3186/1000;

  //4.subgrade
  NOX_p_hm_sg_r = (parseFloat(hmc_sg_r_v)+parseFloat(hmm_sg_r_v))*2.62*22/1000;
  NOX_p_hm_sg_g = (parseFloat(hmc_sg_g_v)+parseFloat(hmm_sg_g_v))*1.77*22/1000;
  NOX_p_hm_sg_sa = (parseFloat(hmc_sg_sa_v)+parseFloat(hmm_sg_sa_v))*1.63*22/1000;
  NOX_p_hm_sg_so = (parseFloat(hmc_sg_so_v)+parseFloat(hmm_sg_so_v))*2.13*131*14.7/315/1000;
  NOX_p_hm_sg_c = (parseFloat(hmc_sg_c_v)+parseFloat(hmm_sg_c_v))*1.66*3186/1000;

 //5.embankment
 NOX_p_hm_em_r = (parseFloat(hmc_em_r_v)+parseFloat(hmm_em_r_v))*2.62*22/1000;
 NOX_p_hm_em_g = (parseFloat(hmc_em_g_v)+parseFloat(hmm_em_g_v))*1.77*22/1000;
 NOX_p_hm_em_sa = (parseFloat(hmc_em_sa_v)+parseFloat(hmm_em_sa_v))*1.63*22/1000;
 NOX_p_hm_em_so = (parseFloat(hmc_em_so_v)+parseFloat(hmm_em_so_v))*2.13*131*14.7/315/1000;
 NOX_p_hm_em_c = (parseFloat(hmc_em_c_v)+parseFloat(hmm_em_c_v))*1.66*3186/1000;

 tot1_hm_NOX = parseFloat(NOX_p_hm_wc_va)+parseFloat(NOX_p_hm_wc_b)+parseFloat(NOX_p_hm_wc_w)+parseFloat(NOX_p_hm_wc_tm)+parseFloat(NOX_p_hm_ba_r)+parseFloat(NOX_p_hm_ba_g)+parseFloat(NOX_p_hm_ba_sa)+parseFloat(NOX_p_hm_ba_so)+parseFloat(NOX_p_hm_ba_c)+parseFloat(NOX_p_hm_sb_r)+parseFloat(NOX_p_hm_sb_g)+parseFloat(NOX_p_hm_sb_sa)+parseFloat(NOX_p_hm_sb_so)+parseFloat(NOX_p_hm_sb_c)+parseFloat(NOX_p_hm_sg_r)+parseFloat(NOX_p_hm_sg_g)+parseFloat(NOX_p_hm_sg_sa)+parseFloat(NOX_p_hm_sg_so)+parseFloat(NOX_p_hm_sg_c)+parseFloat(NOX_p_hm_em_r)+parseFloat(NOX_p_hm_em_g)+parseFloat(NOX_p_hm_em_sa)+parseFloat(NOX_p_hm_em_so)+parseFloat(NOX_p_hm_em_c);
 tot1_hm_NOX = tot1_hm_NOX/hm_wc_l;
 localStorage.setItem("TOT1_HM_NOX", tot1_hm_NOX);
//2.Material transportation
//1. wearing course
NOX_t_hm_wc_va = (parseFloat(hmc_wc_va_v*hmc_wc_va_td)+parseFloat(hmm_wc_va_v*hmm_wc_va_td))*2.92*3/1.102/1000;
NOX_t_hm_wc_b = (parseFloat(hmc_wc_b_v*hmc_wc_b_td)+parseFloat(hmm_wc_b_v*hmm_wc_b_td))*1.1*3/1.102/1000;
NOX_t_hm_wc_w = (parseFloat(hmc_wc_w_v*hmc_wc_w_td)+parseFloat(hmm_wc_w_v*hmm_wc_w_td))*1.1*3/1.102/1000;;
NOX_t_hm_wc_tm = (parseFloat(hmc_wc_tm_v*hmc_wc_tm_td)+parseFloat(hmm_wc_tm_v*hmm_wc_tm_td))*1.61*3/1.102/1000;

//2.base
NOX_t_hm_ba_r = (parseFloat(hmc_ba_r_v*hmc_ba_r_td)+parseFloat(hmm_ba_r_v*hmm_ba_r_td))*2.62*3/1.102/1000;
NOX_t_hm_ba_g = (parseFloat(hmc_ba_g_v*hmc_ba_g_td)+parseFloat(hmm_ba_g_v*hmm_ba_g_td))*1.77*3/1.102/1000;
NOX_t_hm_ba_sa = (parseFloat(hmc_ba_sa_v*hmc_ba_sa_td)+parseFloat(hmm_ba_sa_v*hmm_ba_sa_td))*1.63*3/1.102/1000;;
NOX_t_hm_ba_so = (parseFloat(hmc_ba_so_v*hmc_ba_so_td)+parseFloat(hmm_ba_so_v*hmm_ba_so_td))*2.13*3/1.102/1000;
NOX_t_hm_ba_c = (parseFloat(hmc_ba_c_v*hmc_ba_c_td)+parseFloat(hmm_ba_c_v*hmm_ba_c_td))*1.66*3/1.102/1000;

//3.sub-base
NOX_t_hm_sb_r = (parseFloat(hmc_sb_r_v*hmc_sb_r_td)+parseFloat(hmm_sb_r_v*hmm_sb_r_td))*2.62*3/1.102/1000;
NOX_t_hm_sb_g = (parseFloat(hmc_sb_g_v*hmc_sb_g_td)+parseFloat(hmm_sb_g_v*hmm_sb_g_td))*1.77*3/1.102/1000;
NOX_t_hm_sb_sa = (parseFloat(hmc_sb_sa_v*hmc_sb_sa_td)+parseFloat(hmm_sb_sa_v*hmm_sb_sa_td))*1.63*3/1.102/1000;;
NOX_t_hm_sb_so = (parseFloat(hmc_sb_so_v*hmc_sb_so_td)+parseFloat(hmm_sb_so_v*hmm_sb_so_td))*2.13*3/1.102/1000;
NOX_t_hm_sb_c = (parseFloat(hmc_sb_c_v*hmc_sb_c_td)+parseFloat(hmm_sb_c_v*hmm_sb_c_td))*1.66*3/1.102/1000;

//4.subgrade
NOX_t_hm_sg_r = (parseFloat(hmc_sg_r_v*hmc_sg_r_td)+parseFloat(hmm_sg_r_v*hmm_sg_r_td))*2.62*3/1.102/1000;
NOX_t_hm_sg_g = (parseFloat(hmc_sg_g_v*hmc_sg_g_td)+parseFloat(hmm_sg_g_v*hmm_sg_g_td))*1.77*3/1.102/1000;
NOX_t_hm_sg_sa = (parseFloat(hmc_sg_sa_v*hmc_sg_sa_td)+parseFloat(hmm_sg_sa_v*hmm_sg_sa_td))*1.63*3/1.102/1000;;
NOX_t_hm_sg_so = (parseFloat(hmc_sg_so_v*hmc_sg_so_td)+parseFloat(hmm_sg_so_v*hmm_sg_so_td))*2.13*3/1.102/1000;
NOX_t_hm_sg_c = (parseFloat(hmc_sg_c_v*hmc_sg_c_td)+parseFloat(hmm_sg_c_v*hmm_sg_c_td))*1.66*3/1.102/1000;

//5.embankment
NOX_t_hm_em_r = (parseFloat(hmc_em_r_v*hmc_em_r_td)+parseFloat(hmm_em_r_v*hmm_em_r_td))*2.62*3/1.102/1000;
NOX_t_hm_em_g = (parseFloat(hmc_em_g_v*hmc_em_g_td)+parseFloat(hmm_em_g_v*hmm_em_g_td))*1.77*3/1.102/1000;
NOX_t_hm_em_sa = (parseFloat(hmc_em_sa_v*hmc_em_sa_td)+parseFloat(hmm_em_sa_v*hmm_em_sa_td))*1.63*3/1.102/1000;;
NOX_t_hm_em_so = (parseFloat(hmc_em_so_v*hmc_em_so_td)+parseFloat(hmm_em_so_v*hmm_em_so_td))*2.13*3/1.102/1000;
NOX_t_hm_em_c = (parseFloat(hmc_em_c_v*hmc_em_c_td)+parseFloat(hmm_em_c_v*hmm_em_c_td))*1.66*3/1.102/1000;

tot2_hm_NOX =  parseFloat(NOX_t_hm_wc_va)+parseFloat(NOX_t_hm_wc_b)+parseFloat(NOX_t_hm_wc_w)+parseFloat(NOX_t_hm_wc_tm)+parseFloat(NOX_t_hm_ba_r)+parseFloat(NOX_t_hm_ba_g)+parseFloat(NOX_t_hm_ba_sa)+parseFloat(NOX_t_hm_ba_so)+parseFloat(NOX_t_hm_ba_c)+parseFloat(NOX_t_hm_sb_r)+parseFloat(NOX_t_hm_sb_g)+parseFloat(NOX_t_hm_sb_sa)+parseFloat(NOX_t_hm_sb_so)+parseFloat(NOX_t_hm_sb_c)+parseFloat(NOX_t_hm_sg_r)+parseFloat(NOX_t_hm_sg_g)+parseFloat(NOX_t_hm_sg_sa)+parseFloat(NOX_t_hm_sg_so)+parseFloat(NOX_t_hm_sg_c)+parseFloat(NOX_t_hm_em_r)+parseFloat(NOX_t_hm_em_g)+parseFloat(NOX_t_hm_em_sa)+parseFloat(NOX_t_hm_em_so)+parseFloat(NOX_t_hm_em_c);
tot2_hm_NOX = tot2_hm_NOX/hm_wc_l;
localStorage.setItem("TOT2_HM_NOX", tot2_hm_NOX);

//3.Construction Phase
//wearing course
NOX_c_hm_wc = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*14.07*0.776/1000;

//base
NOX_c_hm_ba = hm_ba_tm_v*1.96*14.07*0.511/1000;
//sub-base
NOX_c_hm_sb = hm_sb_tm_v*1.96*14.07*0.511/1000;
//subgrade
NOX_c_hm_sg = hm_sg_tm_v*1.96*14.07*0.511/1000;
//embankment
NOX_c_hm_em = hm_em_tm_v*1.96*14.07*0.511/1000;

tot3_hm_NOX = parseFloat(NOX_c_hm_wc)+parseFloat(NOX_c_hm_ba)+parseFloat(NOX_c_hm_sb)+parseFloat(NOX_c_hm_sg)+parseFloat(NOX_c_hm_em);
tot3_hm_NOX = tot3_hm_NOX/hm_wc_l;
localStorage.setItem("TOT3_HM_NOX", tot3_hm_NOX);
///////////////////////////////////////////
tot_hm_NOX = parseFloat(tot1_hm_NOX)+parseFloat(tot2_hm_NOX)+parseFloat(tot3_hm_NOX);
localStorage.setItem("TOT_HM_NOX", tot_hm_NOX);

 //SO2\\
// 1.material production
  //1. wearing course
  SO2_p_hm_wc_va = (parseFloat(hmc_wc_va_v)+parseFloat(hmm_wc_va_v))*2.92*11/1000;
  SO2_p_hm_wc_b = (parseFloat(hmc_wc_b_v)+parseFloat(hmm_wc_b_v))*1.1*5653/1000;
  SO2_p_hm_wc_w = (parseFloat(hmc_wc_w_v)+parseFloat(hmm_wc_w_v))*1.1*0.003/1000;
  SO2_p_hm_wc_tm = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*0.1816;

  //2.base
  SO2_p_hm_ba_r = (parseFloat(hmc_ba_r_v)+parseFloat(hmm_ba_r_v))*2.62*11/1000;
  SO2_p_hm_ba_g = (parseFloat(hmc_ba_g_v)+parseFloat(hmm_ba_g_v))*1.77*11/1000;
  SO2_p_hm_ba_sa = (parseFloat(hmc_ba_sa_v)+parseFloat(hmm_ba_sa_v))*1.63*11/1000;
  SO2_p_hm_ba_so = (parseFloat(hmc_ba_so_v)+parseFloat(hmm_ba_so_v))*2.13*131*0.93/315/1000;
  SO2_p_hm_ba_c = (parseFloat(hmc_ba_c_v)+parseFloat(hmm_ba_c_v))*1.66*3158/1000;

  //3.sub-base
  SO2_p_hm_sb_r = (parseFloat(hmc_sb_r_v)+parseFloat(hmm_sb_r_v))*2.62*11/1000;
  SO2_p_hm_sb_g = (parseFloat(hmc_sb_g_v)+parseFloat(hmm_sb_g_v))*1.77*11/1000;
  SO2_p_hm_sb_sa = (parseFloat(hmc_sb_sa_v)+parseFloat(hmm_sb_sa_v))*1.63*11/1000;
  SO2_p_hm_sb_so = (parseFloat(hmc_sb_so_v)+parseFloat(hmm_sb_so_v))*2.13*131*0.93/315/1000;
  SO2_p_hm_sb_c = (parseFloat(hmc_sb_c_v)+parseFloat(hmm_sb_c_v))*1.66*3158/1000;

  //4.subgrade
  SO2_p_hm_sg_r = (parseFloat(hmc_sg_r_v)+parseFloat(hmm_sg_r_v))*2.62*11/1000;
  SO2_p_hm_sg_g = (parseFloat(hmc_sg_g_v)+parseFloat(hmm_sg_g_v))*1.77*11/1000;
  SO2_p_hm_sg_sa = (parseFloat(hmc_sg_sa_v)+parseFloat(hmm_sg_sa_v))*1.63*11/1000;
  SO2_p_hm_sg_so = (parseFloat(hmc_sg_so_v)+parseFloat(hmm_sg_so_v))*2.13*131*0.93/315/1000;
  SO2_p_hm_sg_c = (parseFloat(hmc_sg_c_v)+parseFloat(hmm_sg_c_v))*1.66*3158/1000;

 //5.embankment
 SO2_p_hm_em_r = (parseFloat(hmc_em_r_v)+parseFloat(hmm_em_r_v))*2.62*11/1000;
 SO2_p_hm_em_g = (parseFloat(hmc_em_g_v)+parseFloat(hmm_em_g_v))*1.77*11/1000;
 SO2_p_hm_em_sa = (parseFloat(hmc_em_sa_v)+parseFloat(hmm_em_sa_v))*1.63*11/1000;
 SO2_p_hm_em_so = (parseFloat(hmc_em_so_v)+parseFloat(hmm_em_so_v))*2.13*131*0.93/315/1000;
 SO2_p_hm_em_c = (parseFloat(hmc_em_c_v)+parseFloat(hmm_em_c_v))*1.66*3158/1000;

 tot1_hm_SO2 = parseFloat(SO2_p_hm_wc_va)+parseFloat(SO2_p_hm_wc_b)+parseFloat(SO2_p_hm_wc_w)+parseFloat(SO2_p_hm_wc_tm)+parseFloat(SO2_p_hm_ba_r)+parseFloat(SO2_p_hm_ba_g)+parseFloat(SO2_p_hm_ba_sa)+parseFloat(SO2_p_hm_ba_so)+parseFloat(SO2_p_hm_ba_c)+parseFloat(SO2_p_hm_sb_r)+parseFloat(SO2_p_hm_sb_g)+parseFloat(SO2_p_hm_sb_sa)+parseFloat(SO2_p_hm_sb_so)+parseFloat(SO2_p_hm_sb_c)+parseFloat(SO2_p_hm_sg_r)+parseFloat(SO2_p_hm_sg_g)+parseFloat(SO2_p_hm_sg_sa)+parseFloat(SO2_p_hm_sg_so)+parseFloat(SO2_p_hm_sg_c)+parseFloat(SO2_p_hm_em_r)+parseFloat(SO2_p_hm_em_g)+parseFloat(SO2_p_hm_em_sa)+parseFloat(SO2_p_hm_em_so)+parseFloat(SO2_p_hm_em_c);
 tot1_hm_SO2 = tot1_hm_SO2/hm_wc_l;
 localStorage.setItem("TOT1_HM_SO2", tot1_hm_SO2);

//2.Material transportation
//1. wearing course
SO2_t_hm_wc_va = (parseFloat(hmc_wc_va_v*hmc_wc_va_td)+parseFloat(hmm_wc_va_v*hmm_wc_va_td))*2.92*0.18/1.102/1000;
SO2_t_hm_wc_b = (parseFloat(hmc_wc_b_v*hmc_wc_b_td)+parseFloat(hmm_wc_b_v*hmm_wc_b_td))*1.1*0.18/1.102/1000;
SO2_t_hm_wc_w = (parseFloat(hmc_wc_w_v*hmc_wc_w_td)+parseFloat(hmm_wc_w_v*hmm_wc_w_td))*1.1*0.18/1.102/1000;;
SO2_t_hm_wc_tm = (parseFloat(hmc_wc_tm_v*hmc_wc_tm_td)+parseFloat(hmm_wc_tm_v*hmm_wc_tm_td))*1.61*0.18/1.102/1000;

//2.base
SO2_t_hm_ba_r = (parseFloat(hmc_ba_r_v*hmc_ba_r_td)+parseFloat(hmm_ba_r_v*hmm_ba_r_td))*2.62*0.18/1.102/1000;
SO2_t_hm_ba_g = (parseFloat(hmc_ba_g_v*hmc_ba_g_td)+parseFloat(hmm_ba_g_v*hmm_ba_g_td))*1.77*0.18/1.102/1000;
SO2_t_hm_ba_sa = (parseFloat(hmc_ba_sa_v*hmc_ba_sa_td)+parseFloat(hmm_ba_sa_v*hmm_ba_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_hm_ba_so = (parseFloat(hmc_ba_so_v*hmc_ba_so_td)+parseFloat(hmm_ba_so_v*hmm_ba_so_td))*2.13*0.18/1.102/1000;
SO2_t_hm_ba_c = (parseFloat(hmc_ba_c_v*hmc_ba_c_td)+parseFloat(hmm_ba_c_v*hmm_ba_c_td))*1.66*0.18/1.102/1000;

//3.sub-base
SO2_t_hm_sb_r = (parseFloat(hmc_sb_r_v*hmc_sb_r_td)+parseFloat(hmm_sb_r_v*hmm_sb_r_td))*2.62*0.18/1.102/1000;
SO2_t_hm_sb_g = (parseFloat(hmc_sb_g_v*hmc_sb_g_td)+parseFloat(hmm_sb_g_v*hmm_sb_g_td))*1.77*0.18/1.102/1000;
SO2_t_hm_sb_sa = (parseFloat(hmc_sb_sa_v*hmc_sb_sa_td)+parseFloat(hmm_sb_sa_v*hmm_sb_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_hm_sb_so = (parseFloat(hmc_sb_so_v*hmc_sb_so_td)+parseFloat(hmm_sb_so_v*hmm_sb_so_td))*2.13*0.18/1.102/1000;
SO2_t_hm_sb_c = (parseFloat(hmc_sb_c_v*hmc_sb_c_td)+parseFloat(hmm_sb_c_v*hmm_sb_c_td))*1.66*0.18/1.102/1000;

//4.subgrade
SO2_t_hm_sg_r = (parseFloat(hmc_sg_r_v*hmc_sg_r_td)+parseFloat(hmm_sg_r_v*hmm_sg_r_td))*2.62*0.18/1.102/1000;
SO2_t_hm_sg_g = (parseFloat(hmc_sg_g_v*hmc_sg_g_td)+parseFloat(hmm_sg_g_v*hmm_sg_g_td))*1.77*0.18/1.102/1000;
SO2_t_hm_sg_sa = (parseFloat(hmc_sg_sa_v*hmc_sg_sa_td)+parseFloat(hmm_sg_sa_v*hmm_sg_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_hm_sg_so = (parseFloat(hmc_sg_so_v*hmc_sg_so_td)+parseFloat(hmm_sg_so_v*hmm_sg_so_td))*2.13*0.18/1.102/1000;
SO2_t_hm_sg_c = (parseFloat(hmc_sg_c_v*hmc_sg_c_td)+parseFloat(hmm_sg_c_v*hmm_sg_c_td))*1.66*0.18/1.102/1000;

//5.embankment
SO2_t_hm_em_r = (parseFloat(hmc_em_r_v*hmc_em_r_td)+parseFloat(hmm_em_r_v*hmm_em_r_td))*2.62*0.18/1.102/1000;
SO2_t_hm_em_g = (parseFloat(hmc_em_g_v*hmc_em_g_td)+parseFloat(hmm_em_g_v*hmm_em_g_td))*1.77*0.18/1.102/1000;
SO2_t_hm_em_sa = (parseFloat(hmc_em_sa_v*hmc_em_sa_td)+parseFloat(hmm_em_sa_v*hmm_em_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_hm_em_so = (parseFloat(hmc_em_so_v*hmc_em_so_td)+parseFloat(hmm_em_so_v*hmm_em_so_td))*2.13*0.18/1.102/1000;
SO2_t_hm_em_c = (parseFloat(hmc_em_c_v*hmc_em_c_td)+parseFloat(hmm_em_c_v*hmm_em_c_td))*1.66*0.18/1.102/1000;

tot2_hm_SO2 =  parseFloat(SO2_t_hm_wc_va)+parseFloat(SO2_t_hm_wc_b)+parseFloat(SO2_t_hm_wc_w)+parseFloat(SO2_t_hm_wc_tm)+parseFloat(SO2_t_hm_ba_r)+parseFloat(SO2_t_hm_ba_g)+parseFloat(SO2_t_hm_ba_sa)+parseFloat(SO2_t_hm_ba_so)+parseFloat(SO2_t_hm_ba_c)+parseFloat(SO2_t_hm_sb_r)+parseFloat(SO2_t_hm_sb_g)+parseFloat(SO2_t_hm_sb_sa)+parseFloat(SO2_t_hm_sb_so)+parseFloat(SO2_t_hm_sb_c)+parseFloat(SO2_t_hm_sg_r)+parseFloat(SO2_t_hm_sg_g)+parseFloat(SO2_t_hm_sg_sa)+parseFloat(SO2_t_hm_sg_so)+parseFloat(SO2_t_hm_sg_c)+parseFloat(SO2_t_hm_em_r)+parseFloat(SO2_t_hm_em_g)+parseFloat(SO2_t_hm_em_sa)+parseFloat(SO2_t_hm_em_so)+parseFloat(SO2_t_hm_em_c);
tot2_hm_SO2 = tot2_hm_SO2/hm_wc_l;
localStorage.setItem("TOT2_HM_SO2", tot2_hm_SO2);
//3.Construction Phase
//wearing course
SO2_c_hm_wc = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*0.93*0.776/1000;

//base
SO2_c_hm_ba = hm_ba_tm_v*1.96*0.93*0.511/1000;
//sub-base
SO2_c_hm_sb = hm_sb_tm_v*1.96*0.93*0.511/1000;
//subgrade
SO2_c_hm_sg = hm_sg_tm_v*1.96*0.93*0.511/1000;
//embankment
SO2_c_hm_em = hm_em_tm_v*1.96*0.93*0.511/1000;

tot3_hm_SO2 = parseFloat(SO2_c_hm_wc)+parseFloat(SO2_c_hm_ba)+parseFloat(SO2_c_hm_sb)+parseFloat(SO2_c_hm_sg)+parseFloat(SO2_c_hm_em);
tot3_hm_SO2 = tot3_hm_SO2/hm_wc_l;
localStorage.setItem("TOT3_HM_SO2", tot3_hm_SO2);
///////////////////////////////////////////
tot_hm_SO2 = parseFloat(tot1_hm_SO2)+parseFloat(tot2_hm_SO2)+parseFloat(tot3_hm_SO2);
localStorage.setItem("TOT_HM_SO2", tot_hm_SO2);

//CO\\
// 1.material production
  //1. wearing course
  CO_p_hm_wc_va = (parseFloat(hmc_wc_va_v)+parseFloat(hmm_wc_va_v))*2.92*14/1000;
  CO_p_hm_wc_b = (parseFloat(hmc_wc_b_v)+parseFloat(hmm_wc_b_v))*1.1*4736/1000;
  CO_p_hm_wc_w = (parseFloat(hmc_wc_w_v)+parseFloat(hmm_wc_w_v))*1.1*0.002/1000;
  CO_p_hm_wc_tm = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*0.1816;

  //2.base
  CO_p_hm_ba_r = (parseFloat(hmc_ba_r_v)+parseFloat(hmm_ba_r_v))*2.62*14/1000;
  CO_p_hm_ba_g = (parseFloat(hmc_ba_g_v)+parseFloat(hmm_ba_g_v))*1.77*14/1000;
  CO_p_hm_ba_sa = (parseFloat(hmc_ba_sa_v)+parseFloat(hmm_ba_sa_v))*1.63*14/1000;
  CO_p_hm_ba_so = (parseFloat(hmc_ba_so_v)+parseFloat(hmm_ba_so_v))*2.13*131*3.03/315/1000;
  CO_p_hm_ba_c = (parseFloat(hmc_ba_c_v)+parseFloat(hmm_ba_c_v))*1.66*1132/1000;

  //3.sub-base
  CO_p_hm_sb_r = (parseFloat(hmc_sb_r_v)+parseFloat(hmm_sb_r_v))*2.62*14/1000;
  CO_p_hm_sb_g = (parseFloat(hmc_sb_g_v)+parseFloat(hmm_sb_g_v))*1.77*14/1000;
  CO_p_hm_sb_sa = (parseFloat(hmc_sb_sa_v)+parseFloat(hmm_sb_sa_v))*1.63*14/1000;
  CO_p_hm_sb_so = (parseFloat(hmc_sb_so_v)+parseFloat(hmm_sb_so_v))*2.13*131*3.03/315/1000;
  CO_p_hm_sb_c = (parseFloat(hmc_sb_c_v)+parseFloat(hmm_sb_c_v))*1.66*1132/1000;

  //4.subgrade
  CO_p_hm_sg_r = (parseFloat(hmc_sg_r_v)+parseFloat(hmm_sg_r_v))*2.62*14/1000;
  CO_p_hm_sg_g = (parseFloat(hmc_sg_g_v)+parseFloat(hmm_sg_g_v))*1.77*14/1000;
  CO_p_hm_sg_sa = (parseFloat(hmc_sg_sa_v)+parseFloat(hmm_sg_sa_v))*1.63*14/1000;
  CO_p_hm_sg_so = (parseFloat(hmc_sg_so_v)+parseFloat(hmm_sg_so_v))*2.13*131*3.03/315/1000;
  CO_p_hm_sg_c = (parseFloat(hmc_sg_c_v)+parseFloat(hmm_sg_c_v))*1.66*1132/1000;

 //5.embankment
 CO_p_hm_em_r = (parseFloat(hmc_em_r_v)+parseFloat(hmm_em_r_v))*2.62*14/1000;
 CO_p_hm_em_g = (parseFloat(hmc_em_g_v)+parseFloat(hmm_em_g_v))*1.77*14/1000;
 CO_p_hm_em_sa = (parseFloat(hmc_em_sa_v)+parseFloat(hmm_em_sa_v))*1.63*14/1000;
 CO_p_hm_em_so = (parseFloat(hmc_em_so_v)+parseFloat(hmm_em_so_v))*2.13*131*3.03/315/1000;
 CO_p_hm_em_c = (parseFloat(hmc_em_c_v)+parseFloat(hmm_em_c_v))*1.66*1132/1000;

 tot1_hm_CO = parseFloat(CO_p_hm_wc_va)+parseFloat(CO_p_hm_wc_b)+parseFloat(CO_p_hm_wc_w)+parseFloat(CO_p_hm_wc_tm)+parseFloat(CO_p_hm_ba_r)+parseFloat(CO_p_hm_ba_g)+parseFloat(CO_p_hm_ba_sa)+parseFloat(CO_p_hm_ba_so)+parseFloat(CO_p_hm_ba_c)+parseFloat(CO_p_hm_sb_r)+parseFloat(CO_p_hm_sb_g)+parseFloat(CO_p_hm_sb_sa)+parseFloat(CO_p_hm_sb_so)+parseFloat(CO_p_hm_sb_c)+parseFloat(CO_p_hm_sg_r)+parseFloat(CO_p_hm_sg_g)+parseFloat(CO_p_hm_sg_sa)+parseFloat(CO_p_hm_sg_so)+parseFloat(CO_p_hm_sg_c)+parseFloat(CO_p_hm_em_r)+parseFloat(CO_p_hm_em_g)+parseFloat(CO_p_hm_em_sa)+parseFloat(CO_p_hm_em_so)+parseFloat(CO_p_hm_em_c);
 tot1_hm_CO = tot1_hm_CO/hm_wc_l;
 localStorage.setItem("TOT1_HM_CO", tot1_hm_CO);

//2.Material transportation
//1. wearing course
CO_t_hm_wc_va = (parseFloat(hmc_wc_va_v*hmc_wc_va_td)+parseFloat(hmm_wc_va_v*hmm_wc_va_td))*2.92*0.25/1.102/1000;
CO_t_hm_wc_b = (parseFloat(hmc_wc_b_v*hmc_wc_b_td)+parseFloat(hmm_wc_b_v*hmm_wc_b_td))*1.1*0.25/1.102/1000;
CO_t_hm_wc_w = (parseFloat(hmc_wc_w_v*hmc_wc_w_td)+parseFloat(hmm_wc_w_v*hmm_wc_w_td))*1.1*0.25/1.102/1000;;
CO_t_hm_wc_tm = (parseFloat(hmc_wc_tm_v*hmc_wc_tm_td)+parseFloat(hmm_wc_tm_v*hmm_wc_tm_td))*1.61*0.25/1.102/1000;

//2.base
CO_t_hm_ba_r = (parseFloat(hmc_ba_r_v*hmc_ba_r_td)+parseFloat(hmm_ba_r_v*hmm_ba_r_td))*2.62*0.25/1.102/1000;
CO_t_hm_ba_g = (parseFloat(hmc_ba_g_v*hmc_ba_g_td)+parseFloat(hmm_ba_g_v*hmm_ba_g_td))*1.77*0.25/1.102/1000;
CO_t_hm_ba_sa = (parseFloat(hmc_ba_sa_v*hmc_ba_sa_td)+parseFloat(hmm_ba_sa_v*hmm_ba_sa_td))*1.63*0.25/1.102/1000;;
CO_t_hm_ba_so = (parseFloat(hmc_ba_so_v*hmc_ba_so_td)+parseFloat(hmm_ba_so_v*hmm_ba_so_td))*2.13*0.25/1.102/1000;
CO_t_hm_ba_c = (parseFloat(hmc_ba_c_v*hmc_ba_c_td)+parseFloat(hmm_ba_c_v*hmm_ba_c_td))*1.66*0.25/1.102/1000;

//3.sub-base
CO_t_hm_sb_r = (parseFloat(hmc_sb_r_v*hmc_sb_r_td)+parseFloat(hmm_sb_r_v*hmm_sb_r_td))*2.62*0.25/1.102/1000;
CO_t_hm_sb_g = (parseFloat(hmc_sb_g_v*hmc_sb_g_td)+parseFloat(hmm_sb_g_v*hmm_sb_g_td))*1.77*0.25/1.102/1000;
CO_t_hm_sb_sa = (parseFloat(hmc_sb_sa_v*hmc_sb_sa_td)+parseFloat(hmm_sb_sa_v*hmm_sb_sa_td))*1.63*0.25/1.102/1000;;
CO_t_hm_sb_so = (parseFloat(hmc_sb_so_v*hmc_sb_so_td)+parseFloat(hmm_sb_so_v*hmm_sb_so_td))*2.13*0.25/1.102/1000;
CO_t_hm_sb_c = (parseFloat(hmc_sb_c_v*hmc_sb_c_td)+parseFloat(hmm_sb_c_v*hmm_sb_c_td))*1.66*0.25/1.102/1000;

//4.subgrade
CO_t_hm_sg_r = (parseFloat(hmc_sg_r_v*hmc_sg_r_td)+parseFloat(hmm_sg_r_v*hmm_sg_r_td))*2.62*0.25/1.102/1000;
CO_t_hm_sg_g = (parseFloat(hmc_sg_g_v*hmc_sg_g_td)+parseFloat(hmm_sg_g_v*hmm_sg_g_td))*1.77*0.25/1.102/1000;
CO_t_hm_sg_sa = (parseFloat(hmc_sg_sa_v*hmc_sg_sa_td)+parseFloat(hmm_sg_sa_v*hmm_sg_sa_td))*1.63*0.25/1.102/1000;;
CO_t_hm_sg_so = (parseFloat(hmc_sg_so_v*hmc_sg_so_td)+parseFloat(hmm_sg_so_v*hmm_sg_so_td))*2.13*0.25/1.102/1000;
CO_t_hm_sg_c = (parseFloat(hmc_sg_c_v*hmc_sg_c_td)+parseFloat(hmm_sg_c_v*hmm_sg_c_td))*1.66*0.25/1.102/1000;

//5.embankment
CO_t_hm_em_r = (parseFloat(hmc_em_r_v*hmc_em_r_td)+parseFloat(hmm_em_r_v*hmm_em_r_td))*2.62*0.25/1.102/1000;
CO_t_hm_em_g = (parseFloat(hmc_em_g_v*hmc_em_g_td)+parseFloat(hmm_em_g_v*hmm_em_g_td))*1.77*0.25/1.102/1000;
CO_t_hm_em_sa = (parseFloat(hmc_em_sa_v*hmc_em_sa_td)+parseFloat(hmm_em_sa_v*hmm_em_sa_td))*1.63*0.25/1.102/1000;;
CO_t_hm_em_so = (parseFloat(hmc_em_so_v*hmc_em_so_td)+parseFloat(hmm_em_so_v*hmm_em_so_td))*2.13*0.25/1.102/1000;
CO_t_hm_em_c = (parseFloat(hmc_em_c_v*hmc_em_c_td)+parseFloat(hmm_em_c_v*hmm_em_c_td))*1.66*0.25/1.102/1000;

tot2_hm_CO =  parseFloat(CO_t_hm_wc_va)+parseFloat(CO_t_hm_wc_b)+parseFloat(CO_t_hm_wc_w)+parseFloat(CO_t_hm_wc_tm)+parseFloat(CO_t_hm_ba_r)+parseFloat(CO_t_hm_ba_g)+parseFloat(CO_t_hm_ba_sa)+parseFloat(CO_t_hm_ba_so)+parseFloat(CO_t_hm_ba_c)+parseFloat(CO_t_hm_sb_r)+parseFloat(CO_t_hm_sb_g)+parseFloat(CO_t_hm_sb_sa)+parseFloat(CO_t_hm_sb_so)+parseFloat(CO_t_hm_sb_c)+parseFloat(CO_t_hm_sg_r)+parseFloat(CO_t_hm_sg_g)+parseFloat(CO_t_hm_sg_sa)+parseFloat(CO_t_hm_sg_so)+parseFloat(CO_t_hm_sg_c)+parseFloat(CO_t_hm_em_r)+parseFloat(CO_t_hm_em_g)+parseFloat(CO_t_hm_em_sa)+parseFloat(CO_t_hm_em_so)+parseFloat(CO_t_hm_em_c);
tot2_hm_CO = tot2_hm_CO/hm_wc_l;
localStorage.setItem("TOT2_HM_CO", tot2_hm_CO);

//3.Construction Phase
//wearing course
CO_c_hm_wc = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*3.03*0.776/1000;

//base
CO_c_hm_ba = hm_ba_tm_v*1.96*3.03*0.511/1000;
//sub-base
CO_c_hm_sb = hm_sb_tm_v*1.96*3.03*0.511/1000;
//subgrade
CO_c_hm_sg = hm_sg_tm_v*1.96*3.03*0.511/1000;
//embankment
CO_c_hm_em = hm_em_tm_v*1.96*3.03*0.511/1000;

tot3_hm_CO = parseFloat(CO_c_hm_wc)+parseFloat(CO_c_hm_ba)+parseFloat(CO_c_hm_sb)+parseFloat(CO_c_hm_sg)+parseFloat(CO_c_hm_em);
tot3_hm_CO = tot3_hm_CO/hm_wc_l;
localStorage.setItem("TOT3_HM_CO", tot3_hm_CO);

///////////////////////////////////////////
tot_hm_CO = parseFloat(tot1_hm_CO)+parseFloat(tot2_hm_CO)+parseFloat(tot3_hm_CO);
localStorage.setItem("TOT_HM_CO", tot_hm_CO);

 //PM10\\
// 1.material production
  //1. wearing course
  PM10_p_hm_wc_va = (parseFloat(hmc_wc_va_v)+parseFloat(hmm_wc_va_v))*2.92*157/1000;
  PM10_p_hm_wc_b = (parseFloat(hmc_wc_b_v)+parseFloat(hmm_wc_b_v))*1.1*1057/1000;
  PM10_p_hm_wc_w = (parseFloat(hmc_wc_w_v)+parseFloat(hmm_wc_w_v))*1.1*0.001/1000;
  PM10_p_hm_wc_tm = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*0.1816;

  //2.base
  PM10_p_hm_ba_r = (parseFloat(hmc_ba_r_v)+parseFloat(hmm_ba_r_v))*2.62*157/1000;
  PM10_p_hm_ba_g = (parseFloat(hmc_ba_g_v)+parseFloat(hmm_ba_g_v))*1.77*157/1000;
  PM10_p_hm_ba_sa = (parseFloat(hmc_ba_sa_v)+parseFloat(hmm_ba_sa_v))*1.63*157/1000;
  PM10_p_hm_ba_so = (parseFloat(hmc_ba_so_v)+parseFloat(hmm_ba_so_v))*2.13*131*1/315/1000;
  PM10_p_hm_ba_c = (parseFloat(hmc_ba_c_v)+parseFloat(hmm_ba_c_v))*1.66*597/1000;

  //3.sub-base
  PM10_p_hm_sb_r = (parseFloat(hmc_sb_r_v)+parseFloat(hmm_sb_r_v))*2.62*157/1000;
  PM10_p_hm_sb_g = (parseFloat(hmc_sb_g_v)+parseFloat(hmm_sb_g_v))*1.77*157/1000;
  PM10_p_hm_sb_sa = (parseFloat(hmc_sb_sa_v)+parseFloat(hmm_sb_sa_v))*1.63*157/1000;
  PM10_p_hm_sb_so = (parseFloat(hmc_sb_so_v)+parseFloat(hmm_sb_so_v))*2.13*131*1/315/1000;
  PM10_p_hm_sb_c = (parseFloat(hmc_sb_c_v)+parseFloat(hmm_sb_c_v))*1.66*597/1000;

  //4.subgrade
  PM10_p_hm_sg_r = (parseFloat(hmc_sg_r_v)+parseFloat(hmm_sg_r_v))*2.62*157/1000;
  PM10_p_hm_sg_g = (parseFloat(hmc_sg_g_v)+parseFloat(hmm_sg_g_v))*1.77*157/1000;
  PM10_p_hm_sg_sa = (parseFloat(hmc_sg_sa_v)+parseFloat(hmm_sg_sa_v))*1.63*157/1000;
  PM10_p_hm_sg_so = (parseFloat(hmc_sg_so_v)+parseFloat(hmm_sg_so_v))*2.13*131*1/315/1000;
  PM10_p_hm_sg_c = (parseFloat(hmc_sg_c_v)+parseFloat(hmm_sg_c_v))*1.66*597/1000;

 //5.embankment
 PM10_p_hm_em_r = (parseFloat(hmc_em_r_v)+parseFloat(hmm_em_r_v))*2.62*157/1000;
 PM10_p_hm_em_g = (parseFloat(hmc_em_g_v)+parseFloat(hmm_em_g_v))*1.77*157/1000;
 PM10_p_hm_em_sa = (parseFloat(hmc_em_sa_v)+parseFloat(hmm_em_sa_v))*1.63*157/1000;
 PM10_p_hm_em_so = (parseFloat(hmc_em_so_v)+parseFloat(hmm_em_so_v))*2.13*131*1/315/1000;
 PM10_p_hm_em_c = (parseFloat(hmc_em_c_v)+parseFloat(hmm_em_c_v))*1.66*597/1000;

 tot1_hm_PM10 = parseFloat(PM10_p_hm_wc_va)+parseFloat(PM10_p_hm_wc_b)+parseFloat(PM10_p_hm_wc_w)+parseFloat(PM10_p_hm_wc_tm)+parseFloat(PM10_p_hm_ba_r)+parseFloat(PM10_p_hm_ba_g)+parseFloat(PM10_p_hm_ba_sa)+parseFloat(PM10_p_hm_ba_so)+parseFloat(PM10_p_hm_ba_c)+parseFloat(PM10_p_hm_sb_r)+parseFloat(PM10_p_hm_sb_g)+parseFloat(PM10_p_hm_sb_sa)+parseFloat(PM10_p_hm_sb_so)+parseFloat(PM10_p_hm_sb_c)+parseFloat(PM10_p_hm_sg_r)+parseFloat(PM10_p_hm_sg_g)+parseFloat(PM10_p_hm_sg_sa)+parseFloat(PM10_p_hm_sg_so)+parseFloat(PM10_p_hm_sg_c)+parseFloat(PM10_p_hm_em_r)+parseFloat(PM10_p_hm_em_g)+parseFloat(PM10_p_hm_em_sa)+parseFloat(PM10_p_hm_em_so)+parseFloat(PM10_p_hm_em_c);
 tot1_hm_PM10 = tot1_hm_PM10/hm_wc_l;
 localStorage.setItem("TOT1_HM_PM10", tot1_hm_PM10);

//2.Material transportation
//1. wearing course
PM10_t_hm_wc_va = (parseFloat(hmc_wc_va_v*hmc_wc_va_td)+parseFloat(hmm_wc_va_v*hmm_wc_va_td))*2.92*0.58/1.102/1000;
PM10_t_hm_wc_b = (parseFloat(hmc_wc_b_v*hmc_wc_b_td)+parseFloat(hmm_wc_b_v*hmm_wc_b_td))*1.1*0.58/1.102/1000;
PM10_t_hm_wc_w = (parseFloat(hmc_wc_w_v*hmc_wc_w_td)+parseFloat(hmm_wc_w_v*hmm_wc_w_td))*1.1*0.58/1.102/1000;;
PM10_t_hm_wc_tm = (parseFloat(hmc_wc_tm_v*hmc_wc_tm_td)+parseFloat(hmm_wc_tm_v*hmm_wc_tm_td))*1.61*0.58/1.102/1000;

//2.base
PM10_t_hm_ba_r = (parseFloat(hmc_ba_r_v*hmc_ba_r_td)+parseFloat(hmm_ba_r_v*hmm_ba_r_td))*2.62*0.58/1.102/1000;
PM10_t_hm_ba_g = (parseFloat(hmc_ba_g_v*hmc_ba_g_td)+parseFloat(hmm_ba_g_v*hmm_ba_g_td))*1.77*0.58/1.102/1000;
PM10_t_hm_ba_sa = (parseFloat(hmc_ba_sa_v*hmc_ba_sa_td)+parseFloat(hmm_ba_sa_v*hmm_ba_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_hm_ba_so = (parseFloat(hmc_ba_so_v*hmc_ba_so_td)+parseFloat(hmm_ba_so_v*hmm_ba_so_td))*2.13*0.58/1.102/1000;
PM10_t_hm_ba_c = (parseFloat(hmc_ba_c_v*hmc_ba_c_td)+parseFloat(hmm_ba_c_v*hmm_ba_c_td))*1.66*0.58/1.102/1000;

//3.sub-base
PM10_t_hm_sb_r = (parseFloat(hmc_sb_r_v*hmc_sb_r_td)+parseFloat(hmm_sb_r_v*hmm_sb_r_td))*2.62*0.58/1.102/1000;
PM10_t_hm_sb_g = (parseFloat(hmc_sb_g_v*hmc_sb_g_td)+parseFloat(hmm_sb_g_v*hmm_sb_g_td))*1.77*0.58/1.102/1000;
PM10_t_hm_sb_sa = (parseFloat(hmc_sb_sa_v*hmc_sb_sa_td)+parseFloat(hmm_sb_sa_v*hmm_sb_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_hm_sb_so = (parseFloat(hmc_sb_so_v*hmc_sb_so_td)+parseFloat(hmm_sb_so_v*hmm_sb_so_td))*2.13*0.58/1.102/1000;
PM10_t_hm_sb_c = (parseFloat(hmc_sb_c_v*hmc_sb_c_td)+parseFloat(hmm_sb_c_v*hmm_sb_c_td))*1.66*0.58/1.102/1000;

//4.subgrade
PM10_t_hm_sg_r = (parseFloat(hmc_sg_r_v*hmc_sg_r_td)+parseFloat(hmm_sg_r_v*hmm_sg_r_td))*2.62*0.58/1.102/1000;
PM10_t_hm_sg_g = (parseFloat(hmc_sg_g_v*hmc_sg_g_td)+parseFloat(hmm_sg_g_v*hmm_sg_g_td))*1.77*0.58/1.102/1000;
PM10_t_hm_sg_sa = (parseFloat(hmc_sg_sa_v*hmc_sg_sa_td)+parseFloat(hmm_sg_sa_v*hmm_sg_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_hm_sg_so = (parseFloat(hmc_sg_so_v*hmc_sg_so_td)+parseFloat(hmm_sg_so_v*hmm_sg_so_td))*2.13*0.58/1.102/1000;
PM10_t_hm_sg_c = (parseFloat(hmc_sg_c_v*hmc_sg_c_td)+parseFloat(hmm_sg_c_v*hmm_sg_c_td))*1.66*0.58/1.102/1000;

//5.embankment
PM10_t_hm_em_r = (parseFloat(hmc_em_r_v*hmc_em_r_td)+parseFloat(hmm_em_r_v*hmm_em_r_td))*2.62*0.58/1.102/1000;
PM10_t_hm_em_g = (parseFloat(hmc_em_g_v*hmc_em_g_td)+parseFloat(hmm_em_g_v*hmm_em_g_td))*1.77*0.58/1.102/1000;
PM10_t_hm_em_sa = (parseFloat(hmc_em_sa_v*hmc_em_sa_td)+parseFloat(hmm_em_sa_v*hmm_em_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_hm_em_so = (parseFloat(hmc_em_so_v*hmc_em_so_td)+parseFloat(hmm_em_so_v*hmm_em_so_td))*2.13*0.58/1.102/1000;
PM10_t_hm_em_c = (parseFloat(hmc_em_c_v*hmc_em_c_td)+parseFloat(hmm_em_c_v*hmm_em_c_td))*1.66*0.58/1.102/1000;

tot2_hm_PM10 =  parseFloat(PM10_t_hm_wc_va)+parseFloat(PM10_t_hm_wc_b)+parseFloat(PM10_t_hm_wc_w)+parseFloat(PM10_t_hm_wc_tm)+parseFloat(PM10_t_hm_ba_r)+parseFloat(PM10_t_hm_ba_g)+parseFloat(PM10_t_hm_ba_sa)+parseFloat(PM10_t_hm_ba_so)+parseFloat(PM10_t_hm_ba_c)+parseFloat(PM10_t_hm_sb_r)+parseFloat(PM10_t_hm_sb_g)+parseFloat(PM10_t_hm_sb_sa)+parseFloat(PM10_t_hm_sb_so)+parseFloat(PM10_t_hm_sb_c)+parseFloat(PM10_t_hm_sg_r)+parseFloat(PM10_t_hm_sg_g)+parseFloat(PM10_t_hm_sg_sa)+parseFloat(PM10_t_hm_sg_so)+parseFloat(PM10_t_hm_sg_c)+parseFloat(PM10_t_hm_em_r)+parseFloat(PM10_t_hm_em_g)+parseFloat(PM10_t_hm_em_sa)+parseFloat(PM10_t_hm_em_so)+parseFloat(PM10_t_hm_em_c);
tot2_hm_PM10 = tot2_hm_PM10/hm_wc_l;
localStorage.setItem("TOT2_HM_PM10", tot2_hm_PM10);
//3.Construction Phase
//wearing course
PM10_c_hm_wc = (parseFloat(hmc_wc_tm_v)+parseFloat(hmm_wc_tm_v))*1.61*1*0.776/1000;

//base
PM10_c_hm_ba = hm_ba_tm_v*1.96*1*0.511/1000;
//sub-base
PM10_c_hm_sb = hm_sb_tm_v*1.96*1*0.511/1000;
//subgrade
PM10_c_hm_sg = hm_sg_tm_v*1.96*1*0.511/1000;
//embankment
PM10_c_hm_em = hm_em_tm_v*1.96*1*0.511/1000;

tot3_hm_PM10 = parseFloat(PM10_c_hm_wc)+parseFloat(PM10_c_hm_ba)+parseFloat(PM10_c_hm_sb)+parseFloat(PM10_c_hm_sg)+parseFloat(PM10_c_hm_em);
tot3_hm_PM10 = tot3_hm_PM10/hm_wc_l;
localStorage.setItem("TOT3_HM_PM10", tot3_hm_PM10);
///////////////////////////////////////////
tot_hm_PM10 = parseFloat(tot1_hm_PM10)+parseFloat(tot2_hm_PM10)+parseFloat(tot3_hm_PM10);
localStorage.setItem("TOT_HM_PM10", tot_hm_PM10);

/****************************************************END OF HOT MIX RESULTS************************************************ */

 //************************WARM MIX ASPHALT****************************

  //Layer specification
  const wm_wc_w = document.getElementById("wm_wc_w").value;
  const wm_wc_d = document.getElementById("wm_wc_d").value;
  const wm_wc_l = document.getElementById("wm_wc_l").value;

  const wm_ba_w = document.getElementById("wm_ba_w").value;
  const wm_ba_d = document.getElementById("wm_ba_d").value;
  const wm_ba_l = document.getElementById("wm_ba_l").value;

  const wm_sb_w = document.getElementById("wm_sb_w").value;
  const wm_sb_d = document.getElementById("wm_sb_d").value;
  const wm_sb_l = document.getElementById("wm_sb_l").value;

  const wm_sg_w = document.getElementById("wm_sg_w").value;
  const wm_sg_d = document.getElementById("wm_sg_d").value;
  const wm_sg_l = document.getElementById("wm_sg_l").value;

  
  //Initial construction materials
  //for wearing course
  const wmc_wc_va_v = document.getElementById("wmc_wc_va_v").value;
  const wmc_wc_va_td = document.getElementById("wmc_wc_va_td").value;

  const wmc_wc_b_v = document.getElementById("wmc_wc_b_v").value;
  const wmc_wc_b_td = document.getElementById("wmc_wc_b_td").value;

  const wmc_wc_w_v = document.getElementById("wmc_wc_w_v").value;
  const wmc_wc_w_td = document.getElementById("wmc_wc_w_td").value;

  const wmc_wc_tm_v = document.getElementById("wmc_wc_tm_v").value;
  const wmc_wc_tm_td = document.getElementById("wmc_wc_tm_td").value;

  //for base
  const wmc_ba_r_v = document.getElementById("wmc_ba_r_v").value;
  const wmc_ba_r_td = document.getElementById("wmc_ba_r_td").value;

  const wmc_ba_g_v = document.getElementById("wmc_ba_g_v").value;
  const wmc_ba_g_td = document.getElementById("wmc_ba_g_td").value;

  const wmc_ba_sa_v = document.getElementById("wmc_ba_sa_v").value;
  const wmc_ba_sa_td = document.getElementById("wmc_ba_sa_td").value;

  const wmc_ba_so_v = document.getElementById("wmc_ba_so_v").value;
  const wmc_ba_so_td = document.getElementById("wmc_ba_so_td").value;

  const wmc_ba_c_v = document.getElementById("wmc_ba_c_v").value;
  const wmc_ba_c_td = document.getElementById("wmc_ba_c_td").value;

    //for sub-base
    const wmc_sb_r_v = document.getElementById("wmc_sb_r_v").value;
    const wmc_sb_r_td = document.getElementById("wmc_sb_r_td").value;
  
    const wmc_sb_g_v = document.getElementById("wmc_sb_g_v").value;
    const wmc_sb_g_td = document.getElementById("wmc_sb_g_td").value;
  
    const wmc_sb_sa_v = document.getElementById("wmc_sb_sa_v").value;
    const wmc_sb_sa_td = document.getElementById("wmc_sb_sa_td").value;
  
    const wmc_sb_so_v = document.getElementById("wmc_sb_so_v").value;
    const wmc_sb_so_td = document.getElementById("wmc_sb_so_td").value;
  
    const wmc_sb_c_v = document.getElementById("wmc_sb_c_v").value;
    const wmc_sb_c_td = document.getElementById("wmc_sb_c_td").value;

    //for subgrade
    const wmc_sg_r_v = document.getElementById("wmc_sg_r_v").value;
    const wmc_sg_r_td = document.getElementById("wmc_sg_r_td").value;
  
    const wmc_sg_g_v = document.getElementById("wmc_sg_g_v").value;
    const wmc_sg_g_td = document.getElementById("wmc_sg_g_td").value;
  
    const wmc_sg_sa_v = document.getElementById("wmc_sg_sa_v").value;
    const wmc_sg_sa_td = document.getElementById("wmc_sg_sa_td").value;
  
    const wmc_sg_so_v = document.getElementById("wmc_sg_so_v").value;
    const wmc_sg_so_td = document.getElementById("wmc_sg_so_td").value;
  
    const wmc_sg_c_v = document.getElementById("wmc_sg_c_v").value;
    const wmc_sg_c_td = document.getElementById("wmc_sg_c_td").value;

    //for embankment
    const wmc_em_r_v = document.getElementById("wmc_em_r_v").value;
    const wmc_em_r_td = document.getElementById("wmc_em_r_td").value;
  
    const wmc_em_g_v = document.getElementById("wmc_em_g_v").value;
    const wmc_em_g_td = document.getElementById("wmc_em_g_td").value;
  
    const wmc_em_sa_v = document.getElementById("wmc_em_sa_v").value;
    const wmc_em_sa_td = document.getElementById("wmc_em_sa_td").value;
  
    const wmc_em_so_v = document.getElementById("wmc_em_so_v").value;
    const wmc_em_so_td = document.getElementById("wmc_em_so_td").value;
  
    const wmc_em_c_v = document.getElementById("wmc_em_c_v").value;
    const wmc_em_c_td = document.getElementById("wmc_em_c_td").value;

    //maintenance phase materials
  //for wearing course
  const wmm_wc_va_v = document.getElementById("wmm_wc_va_v").value;
  const wmm_wc_va_td = document.getElementById("wmm_wc_va_td").value;

  const wmm_wc_b_v = document.getElementById("wmm_wc_b_v").value;
  const wmm_wc_b_td = document.getElementById("wmm_wc_b_td").value;

  const wmm_wc_w_v = document.getElementById("wmm_wc_w_v").value;
  const wmm_wc_w_td = document.getElementById("wmm_wc_w_td").value;

  const wmm_wc_tm_v = document.getElementById("wmm_wc_tm_v").value;
  const wmm_wc_tm_td = document.getElementById("wmm_wc_tm_td").value;

  //for base
  const wmm_ba_r_v = document.getElementById("wmm_ba_r_v").value;
  const wmm_ba_r_td = document.getElementById("wmm_ba_r_td").value;

  const wmm_ba_g_v = document.getElementById("wmm_ba_g_v").value;
  const wmm_ba_g_td = document.getElementById("wmm_ba_g_td").value;

  const wmm_ba_sa_v = document.getElementById("wmm_ba_sa_v").value;
  const wmm_ba_sa_td = document.getElementById("wmm_ba_sa_td").value;

  const wmm_ba_so_v = document.getElementById("wmm_ba_so_v").value;
  const wmm_ba_so_td = document.getElementById("wmm_ba_so_td").value;

  const wmm_ba_c_v = document.getElementById("wmm_ba_c_v").value;
  const wmm_ba_c_td = document.getElementById("wmm_ba_c_td").value;

    //for sub-base
    const wmm_sb_r_v = document.getElementById("wmm_sb_r_v").value;
    const wmm_sb_r_td = document.getElementById("wmm_sb_r_td").value;
  
    const wmm_sb_g_v = document.getElementById("wmm_sb_g_v").value;
    const wmm_sb_g_td = document.getElementById("wmm_sb_g_td").value;
  
    const wmm_sb_sa_v = document.getElementById("wmm_sb_sa_v").value;
    const wmm_sb_sa_td = document.getElementById("wmm_sb_sa_td").value;
  
    const wmm_sb_so_v = document.getElementById("wmm_sb_so_v").value;
    const wmm_sb_so_td = document.getElementById("wmm_sb_so_td").value;
  
    const wmm_sb_c_v = document.getElementById("wmm_sb_c_v").value;
    const wmm_sb_c_td = document.getElementById("wmm_sb_c_td").value;

    //for subgrade
    const wmm_sg_r_v = document.getElementById("wmm_sg_r_v").value;
    const wmm_sg_r_td = document.getElementById("wmm_sg_r_td").value;
  
    const wmm_sg_g_v = document.getElementById("wmm_sg_g_v").value;
    const wmm_sg_g_td = document.getElementById("wmm_sg_g_td").value;
  
    const wmm_sg_sa_v = document.getElementById("wmm_sg_sa_v").value;
    const wmm_sg_sa_td = document.getElementById("wmm_sg_sa_td").value;
  
    const wmm_sg_so_v = document.getElementById("wmm_sg_so_v").value;
    const wmm_sg_so_td = document.getElementById("wmm_sg_so_td").value;
  
    const wmm_sg_c_v = document.getElementById("wmm_sg_c_v").value;
    const wmm_sg_c_td = document.getElementById("wmm_sg_c_td").value;

    //for embankment
    const wmm_em_r_v = document.getElementById("wmm_em_r_v").value;
    const wmm_em_r_td = document.getElementById("wmm_em_r_td").value;
  
    const wmm_em_g_v = document.getElementById("wmm_em_g_v").value;
    const wmm_em_g_td = document.getElementById("wmm_em_g_td").value;
  
    const wmm_em_sa_v = document.getElementById("wmm_em_sa_v").value;
    const wmm_em_sa_td = document.getElementById("wmm_em_sa_td").value;
  
    const wmm_em_so_v = document.getElementById("wmm_em_so_v").value;
    const wmm_em_so_td = document.getElementById("wmm_em_so_td").value;
  
    const wmm_em_c_v = document.getElementById("wmm_em_c_v").value;
    const wmm_em_c_td = document.getElementById("wmm_em_c_td").value;


    // Use all formulas here
  // 1.material production
  //initial construction phase

  //1. wearing course
  enp_wmc_wc_va = wmc_wc_va_v*2.92*154;
  enp_wmc_wc_b = wmc_wc_b_v*1.1*19757;
  enp_wmc_wc_w = wmc_wc_w_v*1.1*0.006;
  enp_wmc_wc_tm = wmc_wc_tm_v*1.61*227;

  //2.base
  enp_wmc_ba_r = wmc_ba_r_v*2.62*154;
  enp_wmc_ba_g = wmc_ba_g_v*1.77*154;
  enp_wmc_ba_sa = wmc_ba_sa_v*1.63*154;
  enp_wmc_ba_so = wmc_ba_so_v*2.13*3.58*34.2*10/315;
  enp_wmc_ba_c = wmc_ba_c_v*1.66*3775;

  //3.sub-base
  enp_wmc_sb_r = wmc_sb_r_v*2.62*154;
  enp_wmc_sb_g = wmc_sb_g_v*1.77*154;
  enp_wmc_sb_sa = wmc_sb_sa_v*1.63*154;
  enp_wmc_sb_so = wmc_sb_so_v*2.13*3.58*34.2*10/315;
  enp_wmc_sb_c = wmc_sb_c_v*1.66*3775;

  //4.subgrade
  enp_wmc_sg_r = wmc_sg_r_v*2.62*154;
  enp_wmc_sg_g = wmc_sg_g_v*1.77*154;
  enp_wmc_sg_sa = wmc_sg_sa_v*1.63*154;
  enp_wmc_sg_so = wmc_sg_so_v*2.13*3.58*34.2*10/315;
  enp_wmc_sg_c = wmc_sg_c_v*1.66*3775;

 //5.embankment
 enp_wmc_em_r = wmc_em_r_v*2.62*154;
 enp_wmc_em_g = wmc_em_g_v*1.77*154;
 enp_wmc_em_sa = wmc_em_sa_v*1.63*154;
 enp_wmc_em_so = wmc_em_so_v*2.13*3.58*34.2*10/315;
 enp_wmc_em_c = wmc_em_c_v*1.66*3775;

//maintenace phase
//1. wearing course
enp_wmm_wc_va = wmm_wc_va_v*2.92*154;
enp_wmm_wc_b = wmm_wc_b_v*1.1*19757;
enp_wmm_wc_w = wmm_wc_w_v*1.1*0.006;
enp_wmm_wc_tm = wmm_wc_tm_v*1.61*227;

//2.base
enp_wmm_ba_r = wmm_ba_r_v*2.62*154;
enp_wmm_ba_g = wmm_ba_g_v*1.77*154;
enp_wmm_ba_sa = wmm_ba_sa_v*1.63*154;
enp_wmm_ba_so = wmm_ba_so_v*2.13*3.58*34.2*10/315;
enp_wmm_ba_c = wmm_ba_c_v*1.66*3775;

//3.sub-base
enp_wmm_sb_r = wmm_sb_r_v*2.62*154;
enp_wmm_sb_g = wmm_sb_g_v*1.77*154;
enp_wmm_sb_sa = wmm_sb_sa_v*1.63*154;
enp_wmm_sb_so = wmm_sb_so_v*2.13*3.58*34.2*10/315;
enp_wmm_sb_c = wmm_sb_c_v*1.66*3775;

//4.subgrade
enp_wmm_sg_r = wmm_sg_r_v*2.62*154;
enp_wmm_sg_g = wmm_sg_g_v*1.77*154;
enp_wmm_sg_sa = wmm_sg_sa_v*1.63*154;
enp_wmm_sg_so = wmm_sg_so_v*2.13*3.58*34.2*10/315;
enp_wmm_sg_c = wmm_sg_c_v*1.66*3775;

//5.embankment
enp_wmm_em_r = wmm_em_r_v*2.62*154;
enp_wmm_em_g = wmm_em_g_v*1.77*154;
enp_wmm_em_sa = wmm_em_sa_v*1.63*154;
enp_wmm_em_so = wmm_em_so_v*2.13*3.58*34.2*10/315;
enp_wmm_em_c = wmm_em_c_v*1.66*3775;

tot1_wm_en = parseFloat(enp_wmc_wc_va)+parseFloat(enp_wmc_wc_b)+parseFloat(enp_wmc_wc_w)+parseFloat(enp_wmc_wc_tm)+parseFloat(enp_wmc_ba_r)+parseFloat(enp_wmc_ba_g)+parseFloat(enp_wmc_ba_sa)+parseFloat(enp_wmc_ba_so)+parseFloat(enp_wmc_ba_c)+parseFloat(
 enp_wmc_sb_r)+parseFloat(enp_wmc_sb_g)+parseFloat(enp_wmc_sb_sa)+parseFloat(enp_wmc_sb_so)+parseFloat(enp_wmc_sb_c)+parseFloat(enp_wmc_sg_r)+parseFloat(enp_wmc_sg_g)+parseFloat(enp_wmc_sg_sa)+parseFloat(enp_wmc_sg_so)+parseFloat(enp_wmc_sg_c)+parseFloat(
 enp_wmc_em_r)+parseFloat(enp_wmc_em_g)+parseFloat(enp_wmc_em_sa)+parseFloat(enp_wmc_em_so)+parseFloat(enp_wmc_em_c)+parseFloat(enp_wmm_wc_va)+parseFloat(enp_wmm_wc_b)+parseFloat(enp_wmm_wc_w)+parseFloat(enp_wmm_wc_tm)+parseFloat(enp_wmm_ba_r)+parseFloat(enp_wmm_ba_g)+parseFloat(enp_wmm_ba_sa)+parseFloat(enp_wmm_ba_so)+parseFloat(enp_wmm_ba_c)+parseFloat(
 enp_wmm_sb_r)+parseFloat(enp_wmm_sb_g)+parseFloat(enp_wmm_sb_sa)+parseFloat(enp_wmm_sb_so)+parseFloat(enp_wmm_sb_c)+parseFloat(enp_wmm_sg_r)+parseFloat(enp_wmm_sg_g)+parseFloat(enp_wmm_sg_sa)+parseFloat(enp_wmm_sg_so)+parseFloat(enp_wmm_sg_c)+parseFloat(
 enp_wmm_em_r)+parseFloat(enp_wmm_em_g)+parseFloat(enp_wmm_em_sa)+parseFloat(enp_wmm_em_so)+parseFloat(enp_wmm_em_c);
 tot1_wm_en = tot1_wm_en/wm_wc_l/1.191;
 localStorage.setItem("TOT1_WM_EN", tot1_wm_en);
//2.Transportation energy
//initial construction phase
//1. wearing course

ent_wmc_wc_va = wmc_wc_va_v*wmc_wc_va_td*2.92*0.42*35.85/1.02/20;
ent_wmc_wc_b = wmc_wc_b_v*wmc_wc_b_td*1.1*0.42*35.85/1.02/20;
ent_wmc_wc_w = wmc_wc_w_v*wmc_wc_w_td*1.1*0.42*35.85/1.02/20;
ent_wmc_wc_tm = wmc_wc_tm_v*wmc_wc_tm_td*1.61*0.42*35.85/1.02/20;

//2.base
ent_wmc_ba_r = wmc_ba_r_v*wmc_ba_r_td*2.62*0.42*35.85/1.02/20;
ent_wmc_ba_g = wmc_ba_g_v*wmc_ba_g_td*1.77*0.42*35.85/1.02/20;
ent_wmc_ba_sa = wmc_ba_sa_v*wmc_ba_sa_td*1.63*0.42*35.85/1.02/20;
ent_wmc_ba_so = wmc_ba_so_v*wmc_ba_so_td*2.13**0.42*35.85/1.02/20;
ent_wmc_ba_c = wmc_ba_c_v*wmc_ba_c_td*1.66**0.42*35.85/1.02/20;

//3.sub-base
ent_wmc_sb_r = wmc_sb_r_v*wmc_sb_r_td*2.62*0.42*35.85/1.02/20;
ent_wmc_sb_g = wmc_sb_g_v*wmc_sb_g_td*1.77*0.42*35.85/1.02/20;
ent_wmc_sb_sa = wmc_sb_sa_v*wmc_sb_sa_td*1.63*0.42*35.85/1.02/20;
ent_wmc_sb_so = wmc_sb_so_v*wmc_sb_so_td*2.13**0.42*35.85/1.02/20;
ent_wmc_sb_c = wmc_sb_c_v*wmc_sb_c_td*1.66**0.42*35.85/1.02/20;

//4.subgrade
ent_wmc_sg_r = wmc_sg_r_v*wmc_sg_r_td*2.62*0.42*35.85/1.02/20;
ent_wmc_sg_g = wmc_sg_g_v*wmc_sg_g_td*1.77*0.42*35.85/1.02/20;
ent_wmc_sg_sa = wmc_sg_sa_v*wmc_sg_sa_td*1.63*0.42*35.85/1.02/20;
ent_wmc_sg_so = wmc_sg_so_v*wmc_sg_so_td*2.13**0.42*35.85/1.02/20;
ent_wmc_sg_c = wmc_sg_c_v*wmc_sg_c_td*1.66**0.42*35.85/1.02/20;

//5.embankment
ent_wmc_em_r = wmc_em_r_v*wmc_em_r_td*2.62*0.42*35.85/1.02/20;
ent_wmc_em_g = wmc_em_g_v*wmc_em_g_td*1.77*0.42*35.85/1.02/20;
ent_wmc_em_sa = wmc_em_sa_v*wmc_em_sa_td*1.63*0.42*35.85/1.02/20;
ent_wmc_em_so = wmc_em_so_v*wmc_em_so_td*2.13**0.42*35.85/1.02/20;
ent_wmc_em_c = wmc_em_c_v*wmc_em_c_td*1.66**0.42*35.85/1.02/20;

//maintenance phase
//1. wearing course
ent_wmm_wc_va = wmm_wc_va_v*wmm_wc_va_td*2.92*0.42*35.85/1.02/20;
ent_wmm_wc_b = wmm_wc_b_v*wmm_wc_b_td*1.1*0.42*35.85/1.02/20;
ent_wmm_wc_w = wmm_wc_w_v*wmm_wc_w_td*1.1*0.42*35.85/1.02/20;
ent_wmm_wc_tm = wmm_wc_tm_v*wmm_wc_tm_td*1.61*0.42*35.85/1.02/20;

//2.base
ent_wmm_ba_r = wmm_ba_r_v*wmm_ba_r_td*2.62*0.42*35.85/1.02/20;
ent_wmm_ba_g = wmm_ba_g_v*wmm_ba_g_td*1.77*0.42*35.85/1.02/20;
ent_wmm_ba_sa = wmm_ba_sa_v*wmm_ba_sa_td*1.63*0.42*35.85/1.02/20;
ent_wmm_ba_so = wmm_ba_so_v*wmm_ba_so_td*2.13**0.42*35.85/1.02/20;
ent_wmm_ba_c = wmm_ba_c_v*wmm_ba_c_td*1.66**0.42*35.85/1.02/20;

//3.sub-base
ent_wmm_sb_r = wmm_sb_r_v*wmm_sb_r_td*2.62*0.42*35.85/1.02/20;
ent_wmm_sb_g = wmm_sb_g_v*wmm_sb_g_td*1.77*0.42*35.85/1.02/20;
ent_wmm_sb_sa = wmm_sb_sa_v*wmm_sb_sa_td*1.63*0.42*35.85/1.02/20;
ent_wmm_sb_so = wmm_sb_so_v*wmm_sb_so_td*2.13**0.42*35.85/1.02/20;
ent_wmm_sb_c = wmm_sb_c_v*wmm_sb_c_td*1.66**0.42*35.85/1.02/20;

//4.subgrade
ent_wmm_sg_r = wmm_sg_r_v*wmm_sg_r_td*2.62*0.42*35.85/1.02/20;
ent_wmm_sg_g = wmm_sg_g_v*wmm_sg_g_td*1.77*0.42*35.85/1.02/20;
ent_wmm_sg_sa = wmm_sg_sa_v*wmm_sg_sa_td*1.63*0.42*35.85/1.02/20;
ent_wmm_sg_so = wmm_sg_so_v*wmm_sg_so_td*2.13**0.42*35.85/1.02/20;
ent_wmm_sg_c = wmm_sg_c_v*wmm_sg_c_td*1.66**0.42*35.85/1.02/20;

//5.embankment
ent_wmm_em_r = wmm_em_r_v*wmm_em_r_td*2.62*0.42*35.85/1.02/20;
ent_wmm_em_g = wmm_em_g_v*wmm_em_g_td*1.77*0.42*35.85/1.02/20;
ent_wmm_em_sa = wmm_em_sa_v*wmm_em_sa_td*1.63*0.42*35.85/1.02/20;
ent_wmm_em_so = wmm_em_so_v*wmm_em_so_td*2.13**0.42*35.85/1.02/20;
ent_wmm_em_c = wmm_em_c_v*wmm_em_c_td*1.66**0.42*35.85/1.02/20;

tot2_wm_en = parseFloat(ent_wmc_wc_va)+parseFloat(ent_wmc_wc_b)+parseFloat(ent_wmc_wc_w)+parseFloat(ent_wmc_wc_tm)+parseFloat(ent_wmc_ba_r)+parseFloat(ent_wmc_ba_g)+parseFloat(ent_wmc_ba_sa)+parseFloat(ent_wmc_ba_so)+parseFloat(ent_wmc_ba_c)+parseFloat(
 ent_wmc_sb_r)+parseFloat(ent_wmc_sb_g)+parseFloat(ent_wmc_sb_sa)+parseFloat(ent_wmc_sb_so)+parseFloat(ent_wmc_sb_c)+parseFloat(ent_wmc_sg_r)+parseFloat(ent_wmc_sg_g)+parseFloat(ent_wmc_sg_sa)+parseFloat(ent_wmc_sg_so)+parseFloat(ent_wmc_sg_c)+parseFloat(
 ent_wmc_em_r)+parseFloat(ent_wmc_em_g)+parseFloat(ent_wmc_em_sa)+parseFloat(ent_wmc_em_so)+parseFloat(ent_wmc_em_c)+parseFloat(ent_wmm_wc_va)+parseFloat(ent_wmm_wc_b)+parseFloat(ent_wmm_wc_w)+parseFloat(ent_wmm_wc_tm)+parseFloat(ent_wmm_ba_r)+parseFloat(ent_wmm_ba_g)+parseFloat(ent_wmm_ba_sa)+parseFloat(ent_wmm_ba_so)+parseFloat(ent_wmm_ba_c)+parseFloat(
 ent_wmm_sb_r)+parseFloat(ent_wmm_sb_g)+parseFloat(ent_wmm_sb_sa)+parseFloat(ent_wmm_sb_so)+parseFloat(ent_wmm_sb_c)+parseFloat(ent_wmm_sg_r)+parseFloat(ent_wmm_sg_g)+parseFloat(ent_wmm_sg_sa)+parseFloat(ent_wmm_sg_so)+parseFloat(ent_wmm_sg_c)+parseFloat(
 ent_wmm_em_r)+parseFloat(ent_wmm_em_g)+parseFloat(ent_wmm_em_sa)+parseFloat(ent_wmm_em_so)+parseFloat(ent_wmm_em_c);
 tot2_wm_en = tot2_wm_en/wm_wc_l;
 localStorage.setItem("TOT2_WM_EN", tot2_wm_en);

//3.Construction Phase
//wearing course
enc_wm_wc = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*3.58*10*0.174;

//now we have to take the sum of all the base materilas (initila )+parseFloat( maint) and then proceed with the formula
wm_ba_tm_v = parseFloat(wmc_ba_r_v)+parseFloat(wmm_ba_r_v)+parseFloat(wmc_ba_g_v)+parseFloat(wmm_ba_g_v)+parseFloat(wmc_ba_sa_v)+parseFloat(wmm_ba_sa_v)+parseFloat(wmc_ba_so_v)+parseFloat(wmm_ba_so_v)+parseFloat(wmc_ba_c_v)+parseFloat(wmm_ba_c_v);
wm_sb_tm_v = parseFloat(wmc_sb_r_v)+parseFloat(wmm_sb_r_v)+parseFloat(wmc_sb_g_v)+parseFloat(wmm_sb_g_v)+parseFloat(wmc_sb_sa_v)+parseFloat(wmm_sb_sa_v)+parseFloat(wmc_sb_so_v)+parseFloat(wmm_sb_so_v)+parseFloat(wmc_sb_c_v)+parseFloat(wmm_sb_c_v);
wm_sg_tm_v = parseFloat(wmc_sg_r_v)+parseFloat(wmm_sg_r_v)+parseFloat(wmc_sg_g_v)+parseFloat(wmm_sg_g_v)+parseFloat(wmc_sg_sa_v)+parseFloat(wmm_sg_sa_v)+parseFloat(wmc_sg_so_v)+parseFloat(wmm_sg_so_v)+parseFloat(wmc_sg_c_v)+parseFloat(wmm_sg_c_v);
wm_em_tm_v = parseFloat(wmc_em_r_v)+parseFloat(wmm_em_r_v)+parseFloat(wmc_em_g_v)+parseFloat(wmm_em_g_v)+parseFloat(wmc_em_sa_v)+parseFloat(wmm_em_sa_v)+parseFloat(wmc_em_so_v)+parseFloat(wmm_em_so_v)+parseFloat(wmc_em_c_v)+parseFloat(wmm_em_c_v);

//base
enc_wm_ba = wm_ba_tm_v*1.96*3.58*10*0.123;
//sub-base
enc_wm_sb = wm_sb_tm_v*1.96*3.58*10*0.123;
//subgrade
enc_wm_sg = wm_sg_tm_v*1.96*3.58*10*0.123;
//embankment
enc_wm_em = wm_em_tm_v*1.96*3.58*10*0.123;

tot3_wm_en = parseFloat(enc_wm_wc)+parseFloat(enc_wm_ba)+parseFloat(enc_wm_sb)+parseFloat(enc_wm_sg)+parseFloat(enc_wm_em);
tot3_wm_en = tot3_wm_en/1.59/wm_wc_l;
localStorage.setItem("TOT3_WM_EN", tot3_wm_en);

tot_wm_en = parseFloat(tot1_wm_en )+parseFloat( tot2_wm_en )+parseFloat( tot3_wm_en);
localStorage.setItem("TOT_WM_EN", tot_wm_en);

////////////////// energy part completed //////////////////////////
 

////////////////////CHG EMISSION/////////////////////////////////////

                          //CO2\\
// 1.material production
  //1. wearing course
  CO2_p_wm_wc_va = (parseFloat(wmc_wc_va_v)+parseFloat(wmm_wc_va_v))*2.92*10922/1000;
  CO2_p_wm_wc_b = (parseFloat(wmc_wc_b_v)+parseFloat(wmm_wc_b_v))*1.1*121978/1000;
  CO2_p_wm_wc_w = (parseFloat(wmc_wc_w_v)+parseFloat(wmm_wc_w_v))*1.1*0.497/1000;
  CO2_p_wm_wc_tm = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*2.04;

  //2.base
  CO2_p_wm_ba_r = (parseFloat(wmc_ba_r_v)+parseFloat(wmm_ba_r_v))*2.62*10922/1000;
  CO2_p_wm_ba_g = (parseFloat(wmc_ba_g_v)+parseFloat(wmm_ba_g_v))*1.77*10922/1000;
  CO2_p_wm_ba_sa = (parseFloat(wmc_ba_sa_v)+parseFloat(wmm_ba_sa_v))*1.63*10922/1000;
  CO2_p_wm_ba_so = (parseFloat(wmc_ba_so_v)+parseFloat(wmm_ba_so_v))*2.13*34.2*852*3.16/315/1000;
  CO2_p_wm_ba_c = (parseFloat(wmc_ba_c_v)+parseFloat(wmm_ba_c_v))*1.66*264925/1000;

  //3.sub-base
  CO2_p_wm_sb_r = (parseFloat(wmc_sb_r_v)+parseFloat(wmm_sb_r_v))*2.62*10922/1000;
  CO2_p_wm_sb_g = (parseFloat(wmc_sb_g_v)+parseFloat(wmm_sb_g_v))*1.77*10922/1000;
  CO2_p_wm_sb_sa = (parseFloat(wmc_sb_sa_v)+parseFloat(wmm_sb_sa_v))*1.63*10922/1000;
  CO2_p_wm_sb_so = (parseFloat(wmc_sb_so_v)+parseFloat(wmm_sb_so_v))*2.13*34.2*852*3.16/315/1000;
  CO2_p_wm_sb_c = (parseFloat(wmc_sb_c_v)+parseFloat(wmm_sb_c_v))*1.66*264925/1000;

  //4.subgrade
  CO2_p_wm_sg_r = (parseFloat(wmc_sg_r_v)+parseFloat(wmm_sg_r_v))*2.62*10922/1000;
  CO2_p_wm_sg_g = (parseFloat(wmc_sg_g_v)+parseFloat(wmm_sg_g_v))*1.77*10922/1000;
  CO2_p_wm_sg_sa = (parseFloat(wmc_sg_sa_v)+parseFloat(wmm_sg_sa_v))*1.63*10922/1000;
  CO2_p_wm_sg_so = (parseFloat(wmc_sg_so_v)+parseFloat(wmm_sg_so_v))*2.13*34.2*852*3.16/315/1000;
  CO2_p_wm_sg_c = (parseFloat(wmc_sg_c_v)+parseFloat(wmm_sg_c_v))*1.66*264925/1000;

 //5.embankment
 CO2_p_wm_em_r = (parseFloat(wmc_em_r_v)+parseFloat(wmm_em_r_v))*2.62*10922/1000;
 CO2_p_wm_em_g = (parseFloat(wmc_em_g_v)+parseFloat(wmm_em_g_v))*1.77*10922/1000;
 CO2_p_wm_em_sa = (parseFloat(wmc_em_sa_v)+parseFloat(wmm_em_sa_v))*1.63*10922/1000;
 CO2_p_wm_em_so = (parseFloat(wmc_em_so_v)+parseFloat(wmm_em_so_v))*2.13*34.2*852*3.16/315/1000;
 CO2_p_wm_em_c = (parseFloat(wmc_em_c_v)+parseFloat(wmm_em_c_v))*1.66*264925/1000;

 tot1_wm_CO2 = parseFloat(CO2_p_wm_wc_va)+parseFloat(CO2_p_wm_wc_b)+parseFloat(CO2_p_wm_wc_w)+parseFloat(CO2_p_wm_wc_tm)+parseFloat(CO2_p_wm_ba_r)+parseFloat(CO2_p_wm_ba_g)+parseFloat(CO2_p_wm_ba_sa)+parseFloat(CO2_p_wm_ba_so)+parseFloat(CO2_p_wm_ba_c)+parseFloat(CO2_p_wm_sb_r)+parseFloat(CO2_p_wm_sb_g)+parseFloat(CO2_p_wm_sb_sa)+parseFloat(CO2_p_wm_sb_so)+parseFloat(CO2_p_wm_sb_c)+parseFloat(CO2_p_wm_sg_r)+parseFloat(CO2_p_wm_sg_g)+parseFloat(CO2_p_wm_sg_sa)+parseFloat(CO2_p_wm_sg_so)+parseFloat(CO2_p_wm_sg_c)+parseFloat(CO2_p_wm_em_r)+parseFloat(CO2_p_wm_em_g)+parseFloat(CO2_p_wm_em_sa)+parseFloat(CO2_p_wm_em_so)+parseFloat(CO2_p_wm_em_c);
 tot1_wm_CO2 = tot1_wm_CO2/1.189/wm_wc_l;
 localStorage.setItem("TOT1_WM_CO2", tot1_wm_CO2);

//2.Material transportation
//1. wearing course
CO2_t_wm_wc_va = (parseFloat(wmc_wc_va_v*wmc_wc_va_td)+parseFloat(wmm_wc_va_v*wmm_wc_va_td))*2.92*0.42*2678.89/1.102/20/1000;
CO2_t_wm_wc_b = (parseFloat(wmc_wc_b_v*wmc_wc_b_td)+parseFloat(wmm_wc_b_v*wmm_wc_b_td))*1.1*0.42*2678.89/1.102/20/1000;
CO2_t_wm_wc_w = (parseFloat(wmc_wc_w_v*wmc_wc_w_td)+parseFloat(wmm_wc_w_v*wmm_wc_w_td))*1.1*0.42*2678.89/1.102/20/1000;;
CO2_t_wm_wc_tm = (parseFloat(wmc_wc_tm_v*wmc_wc_tm_td)+parseFloat(wmm_wc_tm_v*wmm_wc_tm_td))*1.61*0.42*2678.89/1.102/20/1000;

//2.base
CO2_t_wm_ba_r = (parseFloat(wmc_ba_r_v*wmc_ba_r_td)+parseFloat(wmm_ba_r_v*wmm_ba_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_wm_ba_g = (parseFloat(wmc_ba_g_v*wmc_ba_g_td)+parseFloat(wmm_ba_g_v*wmm_ba_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_wm_ba_sa = (parseFloat(wmc_ba_sa_v*wmc_ba_sa_td)+parseFloat(wmm_ba_sa_v*wmm_ba_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_wm_ba_so = (parseFloat(wmc_ba_so_v*wmc_ba_so_td)+parseFloat(wmm_ba_so_v*wmm_ba_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_wm_ba_c = (parseFloat(wmc_ba_c_v*wmc_ba_c_td)+parseFloat(wmm_ba_c_v*wmm_ba_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//3.sub-base
CO2_t_wm_sb_r = (parseFloat(wmc_sb_r_v*wmc_sb_r_td)+parseFloat(wmm_sb_r_v*wmm_sb_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_wm_sb_g = (parseFloat(wmc_sb_g_v*wmc_sb_g_td)+parseFloat(wmm_sb_g_v*wmm_sb_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_wm_sb_sa = (parseFloat(wmc_sb_sa_v*wmc_sb_sa_td)+parseFloat(wmm_sb_sa_v*wmm_sb_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_wm_sb_so = (parseFloat(wmc_sb_so_v*wmc_sb_so_td)+parseFloat(wmm_sb_so_v*wmm_sb_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_wm_sb_c = (parseFloat(wmc_sb_c_v*wmc_sb_c_td)+parseFloat(wmm_sb_c_v*wmm_sb_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//4.subgrade
CO2_t_wm_sg_r = (parseFloat(wmc_sg_r_v*wmc_sg_r_td)+parseFloat(wmm_sg_r_v*wmm_sg_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_wm_sg_g = (parseFloat(wmc_sg_g_v*wmc_sg_g_td)+parseFloat(wmm_sg_g_v*wmm_sg_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_wm_sg_sa = (parseFloat(wmc_sg_sa_v*wmc_sg_sa_td)+parseFloat(wmm_sg_sa_v*wmm_sg_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_wm_sg_so = (parseFloat(wmc_sg_so_v*wmc_sg_so_td)+parseFloat(wmm_sg_so_v*wmm_sg_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_wm_sg_c = (parseFloat(wmc_sg_c_v*wmc_sg_c_td)+parseFloat(wmm_sg_c_v*wmm_sg_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//5.embankment
CO2_t_wm_em_r = (parseFloat(wmc_em_r_v*wmc_em_r_td)+parseFloat(wmm_em_r_v*wmm_em_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_wm_em_g = (parseFloat(wmc_em_g_v*wmc_em_g_td)+parseFloat(wmm_em_g_v*wmm_em_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_wm_em_sa = (parseFloat(wmc_em_sa_v*wmc_em_sa_td)+parseFloat(wmm_em_sa_v*wmm_em_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_wm_em_so = (parseFloat(wmc_em_so_v*wmc_em_so_td)+parseFloat(wmm_em_so_v*wmm_em_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_wm_em_c = (parseFloat(wmc_em_c_v*wmc_em_c_td)+parseFloat(wmm_em_c_v*wmm_em_c_td))*1.66*0.42*2678.89/1.102/20/1000;

tot2_wm_CO2 =  parseFloat(CO2_t_wm_wc_va)+parseFloat(CO2_t_wm_wc_b)+parseFloat(CO2_t_wm_wc_w)+parseFloat(CO2_t_wm_wc_tm)+parseFloat(CO2_t_wm_ba_r)+parseFloat(CO2_t_wm_ba_g)+parseFloat(CO2_t_wm_ba_sa)+parseFloat(CO2_t_wm_ba_so)+parseFloat(CO2_t_wm_ba_c)+parseFloat(CO2_t_wm_sb_r)+parseFloat(CO2_t_wm_sb_g)+parseFloat(CO2_t_wm_sb_sa)+parseFloat(CO2_t_wm_sb_so)+parseFloat(CO2_t_wm_sb_c)+parseFloat(CO2_t_wm_sg_r)+parseFloat(CO2_t_wm_sg_g)+parseFloat(CO2_t_wm_sg_sa)+parseFloat(CO2_t_wm_sg_so)+parseFloat(CO2_t_wm_sg_c)+parseFloat(CO2_t_wm_em_r)+parseFloat(CO2_t_wm_em_g)+parseFloat(CO2_t_wm_em_sa)+parseFloat(CO2_t_wm_em_so)+parseFloat(CO2_t_wm_em_c);
tot2_wm_CO2 = tot2_wm_CO2/1.19/wm_wc_l;
localStorage.setItem("TOT2_WM_CO2", tot2_wm_CO2);
//3.Construction Phase
//wearing course
CO2_c_wm_wc = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*852*3.16*0.174/1000;

//base
CO2_c_wm_ba = wm_ba_tm_v*1.96*852*3.16*0.123/1000;
//sub-base
CO2_c_wm_sb = wm_sb_tm_v*1.96*852*3.16*0.123/1000;
//subgrade
CO2_c_wm_sg = wm_sg_tm_v*1.96*852*3.16*0.123/1000;
//embankment
CO2_c_wm_em = wm_em_tm_v*1.96*852*3.16*0.123/1000;

tot3_wm_CO2 = parseFloat(CO2_c_wm_wc)+parseFloat(CO2_c_wm_ba)+parseFloat(CO2_c_wm_sb)+parseFloat(CO2_c_wm_sg)+parseFloat(CO2_c_wm_em);
tot3_wm_CO2 = tot3_wm_CO2/1.451/wm_wc_l;
localStorage.setItem("TOT3_WM_CO2", tot3_wm_CO2);
//total CO2 emmission
tot_wm_CO2 = parseFloat(tot1_wm_CO2 )+parseFloat( tot2_wm_CO2 )+parseFloat( tot3_wm_CO2);
localStorage.setItem("TOT_WM_CO2", tot_wm_CO2);

 //NOX\\
// 1.material production
  //1. wearing course
  NOX_p_wm_wc_va = (parseFloat(wmc_wc_va_v)+parseFloat(wmm_wc_va_v))*2.92*22/1000;
  NOX_p_wm_wc_b = (parseFloat(wmc_wc_b_v)+parseFloat(wmm_wc_b_v))*1.1*6239/1000;
  NOX_p_wm_wc_w = (parseFloat(wmc_wc_w_v)+parseFloat(wmm_wc_w_v))*1.1*0.003/1000;
  NOX_p_wm_wc_tm = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*0.1816;

  //2.base
  NOX_p_wm_ba_r = (parseFloat(wmc_ba_r_v)+parseFloat(wmm_ba_r_v))*2.62*22/1000;
  NOX_p_wm_ba_g = (parseFloat(wmc_ba_g_v)+parseFloat(wmm_ba_g_v))*1.77*22/1000;
  NOX_p_wm_ba_sa = (parseFloat(wmc_ba_sa_v)+parseFloat(wmm_ba_sa_v))*1.63*22/1000;
  NOX_p_wm_ba_so = (parseFloat(wmc_ba_so_v)+parseFloat(wmm_ba_so_v))*2.13*131*14.7/315/1000;
  NOX_p_wm_ba_c = (parseFloat(wmc_ba_c_v)+parseFloat(wmm_ba_c_v))*1.66*3186/1000;

  //3.sub-base
  NOX_p_wm_sb_r = (parseFloat(wmc_sb_r_v)+parseFloat(wmm_sb_r_v))*2.62*22/1000;
  NOX_p_wm_sb_g = (parseFloat(wmc_sb_g_v)+parseFloat(wmm_sb_g_v))*1.77*22/1000;
  NOX_p_wm_sb_sa = (parseFloat(wmc_sb_sa_v)+parseFloat(wmm_sb_sa_v))*1.63*22/1000;
  NOX_p_wm_sb_so = (parseFloat(wmc_sb_so_v)+parseFloat(wmm_sb_so_v))*2.13*131*14.7/315/1000;
  NOX_p_wm_sb_c = (parseFloat(wmc_sb_c_v)+parseFloat(wmm_sb_c_v))*1.66*3186/1000;

  //4.subgrade
  NOX_p_wm_sg_r = (parseFloat(wmc_sg_r_v)+parseFloat(wmm_sg_r_v))*2.62*22/1000;
  NOX_p_wm_sg_g = (parseFloat(wmc_sg_g_v)+parseFloat(wmm_sg_g_v))*1.77*22/1000;
  NOX_p_wm_sg_sa = (parseFloat(wmc_sg_sa_v)+parseFloat(wmm_sg_sa_v))*1.63*22/1000;
  NOX_p_wm_sg_so = (parseFloat(wmc_sg_so_v)+parseFloat(wmm_sg_so_v))*2.13*131*14.7/315/1000;
  NOX_p_wm_sg_c = (parseFloat(wmc_sg_c_v)+parseFloat(wmm_sg_c_v))*1.66*3186/1000;

 //5.embankment
 NOX_p_wm_em_r = (parseFloat(wmc_em_r_v)+parseFloat(wmm_em_r_v))*2.62*22/1000;
 NOX_p_wm_em_g = (parseFloat(wmc_em_g_v)+parseFloat(wmm_em_g_v))*1.77*22/1000;
 NOX_p_wm_em_sa = (parseFloat(wmc_em_sa_v)+parseFloat(wmm_em_sa_v))*1.63*22/1000;
 NOX_p_wm_em_so = (parseFloat(wmc_em_so_v)+parseFloat(wmm_em_so_v))*2.13*131*14.7/315/1000;
 NOX_p_wm_em_c = (parseFloat(wmc_em_c_v)+parseFloat(wmm_em_c_v))*1.66*3186/1000;

 tot1_wm_NOX = parseFloat(NOX_p_wm_wc_va)+parseFloat(NOX_p_wm_wc_b)+parseFloat(NOX_p_wm_wc_w)+parseFloat(NOX_p_wm_wc_tm)+parseFloat(NOX_p_wm_ba_r)+parseFloat(NOX_p_wm_ba_g)+parseFloat(NOX_p_wm_ba_sa)+parseFloat(NOX_p_wm_ba_so)+parseFloat(NOX_p_wm_ba_c)+parseFloat(NOX_p_wm_sb_r)+parseFloat(NOX_p_wm_sb_g)+parseFloat(NOX_p_wm_sb_sa)+parseFloat(NOX_p_wm_sb_so)+parseFloat(NOX_p_wm_sb_c)+parseFloat(NOX_p_wm_sg_r)+parseFloat(NOX_p_wm_sg_g)+parseFloat(NOX_p_wm_sg_sa)+parseFloat(NOX_p_wm_sg_so)+parseFloat(NOX_p_wm_sg_c)+parseFloat(NOX_p_wm_em_r)+parseFloat(NOX_p_wm_em_g)+parseFloat(NOX_p_wm_em_sa)+parseFloat(NOX_p_wm_em_so)+parseFloat(NOX_p_wm_em_c);
 tot1_wm_NOX = tot1_wm_NOX/1.375/wm_wc_l;
 localStorage.setItem("TOT1_WM_NOX", tot1_wm_NOX);
//2.Material transportation
//1. wearing course
NOX_t_wm_wc_va = (parseFloat(wmc_wc_va_v*wmc_wc_va_td)+parseFloat(wmm_wc_va_v*wmm_wc_va_td))*2.92*3/1.102/1000;
NOX_t_wm_wc_b = (parseFloat(wmc_wc_b_v*wmc_wc_b_td)+parseFloat(wmm_wc_b_v*wmm_wc_b_td))*1.1*3/1.102/1000;
NOX_t_wm_wc_w = (parseFloat(wmc_wc_w_v*wmc_wc_w_td)+parseFloat(wmm_wc_w_v*wmm_wc_w_td))*1.1*3/1.102/1000;;
NOX_t_wm_wc_tm = (parseFloat(wmc_wc_tm_v*wmc_wc_tm_td)+parseFloat(wmm_wc_tm_v*wmm_wc_tm_td))*1.61*3/1.102/1000;

//2.base
NOX_t_wm_ba_r = (parseFloat(wmc_ba_r_v*wmc_ba_r_td)+parseFloat(wmm_ba_r_v*wmm_ba_r_td))*2.62*3/1.102/1000;
NOX_t_wm_ba_g = (parseFloat(wmc_ba_g_v*wmc_ba_g_td)+parseFloat(wmm_ba_g_v*wmm_ba_g_td))*1.77*3/1.102/1000;
NOX_t_wm_ba_sa = (parseFloat(wmc_ba_sa_v*wmc_ba_sa_td)+parseFloat(wmm_ba_sa_v*wmm_ba_sa_td))*1.63*3/1.102/1000;;
NOX_t_wm_ba_so = (parseFloat(wmc_ba_so_v*wmc_ba_so_td)+parseFloat(wmm_ba_so_v*wmm_ba_so_td))*2.13*3/1.102/1000;
NOX_t_wm_ba_c = (parseFloat(wmc_ba_c_v*wmc_ba_c_td)+parseFloat(wmm_ba_c_v*wmm_ba_c_td))*1.66*3/1.102/1000;

//3.sub-base
NOX_t_wm_sb_r = (parseFloat(wmc_sb_r_v*wmc_sb_r_td)+parseFloat(wmm_sb_r_v*wmm_sb_r_td))*2.62*3/1.102/1000;
NOX_t_wm_sb_g = (parseFloat(wmc_sb_g_v*wmc_sb_g_td)+parseFloat(wmm_sb_g_v*wmm_sb_g_td))*1.77*3/1.102/1000;
NOX_t_wm_sb_sa = (parseFloat(wmc_sb_sa_v*wmc_sb_sa_td)+parseFloat(wmm_sb_sa_v*wmm_sb_sa_td))*1.63*3/1.102/1000;;
NOX_t_wm_sb_so = (parseFloat(wmc_sb_so_v*wmc_sb_so_td)+parseFloat(wmm_sb_so_v*wmm_sb_so_td))*2.13*3/1.102/1000;
NOX_t_wm_sb_c = (parseFloat(wmc_sb_c_v*wmc_sb_c_td)+parseFloat(wmm_sb_c_v*wmm_sb_c_td))*1.66*3/1.102/1000;

//4.subgrade
NOX_t_wm_sg_r = (parseFloat(wmc_sg_r_v*wmc_sg_r_td)+parseFloat(wmm_sg_r_v*wmm_sg_r_td))*2.62*3/1.102/1000;
NOX_t_wm_sg_g = (parseFloat(wmc_sg_g_v*wmc_sg_g_td)+parseFloat(wmm_sg_g_v*wmm_sg_g_td))*1.77*3/1.102/1000;
NOX_t_wm_sg_sa = (parseFloat(wmc_sg_sa_v*wmc_sg_sa_td)+parseFloat(wmm_sg_sa_v*wmm_sg_sa_td))*1.63*3/1.102/1000;;
NOX_t_wm_sg_so = (parseFloat(wmc_sg_so_v*wmc_sg_so_td)+parseFloat(wmm_sg_so_v*wmm_sg_so_td))*2.13*3/1.102/1000;
NOX_t_wm_sg_c = (parseFloat(wmc_sg_c_v*wmc_sg_c_td)+parseFloat(wmm_sg_c_v*wmm_sg_c_td))*1.66*3/1.102/1000;

//5.embankment
NOX_t_wm_em_r = (parseFloat(wmc_em_r_v*wmc_em_r_td)+parseFloat(wmm_em_r_v*wmm_em_r_td))*2.62*3/1.102/1000;
NOX_t_wm_em_g = (parseFloat(wmc_em_g_v*wmc_em_g_td)+parseFloat(wmm_em_g_v*wmm_em_g_td))*1.77*3/1.102/1000;
NOX_t_wm_em_sa = (parseFloat(wmc_em_sa_v*wmc_em_sa_td)+parseFloat(wmm_em_sa_v*wmm_em_sa_td))*1.63*3/1.102/1000;;
NOX_t_wm_em_so = (parseFloat(wmc_em_so_v*wmc_em_so_td)+parseFloat(wmm_em_so_v*wmm_em_so_td))*2.13*3/1.102/1000;
NOX_t_wm_em_c = (parseFloat(wmc_em_c_v*wmc_em_c_td)+parseFloat(wmm_em_c_v*wmm_em_c_td))*1.66*3/1.102/1000;

tot2_wm_NOX =  parseFloat(NOX_t_wm_wc_va)+parseFloat(NOX_t_wm_wc_b)+parseFloat(NOX_t_wm_wc_w)+parseFloat(NOX_t_wm_wc_tm)+parseFloat(NOX_t_wm_ba_r)+parseFloat(NOX_t_wm_ba_g)+parseFloat(NOX_t_wm_ba_sa)+parseFloat(NOX_t_wm_ba_so)+parseFloat(NOX_t_wm_ba_c)+parseFloat(NOX_t_wm_sb_r)+parseFloat(NOX_t_wm_sb_g)+parseFloat(NOX_t_wm_sb_sa)+parseFloat(NOX_t_wm_sb_so)+parseFloat(NOX_t_wm_sb_c)+parseFloat(NOX_t_wm_sg_r)+parseFloat(NOX_t_wm_sg_g)+parseFloat(NOX_t_wm_sg_sa)+parseFloat(NOX_t_wm_sg_so)+parseFloat(NOX_t_wm_sg_c)+parseFloat(NOX_t_wm_em_r)+parseFloat(NOX_t_wm_em_g)+parseFloat(NOX_t_wm_em_sa)+parseFloat(NOX_t_wm_em_so)+parseFloat(NOX_t_wm_em_c);
tot2_wm_NOX = tot2_wm_NOX/1.19/wm_wc_l;
localStorage.setItem("TOT2_WM_NOX", tot2_wm_NOX);

//3.Construction Phase
//wearing course
NOX_c_wm_wc = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*14.07*0.776/1000;

//base
NOX_c_wm_ba = wm_ba_tm_v*1.96*14.07*0.511/1000;
//sub-base
NOX_c_wm_sb = wm_sb_tm_v*1.96*14.07*0.511/1000;
//subgrade
NOX_c_wm_sg = wm_sg_tm_v*1.96*14.07*0.511/1000;
//embankment
NOX_c_wm_em = wm_em_tm_v*1.96*14.07*0.511/1000;

tot3_wm_NOX = parseFloat(NOX_c_wm_wc)+parseFloat(NOX_c_wm_ba)+parseFloat(NOX_c_wm_sb)+parseFloat(NOX_c_wm_sg)+parseFloat(NOX_c_wm_em);
tot3_wm_NOX = tot3_wm_NOX/1.375/wm_wc_l;
localStorage.setItem("TOT3_WM_NOX", tot3_wm_NOX);
///////////////////////////////////////////
tot_wm_NOX = parseFloat(tot1_wm_NOX)+parseFloat(tot2_wm_NOX)+parseFloat(tot3_wm_NOX);
localStorage.setItem("TOT_WM_NOX", tot_wm_NOX);

 //SO2\\
// 1.material production
  //1. wearing course
  SO2_p_wm_wc_va = (parseFloat(wmc_wc_va_v)+parseFloat(wmm_wc_va_v))*2.92*11/1000;
  SO2_p_wm_wc_b = (parseFloat(wmc_wc_b_v)+parseFloat(wmm_wc_b_v))*1.1*5653/1000;
  SO2_p_wm_wc_w = (parseFloat(wmc_wc_w_v)+parseFloat(wmm_wc_w_v))*1.1*0.003/1000;
  SO2_p_wm_wc_tm = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*0.1816;

  //2.base
  SO2_p_wm_ba_r = (parseFloat(wmc_ba_r_v)+parseFloat(wmm_ba_r_v))*2.62*11/1000;
  SO2_p_wm_ba_g = (parseFloat(wmc_ba_g_v)+parseFloat(wmm_ba_g_v))*1.77*11/1000;
  SO2_p_wm_ba_sa = (parseFloat(wmc_ba_sa_v)+parseFloat(wmm_ba_sa_v))*1.63*11/1000;
  SO2_p_wm_ba_so = (parseFloat(wmc_ba_so_v)+parseFloat(wmm_ba_so_v))*2.13*131*0.93/315/1000;
  SO2_p_wm_ba_c = (parseFloat(wmc_ba_c_v)+parseFloat(wmm_ba_c_v))*1.66*3158/1000;

  //3.sub-base
  SO2_p_wm_sb_r = (parseFloat(wmc_sb_r_v)+parseFloat(wmm_sb_r_v))*2.62*11/1000;
  SO2_p_wm_sb_g = (parseFloat(wmc_sb_g_v)+parseFloat(wmm_sb_g_v))*1.77*11/1000;
  SO2_p_wm_sb_sa = (parseFloat(wmc_sb_sa_v)+parseFloat(wmm_sb_sa_v))*1.63*11/1000;
  SO2_p_wm_sb_so = (parseFloat(wmc_sb_so_v)+parseFloat(wmm_sb_so_v))*2.13*131*0.93/315/1000;
  SO2_p_wm_sb_c = (parseFloat(wmc_sb_c_v)+parseFloat(wmm_sb_c_v))*1.66*3158/1000;

  //4.subgrade
  SO2_p_wm_sg_r = (parseFloat(wmc_sg_r_v)+parseFloat(wmm_sg_r_v))*2.62*11/1000;
  SO2_p_wm_sg_g = (parseFloat(wmc_sg_g_v)+parseFloat(wmm_sg_g_v))*1.77*11/1000;
  SO2_p_wm_sg_sa = (parseFloat(wmc_sg_sa_v)+parseFloat(wmm_sg_sa_v))*1.63*11/1000;
  SO2_p_wm_sg_so = (parseFloat(wmc_sg_so_v)+parseFloat(wmm_sg_so_v))*2.13*131*0.93/315/1000;
  SO2_p_wm_sg_c = (parseFloat(wmc_sg_c_v)+parseFloat(wmm_sg_c_v))*1.66*3158/1000;

 //5.embankment
 SO2_p_wm_em_r = (parseFloat(wmc_em_r_v)+parseFloat(wmm_em_r_v))*2.62*11/1000;
 SO2_p_wm_em_g = (parseFloat(wmc_em_g_v)+parseFloat(wmm_em_g_v))*1.77*11/1000;
 SO2_p_wm_em_sa = (parseFloat(wmc_em_sa_v)+parseFloat(wmm_em_sa_v))*1.63*11/1000;
 SO2_p_wm_em_so = (parseFloat(wmc_em_so_v)+parseFloat(wmm_em_so_v))*2.13*131*0.93/315/1000;
 SO2_p_wm_em_c = (parseFloat(wmc_em_c_v)+parseFloat(wmm_em_c_v))*1.66*3158/1000;

 tot1_wm_SO2 = parseFloat(SO2_p_wm_wc_va)+parseFloat(SO2_p_wm_wc_b)+parseFloat(SO2_p_wm_wc_w)+parseFloat(SO2_p_wm_wc_tm)+parseFloat(SO2_p_wm_ba_r)+parseFloat(SO2_p_wm_ba_g)+parseFloat(SO2_p_wm_ba_sa)+parseFloat(SO2_p_wm_ba_so)+parseFloat(SO2_p_wm_ba_c)+parseFloat(SO2_p_wm_sb_r)+parseFloat(SO2_p_wm_sb_g)+parseFloat(SO2_p_wm_sb_sa)+parseFloat(SO2_p_wm_sb_so)+parseFloat(SO2_p_wm_sb_c)+parseFloat(SO2_p_wm_sg_r)+parseFloat(SO2_p_wm_sg_g)+parseFloat(SO2_p_wm_sg_sa)+parseFloat(SO2_p_wm_sg_so)+parseFloat(SO2_p_wm_sg_c)+parseFloat(SO2_p_wm_em_r)+parseFloat(SO2_p_wm_em_g)+parseFloat(SO2_p_wm_em_sa)+parseFloat(SO2_p_wm_em_so)+parseFloat(SO2_p_wm_em_c);
 tot1_wm_SO2 = tot1_wm_SO2/1.128/wm_wc_l;
 localStorage.setItem("TOT1_WM_SO2", tot1_wm_SO2);

//2.Material transportation
//1. wearing course
SO2_t_wm_wc_va = (parseFloat(wmc_wc_va_v*wmc_wc_va_td)+parseFloat(wmm_wc_va_v*wmm_wc_va_td))*2.92*0.18/1.102/1000;
SO2_t_wm_wc_b = (parseFloat(wmc_wc_b_v*wmc_wc_b_td)+parseFloat(wmm_wc_b_v*wmm_wc_b_td))*1.1*0.18/1.102/1000;
SO2_t_wm_wc_w = (parseFloat(wmc_wc_w_v*wmc_wc_w_td)+parseFloat(wmm_wc_w_v*wmm_wc_w_td))*1.1*0.18/1.102/1000;;
SO2_t_wm_wc_tm = (parseFloat(wmc_wc_tm_v*wmc_wc_tm_td)+parseFloat(wmm_wc_tm_v*wmm_wc_tm_td))*1.61*0.18/1.102/1000;

//2.base
SO2_t_wm_ba_r = (parseFloat(wmc_ba_r_v*wmc_ba_r_td)+parseFloat(wmm_ba_r_v*wmm_ba_r_td))*2.62*0.18/1.102/1000;
SO2_t_wm_ba_g = (parseFloat(wmc_ba_g_v*wmc_ba_g_td)+parseFloat(wmm_ba_g_v*wmm_ba_g_td))*1.77*0.18/1.102/1000;
SO2_t_wm_ba_sa = (parseFloat(wmc_ba_sa_v*wmc_ba_sa_td)+parseFloat(wmm_ba_sa_v*wmm_ba_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_wm_ba_so = (parseFloat(wmc_ba_so_v*wmc_ba_so_td)+parseFloat(wmm_ba_so_v*wmm_ba_so_td))*2.13*0.18/1.102/1000;
SO2_t_wm_ba_c = (parseFloat(wmc_ba_c_v*wmc_ba_c_td)+parseFloat(wmm_ba_c_v*wmm_ba_c_td))*1.66*0.18/1.102/1000;

//3.sub-base
SO2_t_wm_sb_r = (parseFloat(wmc_sb_r_v*wmc_sb_r_td)+parseFloat(wmm_sb_r_v*wmm_sb_r_td))*2.62*0.18/1.102/1000;
SO2_t_wm_sb_g = (parseFloat(wmc_sb_g_v*wmc_sb_g_td)+parseFloat(wmm_sb_g_v*wmm_sb_g_td))*1.77*0.18/1.102/1000;
SO2_t_wm_sb_sa = (parseFloat(wmc_sb_sa_v*wmc_sb_sa_td)+parseFloat(wmm_sb_sa_v*wmm_sb_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_wm_sb_so = (parseFloat(wmc_sb_so_v*wmc_sb_so_td)+parseFloat(wmm_sb_so_v*wmm_sb_so_td))*2.13*0.18/1.102/1000;
SO2_t_wm_sb_c = (parseFloat(wmc_sb_c_v*wmc_sb_c_td)+parseFloat(wmm_sb_c_v*wmm_sb_c_td))*1.66*0.18/1.102/1000;

//4.subgrade
SO2_t_wm_sg_r = (parseFloat(wmc_sg_r_v*wmc_sg_r_td)+parseFloat(wmm_sg_r_v*wmm_sg_r_td))*2.62*0.18/1.102/1000;
SO2_t_wm_sg_g = (parseFloat(wmc_sg_g_v*wmc_sg_g_td)+parseFloat(wmm_sg_g_v*wmm_sg_g_td))*1.77*0.18/1.102/1000;
SO2_t_wm_sg_sa = (parseFloat(wmc_sg_sa_v*wmc_sg_sa_td)+parseFloat(wmm_sg_sa_v*wmm_sg_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_wm_sg_so = (parseFloat(wmc_sg_so_v*wmc_sg_so_td)+parseFloat(wmm_sg_so_v*wmm_sg_so_td))*2.13*0.18/1.102/1000;
SO2_t_wm_sg_c = (parseFloat(wmc_sg_c_v*wmc_sg_c_td)+parseFloat(wmm_sg_c_v*wmm_sg_c_td))*1.66*0.18/1.102/1000;

//5.embankment
SO2_t_wm_em_r = (parseFloat(wmc_em_r_v*wmc_em_r_td)+parseFloat(wmm_em_r_v*wmm_em_r_td))*2.62*0.18/1.102/1000;
SO2_t_wm_em_g = (parseFloat(wmc_em_g_v*wmc_em_g_td)+parseFloat(wmm_em_g_v*wmm_em_g_td))*1.77*0.18/1.102/1000;
SO2_t_wm_em_sa = (parseFloat(wmc_em_sa_v*wmc_em_sa_td)+parseFloat(wmm_em_sa_v*wmm_em_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_wm_em_so = (parseFloat(wmc_em_so_v*wmc_em_so_td)+parseFloat(wmm_em_so_v*wmm_em_so_td))*2.13*0.18/1.102/1000;
SO2_t_wm_em_c = (parseFloat(wmc_em_c_v*wmc_em_c_td)+parseFloat(wmm_em_c_v*wmm_em_c_td))*1.66*0.18/1.102/1000;

tot2_wm_SO2 =  parseFloat(SO2_t_wm_wc_va)+parseFloat(SO2_t_wm_wc_b)+parseFloat(SO2_t_wm_wc_w)+parseFloat(SO2_t_wm_wc_tm)+parseFloat(SO2_t_wm_ba_r)+parseFloat(SO2_t_wm_ba_g)+parseFloat(SO2_t_wm_ba_sa)+parseFloat(SO2_t_wm_ba_so)+parseFloat(SO2_t_wm_ba_c)+parseFloat(SO2_t_wm_sb_r)+parseFloat(SO2_t_wm_sb_g)+parseFloat(SO2_t_wm_sb_sa)+parseFloat(SO2_t_wm_sb_so)+parseFloat(SO2_t_wm_sb_c)+parseFloat(SO2_t_wm_sg_r)+parseFloat(SO2_t_wm_sg_g)+parseFloat(SO2_t_wm_sg_sa)+parseFloat(SO2_t_wm_sg_so)+parseFloat(SO2_t_wm_sg_c)+parseFloat(SO2_t_wm_em_r)+parseFloat(SO2_t_wm_em_g)+parseFloat(SO2_t_wm_em_sa)+parseFloat(SO2_t_wm_em_so)+parseFloat(SO2_t_wm_em_c);
tot2_wm_SO2 = tot2_wm_SO2/1.19/wm_wc_l;
localStorage.setItem("TOT2_WM_SO2", tot2_wm_SO2);
//3.Construction Phase
//wearing course
SO2_c_wm_wc = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*0.93*0.776/1000;

//base
SO2_c_wm_ba = wm_ba_tm_v*1.96*0.93*0.511/1000;
//sub-base
SO2_c_wm_sb = wm_sb_tm_v*1.96*0.93*0.511/1000;
//subgrade
SO2_c_wm_sg = wm_sg_tm_v*1.96*0.93*0.511/1000;
//embankment
SO2_c_wm_em = wm_em_tm_v*1.96*0.93*0.511/1000;

tot3_wm_SO2 = parseFloat(SO2_c_wm_wc)+parseFloat(SO2_c_wm_ba)+parseFloat(SO2_c_wm_sb)+parseFloat(SO2_c_wm_sg)+parseFloat(SO2_c_wm_em);
tot3_wm_SO2 = tot3_wm_SO2/1.117/wm_wc_l;
localStorage.setItem("TOT3_WM_SO2", tot3_wm_SO2);
///////////////////////////////////////////
tot_wm_SO2 = parseFloat(tot1_wm_SO2)+parseFloat(tot2_wm_SO2)+parseFloat(tot3_wm_SO2);
localStorage.setItem("TOT_WM_SO2", tot_wm_SO2);

//CO\\
// 1.material production
  //1. wearing course
  CO_p_wm_wc_va = (parseFloat(wmc_wc_va_v)+parseFloat(wmm_wc_va_v))*2.92*14/1000;
  CO_p_wm_wc_b = (parseFloat(wmc_wc_b_v)+parseFloat(wmm_wc_b_v))*1.1*4736/1000;
  CO_p_wm_wc_w = (parseFloat(wmc_wc_w_v)+parseFloat(wmm_wc_w_v))*1.1*0.002/1000;
  CO_p_wm_wc_tm = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*0.1816;

  //2.base
  CO_p_wm_ba_r = (parseFloat(wmc_ba_r_v)+parseFloat(wmm_ba_r_v))*2.62*14/1000;
  CO_p_wm_ba_g = (parseFloat(wmc_ba_g_v)+parseFloat(wmm_ba_g_v))*1.77*14/1000;
  CO_p_wm_ba_sa = (parseFloat(wmc_ba_sa_v)+parseFloat(wmm_ba_sa_v))*1.63*14/1000;
  CO_p_wm_ba_so = (parseFloat(wmc_ba_so_v)+parseFloat(wmm_ba_so_v))*2.13*131*3.03/315/1000;
  CO_p_wm_ba_c = (parseFloat(wmc_ba_c_v)+parseFloat(wmm_ba_c_v))*1.66*1132/1000;

  //3.sub-base
  CO_p_wm_sb_r = (parseFloat(wmc_sb_r_v)+parseFloat(wmm_sb_r_v))*2.62*14/1000;
  CO_p_wm_sb_g = (parseFloat(wmc_sb_g_v)+parseFloat(wmm_sb_g_v))*1.77*14/1000;
  CO_p_wm_sb_sa = (parseFloat(wmc_sb_sa_v)+parseFloat(wmm_sb_sa_v))*1.63*14/1000;
  CO_p_wm_sb_so = (parseFloat(wmc_sb_so_v)+parseFloat(wmm_sb_so_v))*2.13*131*3.03/315/1000;
  CO_p_wm_sb_c = (parseFloat(wmc_sb_c_v)+parseFloat(wmm_sb_c_v))*1.66*1132/1000;

  //4.subgrade
  CO_p_wm_sg_r = (parseFloat(wmc_sg_r_v)+parseFloat(wmm_sg_r_v))*2.62*14/1000;
  CO_p_wm_sg_g = (parseFloat(wmc_sg_g_v)+parseFloat(wmm_sg_g_v))*1.77*14/1000;
  CO_p_wm_sg_sa = (parseFloat(wmc_sg_sa_v)+parseFloat(wmm_sg_sa_v))*1.63*14/1000;
  CO_p_wm_sg_so = (parseFloat(wmc_sg_so_v)+parseFloat(wmm_sg_so_v))*2.13*131*3.03/315/1000;
  CO_p_wm_sg_c = (parseFloat(wmc_sg_c_v)+parseFloat(wmm_sg_c_v))*1.66*1132/1000;

 //5.embankment
 CO_p_wm_em_r = (parseFloat(wmc_em_r_v)+parseFloat(wmm_em_r_v))*2.62*14/1000;
 CO_p_wm_em_g = (parseFloat(wmc_em_g_v)+parseFloat(wmm_em_g_v))*1.77*14/1000;
 CO_p_wm_em_sa = (parseFloat(wmc_em_sa_v)+parseFloat(wmm_em_sa_v))*1.63*14/1000;
 CO_p_wm_em_so = (parseFloat(wmc_em_so_v)+parseFloat(wmm_em_so_v))*2.13*131*3.03/315/1000;
 CO_p_wm_em_c = (parseFloat(wmc_em_c_v)+parseFloat(wmm_em_c_v))*1.66*1132/1000;

 tot1_wm_CO = parseFloat(CO_p_wm_wc_va)+parseFloat(CO_p_wm_wc_b)+parseFloat(CO_p_wm_wc_w)+parseFloat(CO_p_wm_wc_tm)+parseFloat(CO_p_wm_ba_r)+parseFloat(CO_p_wm_ba_g)+parseFloat(CO_p_wm_ba_sa)+parseFloat(CO_p_wm_ba_so)+parseFloat(CO_p_wm_ba_c)+parseFloat(CO_p_wm_sb_r)+parseFloat(CO_p_wm_sb_g)+parseFloat(CO_p_wm_sb_sa)+parseFloat(CO_p_wm_sb_so)+parseFloat(CO_p_wm_sb_c)+parseFloat(CO_p_wm_sg_r)+parseFloat(CO_p_wm_sg_g)+parseFloat(CO_p_wm_sg_sa)+parseFloat(CO_p_wm_sg_so)+parseFloat(CO_p_wm_sg_c)+parseFloat(CO_p_wm_em_r)+parseFloat(CO_p_wm_em_g)+parseFloat(CO_p_wm_em_sa)+parseFloat(CO_p_wm_em_so)+parseFloat(CO_p_wm_em_c);
 tot1_wm_CO = tot1_wm_CO/1.037/wm_wc_l;
 localStorage.setItem("TOT1_WM_CO", tot1_wm_CO);

//2.Material transportation
//1. wearing course
CO_t_wm_wc_va = (parseFloat(wmc_wc_va_v*wmc_wc_va_td)+parseFloat(wmm_wc_va_v*wmm_wc_va_td))*2.92*0.25/1.102/1000;
CO_t_wm_wc_b = (parseFloat(wmc_wc_b_v*wmc_wc_b_td)+parseFloat(wmm_wc_b_v*wmm_wc_b_td))*1.1*0.25/1.102/1000;
CO_t_wm_wc_w = (parseFloat(wmc_wc_w_v*wmc_wc_w_td)+parseFloat(wmm_wc_w_v*wmm_wc_w_td))*1.1*0.25/1.102/1000;;
CO_t_wm_wc_tm = (parseFloat(wmc_wc_tm_v*wmc_wc_tm_td)+parseFloat(wmm_wc_tm_v*wmm_wc_tm_td))*1.61*0.25/1.102/1000;

//2.base
CO_t_wm_ba_r = (parseFloat(wmc_ba_r_v*wmc_ba_r_td)+parseFloat(wmm_ba_r_v*wmm_ba_r_td))*2.62*0.25/1.102/1000;
CO_t_wm_ba_g = (parseFloat(wmc_ba_g_v*wmc_ba_g_td)+parseFloat(wmm_ba_g_v*wmm_ba_g_td))*1.77*0.25/1.102/1000;
CO_t_wm_ba_sa = (parseFloat(wmc_ba_sa_v*wmc_ba_sa_td)+parseFloat(wmm_ba_sa_v*wmm_ba_sa_td))*1.63*0.25/1.102/1000;;
CO_t_wm_ba_so = (parseFloat(wmc_ba_so_v*wmc_ba_so_td)+parseFloat(wmm_ba_so_v*wmm_ba_so_td))*2.13*0.25/1.102/1000;
CO_t_wm_ba_c = (parseFloat(wmc_ba_c_v*wmc_ba_c_td)+parseFloat(wmm_ba_c_v*wmm_ba_c_td))*1.66*0.25/1.102/1000;

//3.sub-base
CO_t_wm_sb_r = (parseFloat(wmc_sb_r_v*wmc_sb_r_td)+parseFloat(wmm_sb_r_v*wmm_sb_r_td))*2.62*0.25/1.102/1000;
CO_t_wm_sb_g = (parseFloat(wmc_sb_g_v*wmc_sb_g_td)+parseFloat(wmm_sb_g_v*wmm_sb_g_td))*1.77*0.25/1.102/1000;
CO_t_wm_sb_sa = (parseFloat(wmc_sb_sa_v*wmc_sb_sa_td)+parseFloat(wmm_sb_sa_v*wmm_sb_sa_td))*1.63*0.25/1.102/1000;;
CO_t_wm_sb_so = (parseFloat(wmc_sb_so_v*wmc_sb_so_td)+parseFloat(wmm_sb_so_v*wmm_sb_so_td))*2.13*0.25/1.102/1000;
CO_t_wm_sb_c = (parseFloat(wmc_sb_c_v*wmc_sb_c_td)+parseFloat(wmm_sb_c_v*wmm_sb_c_td))*1.66*0.25/1.102/1000;

//4.subgrade
CO_t_wm_sg_r = (parseFloat(wmc_sg_r_v*wmc_sg_r_td)+parseFloat(wmm_sg_r_v*wmm_sg_r_td))*2.62*0.25/1.102/1000;
CO_t_wm_sg_g = (parseFloat(wmc_sg_g_v*wmc_sg_g_td)+parseFloat(wmm_sg_g_v*wmm_sg_g_td))*1.77*0.25/1.102/1000;
CO_t_wm_sg_sa = (parseFloat(wmc_sg_sa_v*wmc_sg_sa_td)+parseFloat(wmm_sg_sa_v*wmm_sg_sa_td))*1.63*0.25/1.102/1000;;
CO_t_wm_sg_so = (parseFloat(wmc_sg_so_v*wmc_sg_so_td)+parseFloat(wmm_sg_so_v*wmm_sg_so_td))*2.13*0.25/1.102/1000;
CO_t_wm_sg_c = (parseFloat(wmc_sg_c_v*wmc_sg_c_td)+parseFloat(wmm_sg_c_v*wmm_sg_c_td))*1.66*0.25/1.102/1000;

//5.embankment
CO_t_wm_em_r = (parseFloat(wmc_em_r_v*wmc_em_r_td)+parseFloat(wmm_em_r_v*wmm_em_r_td))*2.62*0.25/1.102/1000;
CO_t_wm_em_g = (parseFloat(wmc_em_g_v*wmc_em_g_td)+parseFloat(wmm_em_g_v*wmm_em_g_td))*1.77*0.25/1.102/1000;
CO_t_wm_em_sa = (parseFloat(wmc_em_sa_v*wmc_em_sa_td)+parseFloat(wmm_em_sa_v*wmm_em_sa_td))*1.63*0.25/1.102/1000;;
CO_t_wm_em_so = (parseFloat(wmc_em_so_v*wmc_em_so_td)+parseFloat(wmm_em_so_v*wmm_em_so_td))*2.13*0.25/1.102/1000;
CO_t_wm_em_c = (parseFloat(wmc_em_c_v*wmc_em_c_td)+parseFloat(wmm_em_c_v*wmm_em_c_td))*1.66*0.25/1.102/1000;

tot2_wm_CO =  parseFloat(CO_t_wm_wc_va)+parseFloat(CO_t_wm_wc_b)+parseFloat(CO_t_wm_wc_w)+parseFloat(CO_t_wm_wc_tm)+parseFloat(CO_t_wm_ba_r)+parseFloat(CO_t_wm_ba_g)+parseFloat(CO_t_wm_ba_sa)+parseFloat(CO_t_wm_ba_so)+parseFloat(CO_t_wm_ba_c)+parseFloat(CO_t_wm_sb_r)+parseFloat(CO_t_wm_sb_g)+parseFloat(CO_t_wm_sb_sa)+parseFloat(CO_t_wm_sb_so)+parseFloat(CO_t_wm_sb_c)+parseFloat(CO_t_wm_sg_r)+parseFloat(CO_t_wm_sg_g)+parseFloat(CO_t_wm_sg_sa)+parseFloat(CO_t_wm_sg_so)+parseFloat(CO_t_wm_sg_c)+parseFloat(CO_t_wm_em_r)+parseFloat(CO_t_wm_em_g)+parseFloat(CO_t_wm_em_sa)+parseFloat(CO_t_wm_em_so)+parseFloat(CO_t_wm_em_c);
tot2_wm_CO = tot2_wm_CO/1.1037/wm_wc_l;
localStorage.setItem("TOT2_WM_CO", tot2_wm_CO);

//3.Construction Phase
//wearing course
CO_c_wm_wc = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*3.03*0.776/1000;

//base
CO_c_wm_ba = wm_ba_tm_v*1.96*3.03*0.511/1000;
//sub-base
CO_c_wm_sb = wm_sb_tm_v*1.96*3.03*0.511/1000;
//subgrade
CO_c_wm_sg = wm_sg_tm_v*1.96*3.03*0.511/1000;
//embankment
CO_c_wm_em = wm_em_tm_v*1.96*3.03*0.511/1000;

tot3_wm_CO = parseFloat(CO_c_wm_wc)+parseFloat(CO_c_wm_ba)+parseFloat(CO_c_wm_sb)+parseFloat(CO_c_wm_sg)+parseFloat(CO_c_wm_em);
tot3_wm_CO = tot3_wm_CO/1.038/wm_wc_l;
localStorage.setItem("TOT3_WM_CO", tot3_wm_CO);

///////////////////////////////////////////
tot_wm_CO = parseFloat(tot1_wm_CO)+parseFloat(tot2_wm_CO)+parseFloat(tot3_wm_CO);
localStorage.setItem("TOT_WM_CO", tot_wm_CO);

 //PM10\\
// 1.material production
  //1. wearing course
  PM10_p_wm_wc_va = (parseFloat(wmc_wc_va_v)+parseFloat(wmm_wc_va_v))*2.92*157/1000;
  PM10_p_wm_wc_b = (parseFloat(wmc_wc_b_v)+parseFloat(wmm_wc_b_v))*1.1*1057/1000;
  PM10_p_wm_wc_w = (parseFloat(wmc_wc_w_v)+parseFloat(wmm_wc_w_v))*1.1*0.001/1000;
  PM10_p_wm_wc_tm = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*0.1816;

  //2.base
  PM10_p_wm_ba_r = (parseFloat(wmc_ba_r_v)+parseFloat(wmm_ba_r_v))*2.62*157/1000;
  PM10_p_wm_ba_g = (parseFloat(wmc_ba_g_v)+parseFloat(wmm_ba_g_v))*1.77*157/1000;
  PM10_p_wm_ba_sa = (parseFloat(wmc_ba_sa_v)+parseFloat(wmm_ba_sa_v))*1.63*157/1000;
  PM10_p_wm_ba_so = (parseFloat(wmc_ba_so_v)+parseFloat(wmm_ba_so_v))*2.13*131*1/315/1000;
  PM10_p_wm_ba_c = (parseFloat(wmc_ba_c_v)+parseFloat(wmm_ba_c_v))*1.66*597/1000;

  //3.sub-base
  PM10_p_wm_sb_r = (parseFloat(wmc_sb_r_v)+parseFloat(wmm_sb_r_v))*2.62*157/1000;
  PM10_p_wm_sb_g = (parseFloat(wmc_sb_g_v)+parseFloat(wmm_sb_g_v))*1.77*157/1000;
  PM10_p_wm_sb_sa = (parseFloat(wmc_sb_sa_v)+parseFloat(wmm_sb_sa_v))*1.63*157/1000;
  PM10_p_wm_sb_so = (parseFloat(wmc_sb_so_v)+parseFloat(wmm_sb_so_v))*2.13*131*1/315/1000;
  PM10_p_wm_sb_c = (parseFloat(wmc_sb_c_v)+parseFloat(wmm_sb_c_v))*1.66*597/1000;

  //4.subgrade
  PM10_p_wm_sg_r = (parseFloat(wmc_sg_r_v)+parseFloat(wmm_sg_r_v))*2.62*157/1000;
  PM10_p_wm_sg_g = (parseFloat(wmc_sg_g_v)+parseFloat(wmm_sg_g_v))*1.77*157/1000;
  PM10_p_wm_sg_sa = (parseFloat(wmc_sg_sa_v)+parseFloat(wmm_sg_sa_v))*1.63*157/1000;
  PM10_p_wm_sg_so = (parseFloat(wmc_sg_so_v)+parseFloat(wmm_sg_so_v))*2.13*131*1/315/1000;
  PM10_p_wm_sg_c = (parseFloat(wmc_sg_c_v)+parseFloat(wmm_sg_c_v))*1.66*597/1000;

 //5.embankment
 PM10_p_wm_em_r = (parseFloat(wmc_em_r_v)+parseFloat(wmm_em_r_v))*2.62*157/1000;
 PM10_p_wm_em_g = (parseFloat(wmc_em_g_v)+parseFloat(wmm_em_g_v))*1.77*157/1000;
 PM10_p_wm_em_sa = (parseFloat(wmc_em_sa_v)+parseFloat(wmm_em_sa_v))*1.63*157/1000;
 PM10_p_wm_em_so = (parseFloat(wmc_em_so_v)+parseFloat(wmm_em_so_v))*2.13*131*1/315/1000;
 PM10_p_wm_em_c = (parseFloat(wmc_em_c_v)+parseFloat(wmm_em_c_v))*1.66*597/1000;

 tot1_wm_PM10 = parseFloat(PM10_p_wm_wc_va)+parseFloat(PM10_p_wm_wc_b)+parseFloat(PM10_p_wm_wc_w)+parseFloat(PM10_p_wm_wc_tm)+parseFloat(PM10_p_wm_ba_r)+parseFloat(PM10_p_wm_ba_g)+parseFloat(PM10_p_wm_ba_sa)+parseFloat(PM10_p_wm_ba_so)+parseFloat(PM10_p_wm_ba_c)+parseFloat(PM10_p_wm_sb_r)+parseFloat(PM10_p_wm_sb_g)+parseFloat(PM10_p_wm_sb_sa)+parseFloat(PM10_p_wm_sb_so)+parseFloat(PM10_p_wm_sb_c)+parseFloat(PM10_p_wm_sg_r)+parseFloat(PM10_p_wm_sg_g)+parseFloat(PM10_p_wm_sg_sa)+parseFloat(PM10_p_wm_sg_so)+parseFloat(PM10_p_wm_sg_c)+parseFloat(PM10_p_wm_em_r)+parseFloat(PM10_p_wm_em_g)+parseFloat(PM10_p_wm_em_sa)+parseFloat(PM10_p_wm_em_so)+parseFloat(PM10_p_wm_em_c);
 tot1_wm_PM10 = tot1_wm_PM10/1.61/wm_wc_l;
 localStorage.setItem("TOT1_WM_PM10", tot1_wm_PM10);

//2.Material transportation
//1. wearing course
PM10_t_wm_wc_va = (parseFloat(wmc_wc_va_v*wmc_wc_va_td)+parseFloat(wmm_wc_va_v*wmm_wc_va_td))*2.92*0.58/1.102/1000;
PM10_t_wm_wc_b = (parseFloat(wmc_wc_b_v*wmc_wc_b_td)+parseFloat(wmm_wc_b_v*wmm_wc_b_td))*1.1*0.58/1.102/1000;
PM10_t_wm_wc_w = (parseFloat(wmc_wc_w_v*wmc_wc_w_td)+parseFloat(wmm_wc_w_v*wmm_wc_w_td))*1.1*0.58/1.102/1000;;
PM10_t_wm_wc_tm = (parseFloat(wmc_wc_tm_v*wmc_wc_tm_td)+parseFloat(wmm_wc_tm_v*wmm_wc_tm_td))*1.61*0.58/1.102/1000;

//2.base
PM10_t_wm_ba_r = (parseFloat(wmc_ba_r_v*wmc_ba_r_td)+parseFloat(wmm_ba_r_v*wmm_ba_r_td))*2.62*0.58/1.102/1000;
PM10_t_wm_ba_g = (parseFloat(wmc_ba_g_v*wmc_ba_g_td)+parseFloat(wmm_ba_g_v*wmm_ba_g_td))*1.77*0.58/1.102/1000;
PM10_t_wm_ba_sa = (parseFloat(wmc_ba_sa_v*wmc_ba_sa_td)+parseFloat(wmm_ba_sa_v*wmm_ba_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_wm_ba_so = (parseFloat(wmc_ba_so_v*wmc_ba_so_td)+parseFloat(wmm_ba_so_v*wmm_ba_so_td))*2.13*0.58/1.102/1000;
PM10_t_wm_ba_c = (parseFloat(wmc_ba_c_v*wmc_ba_c_td)+parseFloat(wmm_ba_c_v*wmm_ba_c_td))*1.66*0.58/1.102/1000;

//3.sub-base
PM10_t_wm_sb_r = (parseFloat(wmc_sb_r_v*wmc_sb_r_td)+parseFloat(wmm_sb_r_v*wmm_sb_r_td))*2.62*0.58/1.102/1000;
PM10_t_wm_sb_g = (parseFloat(wmc_sb_g_v*wmc_sb_g_td)+parseFloat(wmm_sb_g_v*wmm_sb_g_td))*1.77*0.58/1.102/1000;
PM10_t_wm_sb_sa = (parseFloat(wmc_sb_sa_v*wmc_sb_sa_td)+parseFloat(wmm_sb_sa_v*wmm_sb_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_wm_sb_so = (parseFloat(wmc_sb_so_v*wmc_sb_so_td)+parseFloat(wmm_sb_so_v*wmm_sb_so_td))*2.13*0.58/1.102/1000;
PM10_t_wm_sb_c = (parseFloat(wmc_sb_c_v*wmc_sb_c_td)+parseFloat(wmm_sb_c_v*wmm_sb_c_td))*1.66*0.58/1.102/1000;

//4.subgrade
PM10_t_wm_sg_r = (parseFloat(wmc_sg_r_v*wmc_sg_r_td)+parseFloat(wmm_sg_r_v*wmm_sg_r_td))*2.62*0.58/1.102/1000;
PM10_t_wm_sg_g = (parseFloat(wmc_sg_g_v*wmc_sg_g_td)+parseFloat(wmm_sg_g_v*wmm_sg_g_td))*1.77*0.58/1.102/1000;
PM10_t_wm_sg_sa = (parseFloat(wmc_sg_sa_v*wmc_sg_sa_td)+parseFloat(wmm_sg_sa_v*wmm_sg_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_wm_sg_so = (parseFloat(wmc_sg_so_v*wmc_sg_so_td)+parseFloat(wmm_sg_so_v*wmm_sg_so_td))*2.13*0.58/1.102/1000;
PM10_t_wm_sg_c = (parseFloat(wmc_sg_c_v*wmc_sg_c_td)+parseFloat(wmm_sg_c_v*wmm_sg_c_td))*1.66*0.58/1.102/1000;

//5.embankment
PM10_t_wm_em_r = (parseFloat(wmc_em_r_v*wmc_em_r_td)+parseFloat(wmm_em_r_v*wmm_em_r_td))*2.62*0.58/1.102/1000;
PM10_t_wm_em_g = (parseFloat(wmc_em_g_v*wmc_em_g_td)+parseFloat(wmm_em_g_v*wmm_em_g_td))*1.77*0.58/1.102/1000;
PM10_t_wm_em_sa = (parseFloat(wmc_em_sa_v*wmc_em_sa_td)+parseFloat(wmm_em_sa_v*wmm_em_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_wm_em_so = (parseFloat(wmc_em_so_v*wmc_em_so_td)+parseFloat(wmm_em_so_v*wmm_em_so_td))*2.13*0.58/1.102/1000;
PM10_t_wm_em_c = (parseFloat(wmc_em_c_v*wmc_em_c_td)+parseFloat(wmm_em_c_v*wmm_em_c_td))*1.66*0.58/1.102/1000;

tot2_wm_PM10 =  parseFloat(PM10_t_wm_wc_va)+parseFloat(PM10_t_wm_wc_b)+parseFloat(PM10_t_wm_wc_w)+parseFloat(PM10_t_wm_wc_tm)+parseFloat(PM10_t_wm_ba_r)+parseFloat(PM10_t_wm_ba_g)+parseFloat(PM10_t_wm_ba_sa)+parseFloat(PM10_t_wm_ba_so)+parseFloat(PM10_t_wm_ba_c)+parseFloat(PM10_t_wm_sb_r)+parseFloat(PM10_t_wm_sb_g)+parseFloat(PM10_t_wm_sb_sa)+parseFloat(PM10_t_wm_sb_so)+parseFloat(PM10_t_wm_sb_c)+parseFloat(PM10_t_wm_sg_r)+parseFloat(PM10_t_wm_sg_g)+parseFloat(PM10_t_wm_sg_sa)+parseFloat(PM10_t_wm_sg_so)+parseFloat(PM10_t_wm_sg_c)+parseFloat(PM10_t_wm_em_r)+parseFloat(PM10_t_wm_em_g)+parseFloat(PM10_t_wm_em_sa)+parseFloat(PM10_t_wm_em_so)+parseFloat(PM10_t_wm_em_c);
tot2_wm_PM10 = tot2_wm_PM10/1.19/wm_wc_l;
localStorage.setItem("TOT2_WM_PM10", tot2_wm_PM10);
//3.Construction Phase
//wearing course
PM10_c_wm_wc = (parseFloat(wmc_wc_tm_v)+parseFloat(wmm_wc_tm_v))*1.61*1*0.776/1000;

//base
PM10_c_wm_ba = wm_ba_tm_v*1.96*1*0.511/1000;
//sub-base
PM10_c_wm_sb = wm_sb_tm_v*1.96*1*0.511/1000;
//subgrade
PM10_c_wm_sg = wm_sg_tm_v*1.96*1*0.511/1000;
//embankment
PM10_c_wm_em = wm_em_tm_v*1.96*1*0.511/1000;

tot3_wm_PM10 = parseFloat(PM10_c_wm_wc)+parseFloat(PM10_c_wm_ba)+parseFloat(PM10_c_wm_sb)+parseFloat(PM10_c_wm_sg)+parseFloat(PM10_c_wm_em);
tot3_wm_PM10 = tot3_wm_PM10/1.61/wm_wc_l;
localStorage.setItem("TOT3_WM_PM10", tot3_wm_PM10);
///////////////////////////////////////////
tot_wm_PM10 = parseFloat(tot1_wm_PM10)+parseFloat(tot2_wm_PM10)+parseFloat(tot3_wm_PM10);
localStorage.setItem("TOT_WM_PM10", tot_wm_PM10);
/****************************************************END OF WARM MIX RESULTS************************************************ */

//************************COLD MIX ASPHALT****************************

  //Layer specification
const cm_wc_w = document.getElementById("cm_wc_w").value;
const cm_wc_d = document.getElementById("cm_wc_d").value;
const cm_wc_l = document.getElementById("cm_wc_l").value;

const cm_ba_w = document.getElementById("cm_ba_w").value;
const cm_ba_d = document.getElementById("cm_ba_d").value;
const cm_ba_l = document.getElementById("cm_ba_l").value;

const cm_sb_w = document.getElementById("cm_sb_w").value;
const cm_sb_d = document.getElementById("cm_sb_d").value;
const cm_sb_l = document.getElementById("cm_sb_l").value;

const cm_sg_w = document.getElementById("cm_sg_w").value;
const cm_sg_d = document.getElementById("cm_sg_d").value;
const cm_sg_l = document.getElementById("cm_sg_l").value;


//Initial construction materials
//for wearing course
const cmc_wc_va_v = document.getElementById("cmc_wc_va_v").value;
const cmc_wc_va_td = document.getElementById("cmc_wc_va_td").value;

const cmc_wc_b_v = document.getElementById("cmc_wc_b_v").value;
const cmc_wc_b_td = document.getElementById("cmc_wc_b_td").value;

const cmc_wc_w_v = document.getElementById("cmc_wc_w_v").value;
const cmc_wc_w_td = document.getElementById("cmc_wc_w_td").value;

const cmc_wc_tm_v = document.getElementById("cmc_wc_tm_v").value;
const cmc_wc_tm_td = document.getElementById("cmc_wc_tm_td").value;

//for base
const cmc_ba_r_v = document.getElementById("cmc_ba_r_v").value;
const cmc_ba_r_td = document.getElementById("cmc_ba_r_td").value;

const cmc_ba_g_v = document.getElementById("cmc_ba_g_v").value;
const cmc_ba_g_td = document.getElementById("cmc_ba_g_td").value;

const cmc_ba_sa_v = document.getElementById("cmc_ba_sa_v").value;
const cmc_ba_sa_td = document.getElementById("cmc_ba_sa_td").value;

const cmc_ba_so_v = document.getElementById("cmc_ba_so_v").value;
const cmc_ba_so_td = document.getElementById("cmc_ba_so_td").value;

const cmc_ba_c_v = document.getElementById("cmc_ba_c_v").value;
const cmc_ba_c_td = document.getElementById("cmc_ba_c_td").value;

  //for sub-base
  const cmc_sb_r_v = document.getElementById("cmc_sb_r_v").value;
  const cmc_sb_r_td = document.getElementById("cmc_sb_r_td").value;

  const cmc_sb_g_v = document.getElementById("cmc_sb_g_v").value;
  const cmc_sb_g_td = document.getElementById("cmc_sb_g_td").value;

  const cmc_sb_sa_v = document.getElementById("cmc_sb_sa_v").value;
  const cmc_sb_sa_td = document.getElementById("cmc_sb_sa_td").value;

  const cmc_sb_so_v = document.getElementById("cmc_sb_so_v").value;
  const cmc_sb_so_td = document.getElementById("cmc_sb_so_td").value;

  const cmc_sb_c_v = document.getElementById("cmc_sb_c_v").value;
  const cmc_sb_c_td = document.getElementById("cmc_sb_c_td").value;

  //for subgrade
  const cmc_sg_r_v = document.getElementById("cmc_sg_r_v").value;
  const cmc_sg_r_td = document.getElementById("cmc_sg_r_td").value;

  const cmc_sg_g_v = document.getElementById("cmc_sg_g_v").value;
  const cmc_sg_g_td = document.getElementById("cmc_sg_g_td").value;

  const cmc_sg_sa_v = document.getElementById("cmc_sg_sa_v").value;
  const cmc_sg_sa_td = document.getElementById("cmc_sg_sa_td").value;

  const cmc_sg_so_v = document.getElementById("cmc_sg_so_v").value;
  const cmc_sg_so_td = document.getElementById("cmc_sg_so_td").value;

  const cmc_sg_c_v = document.getElementById("cmc_sg_c_v").value;
  const cmc_sg_c_td = document.getElementById("cmc_sg_c_td").value;

  //for embankment
  const cmc_em_r_v = document.getElementById("cmc_em_r_v").value;
  const cmc_em_r_td = document.getElementById("cmc_em_r_td").value;

  const cmc_em_g_v = document.getElementById("cmc_em_g_v").value;
  const cmc_em_g_td = document.getElementById("cmc_em_g_td").value;

  const cmc_em_sa_v = document.getElementById("cmc_em_sa_v").value;
  const cmc_em_sa_td = document.getElementById("cmc_em_sa_td").value;

  const cmc_em_so_v = document.getElementById("cmc_em_so_v").value;
  const cmc_em_so_td = document.getElementById("cmc_em_so_td").value;

  const cmc_em_c_v = document.getElementById("cmc_em_c_v").value;
  const cmc_em_c_td = document.getElementById("cmc_em_c_td").value;

  //maintenance phase materials
//for wearing course
const cmm_wc_va_v = document.getElementById("cmm_wc_va_v").value;
const cmm_wc_va_td = document.getElementById("cmm_wc_va_td").value;

const cmm_wc_b_v = document.getElementById("cmm_wc_b_v").value;
const cmm_wc_b_td = document.getElementById("cmm_wc_b_td").value;

const cmm_wc_w_v = document.getElementById("cmm_wc_w_v").value;
const cmm_wc_w_td = document.getElementById("cmm_wc_w_td").value;

const cmm_wc_tm_v = document.getElementById("cmm_wc_tm_v").value;
const cmm_wc_tm_td = document.getElementById("cmm_wc_tm_td").value;

//for base
const cmm_ba_r_v = document.getElementById("cmm_ba_r_v").value;
const cmm_ba_r_td = document.getElementById("cmm_ba_r_td").value;

const cmm_ba_g_v = document.getElementById("cmm_ba_g_v").value;
const cmm_ba_g_td = document.getElementById("cmm_ba_g_td").value;

const cmm_ba_sa_v = document.getElementById("cmm_ba_sa_v").value;
const cmm_ba_sa_td = document.getElementById("cmm_ba_sa_td").value;

const cmm_ba_so_v = document.getElementById("cmm_ba_so_v").value;
const cmm_ba_so_td = document.getElementById("cmm_ba_so_td").value;

const cmm_ba_c_v = document.getElementById("cmm_ba_c_v").value;
const cmm_ba_c_td = document.getElementById("cmm_ba_c_td").value;

  //for sub-base
  const cmm_sb_r_v = document.getElementById("cmm_sb_r_v").value;
  const cmm_sb_r_td = document.getElementById("cmm_sb_r_td").value;

  const cmm_sb_g_v = document.getElementById("cmm_sb_g_v").value;
  const cmm_sb_g_td = document.getElementById("cmm_sb_g_td").value;

  const cmm_sb_sa_v = document.getElementById("cmm_sb_sa_v").value;
  const cmm_sb_sa_td = document.getElementById("cmm_sb_sa_td").value;

  const cmm_sb_so_v = document.getElementById("cmm_sb_so_v").value;
  const cmm_sb_so_td = document.getElementById("cmm_sb_so_td").value;

  const cmm_sb_c_v = document.getElementById("cmm_sb_c_v").value;
  const cmm_sb_c_td = document.getElementById("cmm_sb_c_td").value;

  //for subgrade
  const cmm_sg_r_v = document.getElementById("cmm_sg_r_v").value;
  const cmm_sg_r_td = document.getElementById("cmm_sg_r_td").value;

  const cmm_sg_g_v = document.getElementById("cmm_sg_g_v").value;
  const cmm_sg_g_td = document.getElementById("cmm_sg_g_td").value;

  const cmm_sg_sa_v = document.getElementById("cmm_sg_sa_v").value;
  const cmm_sg_sa_td = document.getElementById("cmm_sg_sa_td").value;

  const cmm_sg_so_v = document.getElementById("cmm_sg_so_v").value;
  const cmm_sg_so_td = document.getElementById("cmm_sg_so_td").value;

  const cmm_sg_c_v = document.getElementById("cmm_sg_c_v").value;
  const cmm_sg_c_td = document.getElementById("cmm_sg_c_td").value;

  //for embankment
  const cmm_em_r_v = document.getElementById("cmm_em_r_v").value;
  const cmm_em_r_td = document.getElementById("cmm_em_r_td").value;

  const cmm_em_g_v = document.getElementById("cmm_em_g_v").value;
  const cmm_em_g_td = document.getElementById("cmm_em_g_td").value;

  const cmm_em_sa_v = document.getElementById("cmm_em_sa_v").value;
  const cmm_em_sa_td = document.getElementById("cmm_em_sa_td").value;

  const cmm_em_so_v = document.getElementById("cmm_em_so_v").value;
  const cmm_em_so_td = document.getElementById("cmm_em_so_td").value;

  const cmm_em_c_v = document.getElementById("cmm_em_c_v").value;
  const cmm_em_c_td = document.getElementById("cmm_em_c_td").value;


  // Use all formulas here
// 1.material production
//initial construction phase

//1. wearing course
enp_cmc_wc_va = cmc_wc_va_v*2.92*154;
enp_cmc_wc_b = cmc_wc_b_v*1.1*19757;
enp_cmc_wc_w = cmc_wc_w_v*1.1*0.006;
enp_cmc_wc_tm = cmc_wc_tm_v*1.61*227;

//2.base
enp_cmc_ba_r = cmc_ba_r_v*2.62*154;
enp_cmc_ba_g = cmc_ba_g_v*1.77*154;
enp_cmc_ba_sa = cmc_ba_sa_v*1.63*154;
enp_cmc_ba_so = cmc_ba_so_v*2.13*3.58*34.2*10/315;
enp_cmc_ba_c = cmc_ba_c_v*1.66*3775;

//3.sub-base
enp_cmc_sb_r = cmc_sb_r_v*2.62*154;
enp_cmc_sb_g = cmc_sb_g_v*1.77*154;
enp_cmc_sb_sa = cmc_sb_sa_v*1.63*154;
enp_cmc_sb_so = cmc_sb_so_v*2.13*3.58*34.2*10/315;
enp_cmc_sb_c = cmc_sb_c_v*1.66*3775;

//4.subgrade
enp_cmc_sg_r = cmc_sg_r_v*2.62*154;
enp_cmc_sg_g = cmc_sg_g_v*1.77*154;
enp_cmc_sg_sa = cmc_sg_sa_v*1.63*154;
enp_cmc_sg_so = cmc_sg_so_v*2.13*3.58*34.2*10/315;
enp_cmc_sg_c = cmc_sg_c_v*1.66*3775;

//5.embankment
enp_cmc_em_r = cmc_em_r_v*2.62*154;
enp_cmc_em_g = cmc_em_g_v*1.77*154;
enp_cmc_em_sa = cmc_em_sa_v*1.63*154;
enp_cmc_em_so = cmc_em_so_v*2.13*3.58*34.2*10/315;
enp_cmc_em_c = cmc_em_c_v*1.66*3775;

//maintenace phase
//1. wearing course
enp_cmm_wc_va = cmm_wc_va_v*2.92*154;
enp_cmm_wc_b = cmm_wc_b_v*1.1*19757;
enp_cmm_wc_w = cmm_wc_w_v*1.1*0.006;
enp_cmm_wc_tm = cmm_wc_tm_v*1.61*227;

//2.base
enp_cmm_ba_r = cmm_ba_r_v*2.62*154;
enp_cmm_ba_g = cmm_ba_g_v*1.77*154;
enp_cmm_ba_sa = cmm_ba_sa_v*1.63*154;
enp_cmm_ba_so = cmm_ba_so_v*2.13*3.58*34.2*10/315;
enp_cmm_ba_c = cmm_ba_c_v*1.66*3775;

//3.sub-base
enp_cmm_sb_r = cmm_sb_r_v*2.62*154;
enp_cmm_sb_g = cmm_sb_g_v*1.77*154;
enp_cmm_sb_sa = cmm_sb_sa_v*1.63*154;
enp_cmm_sb_so = cmm_sb_so_v*2.13*3.58*34.2*10/315;
enp_cmm_sb_c = cmm_sb_c_v*1.66*3775;

//4.subgrade
enp_cmm_sg_r = cmm_sg_r_v*2.62*154;
enp_cmm_sg_g = cmm_sg_g_v*1.77*154;
enp_cmm_sg_sa = cmm_sg_sa_v*1.63*154;
enp_cmm_sg_so = cmm_sg_so_v*2.13*3.58*34.2*10/315;
enp_cmm_sg_c = cmm_sg_c_v*1.66*3775;

//5.embankment
enp_cmm_em_r = cmm_em_r_v*2.62*154;
enp_cmm_em_g = cmm_em_g_v*1.77*154;
enp_cmm_em_sa = cmm_em_sa_v*1.63*154;
enp_cmm_em_so = cmm_em_so_v*2.13*3.58*34.2*10/315;
enp_cmm_em_c = cmm_em_c_v*1.66*3775;

tot1_cm_en = parseFloat(enp_cmc_wc_va)+parseFloat(enp_cmc_wc_b)+parseFloat(enp_cmc_wc_w)+parseFloat(enp_cmc_wc_tm)+parseFloat(enp_cmc_ba_r)+parseFloat(enp_cmc_ba_g)+parseFloat(enp_cmc_ba_sa)+parseFloat(enp_cmc_ba_so)+parseFloat(enp_cmc_ba_c)+parseFloat(
enp_cmc_sb_r)+parseFloat(enp_cmc_sb_g)+parseFloat(enp_cmc_sb_sa)+parseFloat(enp_cmc_sb_so)+parseFloat(enp_cmc_sb_c)+parseFloat(enp_cmc_sg_r)+parseFloat(enp_cmc_sg_g)+parseFloat(enp_cmc_sg_sa)+parseFloat(enp_cmc_sg_so)+parseFloat(enp_cmc_sg_c)+parseFloat(
enp_cmc_em_r)+parseFloat(enp_cmc_em_g)+parseFloat(enp_cmc_em_sa)+parseFloat(enp_cmc_em_so)+parseFloat(enp_cmc_em_c)+parseFloat(enp_cmm_wc_va)+parseFloat(enp_cmm_wc_b)+parseFloat(enp_cmm_wc_w)+parseFloat(enp_cmm_wc_tm)+parseFloat(enp_cmm_ba_r)+parseFloat(enp_cmm_ba_g)+parseFloat(enp_cmm_ba_sa)+parseFloat(enp_cmm_ba_so)+parseFloat(enp_cmm_ba_c)+parseFloat(
enp_cmm_sb_r)+parseFloat(enp_cmm_sb_g)+parseFloat(enp_cmm_sb_sa)+parseFloat(enp_cmm_sb_so)+parseFloat(enp_cmm_sb_c)+parseFloat(enp_cmm_sg_r)+parseFloat(enp_cmm_sg_g)+parseFloat(enp_cmm_sg_sa)+parseFloat(enp_cmm_sg_so)+parseFloat(enp_cmm_sg_c)+parseFloat(
enp_cmm_em_r)+parseFloat(enp_cmm_em_g)+parseFloat(enp_cmm_em_sa)+parseFloat(enp_cmm_em_so)+parseFloat(enp_cmm_em_c);
tot1_cm_en = tot1_cm_en/1.699/cm_wc_l;
localStorage.setItem("TOT1_CM_EN", tot1_cm_en);
//2.Transportation energy
//initial construction phase
//1. wearing course

ent_cmc_wc_va = cmc_wc_va_v*cmc_wc_va_td*2.92*0.42*35.85/1.02/20;
ent_cmc_wc_b = cmc_wc_b_v*cmc_wc_b_td*1.1*0.42*35.85/1.02/20;
ent_cmc_wc_w = cmc_wc_w_v*cmc_wc_w_td*1.1*0.42*35.85/1.02/20;
ent_cmc_wc_tm = cmc_wc_tm_v*cmc_wc_tm_td*1.61*0.42*35.85/1.02/20;

//2.base
ent_cmc_ba_r = cmc_ba_r_v*cmc_ba_r_td*2.62*0.42*35.85/1.02/20;
ent_cmc_ba_g = cmc_ba_g_v*cmc_ba_g_td*1.77*0.42*35.85/1.02/20;
ent_cmc_ba_sa = cmc_ba_sa_v*cmc_ba_sa_td*1.63*0.42*35.85/1.02/20;
ent_cmc_ba_so = cmc_ba_so_v*cmc_ba_so_td*2.13**0.42*35.85/1.02/20;
ent_cmc_ba_c = cmc_ba_c_v*cmc_ba_c_td*1.66**0.42*35.85/1.02/20;

//3.sub-base
ent_cmc_sb_r = cmc_sb_r_v*cmc_sb_r_td*2.62*0.42*35.85/1.02/20;
ent_cmc_sb_g = cmc_sb_g_v*cmc_sb_g_td*1.77*0.42*35.85/1.02/20;
ent_cmc_sb_sa = cmc_sb_sa_v*cmc_sb_sa_td*1.63*0.42*35.85/1.02/20;
ent_cmc_sb_so = cmc_sb_so_v*cmc_sb_so_td*2.13**0.42*35.85/1.02/20;
ent_cmc_sb_c = cmc_sb_c_v*cmc_sb_c_td*1.66**0.42*35.85/1.02/20;

//4.subgrade
ent_cmc_sg_r = cmc_sg_r_v*cmc_sg_r_td*2.62*0.42*35.85/1.02/20;
ent_cmc_sg_g = cmc_sg_g_v*cmc_sg_g_td*1.77*0.42*35.85/1.02/20;
ent_cmc_sg_sa = cmc_sg_sa_v*cmc_sg_sa_td*1.63*0.42*35.85/1.02/20;
ent_cmc_sg_so = cmc_sg_so_v*cmc_sg_so_td*2.13**0.42*35.85/1.02/20;
ent_cmc_sg_c = cmc_sg_c_v*cmc_sg_c_td*1.66**0.42*35.85/1.02/20;

//5.embankment
ent_cmc_em_r = cmc_em_r_v*cmc_em_r_td*2.62*0.42*35.85/1.02/20;
ent_cmc_em_g = cmc_em_g_v*cmc_em_g_td*1.77*0.42*35.85/1.02/20;
ent_cmc_em_sa = cmc_em_sa_v*cmc_em_sa_td*1.63*0.42*35.85/1.02/20;
ent_cmc_em_so = cmc_em_so_v*cmc_em_so_td*2.13**0.42*35.85/1.02/20;
ent_cmc_em_c = cmc_em_c_v*cmc_em_c_td*1.66**0.42*35.85/1.02/20;

//maintenance phase
//1. wearing course
ent_cmm_wc_va = cmm_wc_va_v*cmm_wc_va_td*2.92*0.42*35.85/1.02/20;
ent_cmm_wc_b = cmm_wc_b_v*cmm_wc_b_td*1.1*0.42*35.85/1.02/20;
ent_cmm_wc_w = cmm_wc_w_v*cmm_wc_w_td*1.1*0.42*35.85/1.02/20;
ent_cmm_wc_tm = cmm_wc_tm_v*cmm_wc_tm_td*1.61*0.42*35.85/1.02/20;

//2.base
ent_cmm_ba_r = cmm_ba_r_v*cmm_ba_r_td*2.62*0.42*35.85/1.02/20;
ent_cmm_ba_g = cmm_ba_g_v*cmm_ba_g_td*1.77*0.42*35.85/1.02/20;
ent_cmm_ba_sa = cmm_ba_sa_v*cmm_ba_sa_td*1.63*0.42*35.85/1.02/20;
ent_cmm_ba_so = cmm_ba_so_v*cmm_ba_so_td*2.13**0.42*35.85/1.02/20;
ent_cmm_ba_c = cmm_ba_c_v*cmm_ba_c_td*1.66**0.42*35.85/1.02/20;

//3.sub-base
ent_cmm_sb_r = cmm_sb_r_v*cmm_sb_r_td*2.62*0.42*35.85/1.02/20;
ent_cmm_sb_g = cmm_sb_g_v*cmm_sb_g_td*1.77*0.42*35.85/1.02/20;
ent_cmm_sb_sa = cmm_sb_sa_v*cmm_sb_sa_td*1.63*0.42*35.85/1.02/20;
ent_cmm_sb_so = cmm_sb_so_v*cmm_sb_so_td*2.13**0.42*35.85/1.02/20;
ent_cmm_sb_c = cmm_sb_c_v*cmm_sb_c_td*1.66**0.42*35.85/1.02/20;

//4.subgrade
ent_cmm_sg_r = cmm_sg_r_v*cmm_sg_r_td*2.62*0.42*35.85/1.02/20;
ent_cmm_sg_g = cmm_sg_g_v*cmm_sg_g_td*1.77*0.42*35.85/1.02/20;
ent_cmm_sg_sa = cmm_sg_sa_v*cmm_sg_sa_td*1.63*0.42*35.85/1.02/20;
ent_cmm_sg_so = cmm_sg_so_v*cmm_sg_so_td*2.13**0.42*35.85/1.02/20;
ent_cmm_sg_c = cmm_sg_c_v*cmm_sg_c_td*1.66**0.42*35.85/1.02/20;

//5.embankment
ent_cmm_em_r = cmm_em_r_v*cmm_em_r_td*2.62*0.42*35.85/1.02/20;
ent_cmm_em_g = cmm_em_g_v*cmm_em_g_td*1.77*0.42*35.85/1.02/20;
ent_cmm_em_sa = cmm_em_sa_v*cmm_em_sa_td*1.63*0.42*35.85/1.02/20;
ent_cmm_em_so = cmm_em_so_v*cmm_em_so_td*2.13**0.42*35.85/1.02/20;
ent_cmm_em_c = cmm_em_c_v*cmm_em_c_td*1.66**0.42*35.85/1.02/20;

tot2_cm_en = parseFloat(ent_cmc_wc_va)+parseFloat(ent_cmc_wc_b)+parseFloat(ent_cmc_wc_w)+parseFloat(ent_cmc_wc_tm)+parseFloat(ent_cmc_ba_r)+parseFloat(ent_cmc_ba_g)+parseFloat(ent_cmc_ba_sa)+parseFloat(ent_cmc_ba_so)+parseFloat(ent_cmc_ba_c)+parseFloat(
ent_cmc_sb_r)+parseFloat(ent_cmc_sb_g)+parseFloat(ent_cmc_sb_sa)+parseFloat(ent_cmc_sb_so)+parseFloat(ent_cmc_sb_c)+parseFloat(ent_cmc_sg_r)+parseFloat(ent_cmc_sg_g)+parseFloat(ent_cmc_sg_sa)+parseFloat(ent_cmc_sg_so)+parseFloat(ent_cmc_sg_c)+parseFloat(
ent_cmc_em_r)+parseFloat(ent_cmc_em_g)+parseFloat(ent_cmc_em_sa)+parseFloat(ent_cmc_em_so)+parseFloat(ent_cmc_em_c)+parseFloat(ent_cmm_wc_va)+parseFloat(ent_cmm_wc_b)+parseFloat(ent_cmm_wc_w)+parseFloat(ent_cmm_wc_tm)+parseFloat(ent_cmm_ba_r)+parseFloat(ent_cmm_ba_g)+parseFloat(ent_cmm_ba_sa)+parseFloat(ent_cmm_ba_so)+parseFloat(ent_cmm_ba_c)+parseFloat(
ent_cmm_sb_r)+parseFloat(ent_cmm_sb_g)+parseFloat(ent_cmm_sb_sa)+parseFloat(ent_cmm_sb_so)+parseFloat(ent_cmm_sb_c)+parseFloat(ent_cmm_sg_r)+parseFloat(ent_cmm_sg_g)+parseFloat(ent_cmm_sg_sa)+parseFloat(ent_cmm_sg_so)+parseFloat(ent_cmm_sg_c)+parseFloat(
ent_cmm_em_r)+parseFloat(ent_cmm_em_g)+parseFloat(ent_cmm_em_sa)+parseFloat(ent_cmm_em_so)+parseFloat(ent_cmm_em_c);
tot2_cm_en = tot2_cm_en/cm_wc_l;
localStorage.setItem("TOT2_CM_EN", tot2_cm_en);

//3.Construction Phase
//wearing course
enc_cm_wc = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*3.58*10*0.174;

//now we have to take the sum of all the base materilas (initila )+parseFloat( maint) and then proceed with the formula
cm_ba_tm_v = parseFloat(cmc_ba_r_v)+parseFloat(cmm_ba_r_v)+parseFloat(cmc_ba_g_v)+parseFloat(cmm_ba_g_v)+parseFloat(cmc_ba_sa_v)+parseFloat(cmm_ba_sa_v)+parseFloat(cmc_ba_so_v)+parseFloat(cmm_ba_so_v)+parseFloat(cmc_ba_c_v)+parseFloat(cmm_ba_c_v);
cm_sb_tm_v = parseFloat(cmc_sb_r_v)+parseFloat(cmm_sb_r_v)+parseFloat(cmc_sb_g_v)+parseFloat(cmm_sb_g_v)+parseFloat(cmc_sb_sa_v)+parseFloat(cmm_sb_sa_v)+parseFloat(cmc_sb_so_v)+parseFloat(cmm_sb_so_v)+parseFloat(cmc_sb_c_v)+parseFloat(cmm_sb_c_v);
cm_sg_tm_v = parseFloat(cmc_sg_r_v)+parseFloat(cmm_sg_r_v)+parseFloat(cmc_sg_g_v)+parseFloat(cmm_sg_g_v)+parseFloat(cmc_sg_sa_v)+parseFloat(cmm_sg_sa_v)+parseFloat(cmc_sg_so_v)+parseFloat(cmm_sg_so_v)+parseFloat(cmc_sg_c_v)+parseFloat(cmm_sg_c_v);
cm_em_tm_v = parseFloat(cmc_em_r_v)+parseFloat(cmm_em_r_v)+parseFloat(cmc_em_g_v)+parseFloat(cmm_em_g_v)+parseFloat(cmc_em_sa_v)+parseFloat(cmm_em_sa_v)+parseFloat(cmc_em_so_v)+parseFloat(cmm_em_so_v)+parseFloat(cmc_em_c_v)+parseFloat(cmm_em_c_v);

//base
enc_cm_ba = cm_ba_tm_v*1.96*3.58*10*0.123;
//sub-base
enc_cm_sb = cm_sb_tm_v*1.96*3.58*10*0.123;
//subgrade
enc_cm_sg = cm_sg_tm_v*1.96*3.58*10*0.123;
//embankment
enc_cm_em = cm_em_tm_v*1.96*3.58*10*0.123;

tot3_cm_en = parseFloat(enc_cm_wc)+parseFloat(enc_cm_ba)+parseFloat(enc_cm_sb)+parseFloat(enc_cm_sg)+parseFloat(enc_cm_em);
tot3_cm_en = tot3_cm_en/2.02/cm_wc_l;
localStorage.setItem("TOT3_CM_EN", tot3_cm_en);

tot_cm_en = parseFloat(tot1_cm_en )+parseFloat( tot2_cm_en )+parseFloat( tot3_cm_en);
localStorage.setItem("TOT_CM_EN", tot_cm_en);

////////////////// energy part completed //////////////////////////


////////////////////CHG EMISSION/////////////////////////////////////

                        //CO2\\
// 1.material production
//1. wearing course
CO2_p_cm_wc_va = (parseFloat(cmc_wc_va_v)+parseFloat(cmm_wc_va_v))*2.92*10922/1000;
CO2_p_cm_wc_b = (parseFloat(cmc_wc_b_v)+parseFloat(cmm_wc_b_v))*1.1*121978/1000;
CO2_p_cm_wc_w = (parseFloat(cmc_wc_w_v)+parseFloat(cmm_wc_w_v))*1.1*0.497/1000;
CO2_p_cm_wc_tm = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*2.04;

//2.base
CO2_p_cm_ba_r = (parseFloat(cmc_ba_r_v)+parseFloat(cmm_ba_r_v))*2.62*10922/1000;
CO2_p_cm_ba_g = (parseFloat(cmc_ba_g_v)+parseFloat(cmm_ba_g_v))*1.77*10922/1000;
CO2_p_cm_ba_sa = (parseFloat(cmc_ba_sa_v)+parseFloat(cmm_ba_sa_v))*1.63*10922/1000;
CO2_p_cm_ba_so = (parseFloat(cmc_ba_so_v)+parseFloat(cmm_ba_so_v))*2.13*34.2*852*3.16/315/1000;
CO2_p_cm_ba_c = (parseFloat(cmc_ba_c_v)+parseFloat(cmm_ba_c_v))*1.66*264925/1000;

//3.sub-base
CO2_p_cm_sb_r = (parseFloat(cmc_sb_r_v)+parseFloat(cmm_sb_r_v))*2.62*10922/1000;
CO2_p_cm_sb_g = (parseFloat(cmc_sb_g_v)+parseFloat(cmm_sb_g_v))*1.77*10922/1000;
CO2_p_cm_sb_sa = (parseFloat(cmc_sb_sa_v)+parseFloat(cmm_sb_sa_v))*1.63*10922/1000;
CO2_p_cm_sb_so = (parseFloat(cmc_sb_so_v)+parseFloat(cmm_sb_so_v))*2.13*34.2*852*3.16/315/1000;
CO2_p_cm_sb_c = (parseFloat(cmc_sb_c_v)+parseFloat(cmm_sb_c_v))*1.66*264925/1000;

//4.subgrade
CO2_p_cm_sg_r = (parseFloat(cmc_sg_r_v)+parseFloat(cmm_sg_r_v))*2.62*10922/1000;
CO2_p_cm_sg_g = (parseFloat(cmc_sg_g_v)+parseFloat(cmm_sg_g_v))*1.77*10922/1000;
CO2_p_cm_sg_sa = (parseFloat(cmc_sg_sa_v)+parseFloat(cmm_sg_sa_v))*1.63*10922/1000;
CO2_p_cm_sg_so = (parseFloat(cmc_sg_so_v)+parseFloat(cmm_sg_so_v))*2.13*34.2*852*3.16/315/1000;
CO2_p_cm_sg_c = (parseFloat(cmc_sg_c_v)+parseFloat(cmm_sg_c_v))*1.66*264925/1000;

//5.embankment
CO2_p_cm_em_r = (parseFloat(cmc_em_r_v)+parseFloat(cmm_em_r_v))*2.62*10922/1000;
CO2_p_cm_em_g = (parseFloat(cmc_em_g_v)+parseFloat(cmm_em_g_v))*1.77*10922/1000;
CO2_p_cm_em_sa = (parseFloat(cmc_em_sa_v)+parseFloat(cmm_em_sa_v))*1.63*10922/1000;
CO2_p_cm_em_so = (parseFloat(cmc_em_so_v)+parseFloat(cmm_em_so_v))*2.13*34.2*852*3.16/315/1000;
CO2_p_cm_em_c = (parseFloat(cmc_em_c_v)+parseFloat(cmm_em_c_v))*1.66*264925/1000;

tot1_cm_CO2 = parseFloat(CO2_p_cm_wc_va)+parseFloat(CO2_p_cm_wc_b)+parseFloat(CO2_p_cm_wc_w)+parseFloat(CO2_p_cm_wc_tm)+parseFloat(CO2_p_cm_ba_r)+parseFloat(CO2_p_cm_ba_g)+parseFloat(CO2_p_cm_ba_sa)+parseFloat(CO2_p_cm_ba_so)+parseFloat(CO2_p_cm_ba_c)+parseFloat(CO2_p_cm_sb_r)+parseFloat(CO2_p_cm_sb_g)+parseFloat(CO2_p_cm_sb_sa)+parseFloat(CO2_p_cm_sb_so)+parseFloat(CO2_p_cm_sb_c)+parseFloat(CO2_p_cm_sg_r)+parseFloat(CO2_p_cm_sg_g)+parseFloat(CO2_p_cm_sg_sa)+parseFloat(CO2_p_cm_sg_so)+parseFloat(CO2_p_cm_sg_c)+parseFloat(CO2_p_cm_em_r)+parseFloat(CO2_p_cm_em_g)+parseFloat(CO2_p_cm_em_sa)+parseFloat(CO2_p_cm_em_so)+parseFloat(CO2_p_cm_em_c);
tot1_cm_CO2 = tot1_cm_CO2/1.695/cm_wc_l;
localStorage.setItem("TOT1_CM_CO2", tot1_cm_CO2);

//2.Material transportation
//1. wearing course
CO2_t_cm_wc_va = (parseFloat(cmc_wc_va_v*cmc_wc_va_td)+parseFloat(cmm_wc_va_v*cmm_wc_va_td))*2.92*0.42*2678.89/1.102/20/1000;
CO2_t_cm_wc_b = (parseFloat(cmc_wc_b_v*cmc_wc_b_td)+parseFloat(cmm_wc_b_v*cmm_wc_b_td))*1.1*0.42*2678.89/1.102/20/1000;
CO2_t_cm_wc_w = (parseFloat(cmc_wc_w_v*cmc_wc_w_td)+parseFloat(cmm_wc_w_v*cmm_wc_w_td))*1.1*0.42*2678.89/1.102/20/1000;;
CO2_t_cm_wc_tm = (parseFloat(cmc_wc_tm_v*cmc_wc_tm_td)+parseFloat(cmm_wc_tm_v*cmm_wc_tm_td))*1.61*0.42*2678.89/1.102/20/1000;

//2.base
CO2_t_cm_ba_r = (parseFloat(cmc_ba_r_v*cmc_ba_r_td)+parseFloat(cmm_ba_r_v*cmm_ba_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_cm_ba_g = (parseFloat(cmc_ba_g_v*cmc_ba_g_td)+parseFloat(cmm_ba_g_v*cmm_ba_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_cm_ba_sa = (parseFloat(cmc_ba_sa_v*cmc_ba_sa_td)+parseFloat(cmm_ba_sa_v*cmm_ba_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_cm_ba_so = (parseFloat(cmc_ba_so_v*cmc_ba_so_td)+parseFloat(cmm_ba_so_v*cmm_ba_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_cm_ba_c = (parseFloat(cmc_ba_c_v*cmc_ba_c_td)+parseFloat(cmm_ba_c_v*cmm_ba_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//3.sub-base
CO2_t_cm_sb_r = (parseFloat(cmc_sb_r_v*cmc_sb_r_td)+parseFloat(cmm_sb_r_v*cmm_sb_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_cm_sb_g = (parseFloat(cmc_sb_g_v*cmc_sb_g_td)+parseFloat(cmm_sb_g_v*cmm_sb_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_cm_sb_sa = (parseFloat(cmc_sb_sa_v*cmc_sb_sa_td)+parseFloat(cmm_sb_sa_v*cmm_sb_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_cm_sb_so = (parseFloat(cmc_sb_so_v*cmc_sb_so_td)+parseFloat(cmm_sb_so_v*cmm_sb_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_cm_sb_c = (parseFloat(cmc_sb_c_v*cmc_sb_c_td)+parseFloat(cmm_sb_c_v*cmm_sb_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//4.subgrade
CO2_t_cm_sg_r = (parseFloat(cmc_sg_r_v*cmc_sg_r_td)+parseFloat(cmm_sg_r_v*cmm_sg_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_cm_sg_g = (parseFloat(cmc_sg_g_v*cmc_sg_g_td)+parseFloat(cmm_sg_g_v*cmm_sg_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_cm_sg_sa = (parseFloat(cmc_sg_sa_v*cmc_sg_sa_td)+parseFloat(cmm_sg_sa_v*cmm_sg_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_cm_sg_so = (parseFloat(cmc_sg_so_v*cmc_sg_so_td)+parseFloat(cmm_sg_so_v*cmm_sg_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_cm_sg_c = (parseFloat(cmc_sg_c_v*cmc_sg_c_td)+parseFloat(cmm_sg_c_v*cmm_sg_c_td))*1.66*0.42*2678.89/1.102/20/1000;

//5.embankment
CO2_t_cm_em_r = (parseFloat(cmc_em_r_v*cmc_em_r_td)+parseFloat(cmm_em_r_v*cmm_em_r_td))*2.62*0.42*2678.89/1.102/20/1000;
CO2_t_cm_em_g = (parseFloat(cmc_em_g_v*cmc_em_g_td)+parseFloat(cmm_em_g_v*cmm_em_g_td))*1.77*0.42*2678.89/1.102/20/1000;
CO2_t_cm_em_sa = (parseFloat(cmc_em_sa_v*cmc_em_sa_td)+parseFloat(cmm_em_sa_v*cmm_em_sa_td))*1.63*0.42*2678.89/1.102/20/1000;;
CO2_t_cm_em_so = (parseFloat(cmc_em_so_v*cmc_em_so_td)+parseFloat(cmm_em_so_v*cmm_em_so_td))*2.13*0.42*2678.89/1.102/20/1000;
CO2_t_cm_em_c = (parseFloat(cmc_em_c_v*cmc_em_c_td)+parseFloat(cmm_em_c_v*cmm_em_c_td))*1.66*0.42*2678.89/1.102/20/1000;

tot2_cm_CO2 =  parseFloat(CO2_t_cm_wc_va)+parseFloat(CO2_t_cm_wc_b)+parseFloat(CO2_t_cm_wc_w)+parseFloat(CO2_t_cm_wc_tm)+parseFloat(CO2_t_cm_ba_r)+parseFloat(CO2_t_cm_ba_g)+parseFloat(CO2_t_cm_ba_sa)+parseFloat(CO2_t_cm_ba_so)+parseFloat(CO2_t_cm_ba_c)+parseFloat(CO2_t_cm_sb_r)+parseFloat(CO2_t_cm_sb_g)+parseFloat(CO2_t_cm_sb_sa)+parseFloat(CO2_t_cm_sb_so)+parseFloat(CO2_t_cm_sb_c)+parseFloat(CO2_t_cm_sg_r)+parseFloat(CO2_t_cm_sg_g)+parseFloat(CO2_t_cm_sg_sa)+parseFloat(CO2_t_cm_sg_so)+parseFloat(CO2_t_cm_sg_c)+parseFloat(CO2_t_cm_em_r)+parseFloat(CO2_t_cm_em_g)+parseFloat(CO2_t_cm_em_sa)+parseFloat(CO2_t_cm_em_so)+parseFloat(CO2_t_cm_em_c);
tot2_cm_CO2 = tot2_cm_CO2/1.19/cm_wc_l;
localStorage.setItem("TOT2_CM_CO2", tot2_cm_CO2);
//3.Construction Phase
//wearing course
CO2_c_cm_wc = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*852*3.16*0.174/1000;

//base
CO2_c_cm_ba = cm_ba_tm_v*1.96*852*3.16*0.123/1000;
//sub-base
CO2_c_cm_sb = cm_sb_tm_v*1.96*852*3.16*0.123/1000;
//subgrade
CO2_c_cm_sg = cm_sg_tm_v*1.96*852*3.16*0.123/1000;
//embankment
CO2_c_cm_em = cm_em_tm_v*1.96*852*3.16*0.123/1000;

tot3_cm_CO2 = parseFloat(CO2_c_cm_wc)+parseFloat(CO2_c_cm_ba)+parseFloat(CO2_c_cm_sb)+parseFloat(CO2_c_cm_sg)+parseFloat(CO2_c_cm_em);
tot3_cm_CO2 = tot3_cm_CO2/1.695/cm_wc_l;
localStorage.setItem("TOT3_CM_CO2", tot3_cm_CO2);
//total CO2 emmission
tot_cm_CO2 = parseFloat(tot1_cm_CO2 )+parseFloat( tot2_cm_CO2 )+parseFloat( tot3_cm_CO2);
localStorage.setItem("TOT_CM_CO2", tot_cm_CO2);

//NOX\\
// 1.material production
//1. wearing course
NOX_p_cm_wc_va = (parseFloat(cmc_wc_va_v)+parseFloat(cmm_wc_va_v))*2.92*22/1000;
NOX_p_cm_wc_b = (parseFloat(cmc_wc_b_v)+parseFloat(cmm_wc_b_v))*1.1*6239/1000;
NOX_p_cm_wc_w = (parseFloat(cmc_wc_w_v)+parseFloat(cmm_wc_w_v))*1.1*0.003/1000;
NOX_p_cm_wc_tm = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*0.1816;

//2.base
NOX_p_cm_ba_r = (parseFloat(cmc_ba_r_v)+parseFloat(cmm_ba_r_v))*2.62*22/1000;
NOX_p_cm_ba_g = (parseFloat(cmc_ba_g_v)+parseFloat(cmm_ba_g_v))*1.77*22/1000;
NOX_p_cm_ba_sa = (parseFloat(cmc_ba_sa_v)+parseFloat(cmm_ba_sa_v))*1.63*22/1000;
NOX_p_cm_ba_so = (parseFloat(cmc_ba_so_v)+parseFloat(cmm_ba_so_v))*2.13*131*14.7/315/1000;
NOX_p_cm_ba_c = (parseFloat(cmc_ba_c_v)+parseFloat(cmm_ba_c_v))*1.66*3186/1000;

//3.sub-base
NOX_p_cm_sb_r = (parseFloat(cmc_sb_r_v)+parseFloat(cmm_sb_r_v))*2.62*22/1000;
NOX_p_cm_sb_g = (parseFloat(cmc_sb_g_v)+parseFloat(cmm_sb_g_v))*1.77*22/1000;
NOX_p_cm_sb_sa = (parseFloat(cmc_sb_sa_v)+parseFloat(cmm_sb_sa_v))*1.63*22/1000;
NOX_p_cm_sb_so = (parseFloat(cmc_sb_so_v)+parseFloat(cmm_sb_so_v))*2.13*131*14.7/315/1000;
NOX_p_cm_sb_c = (parseFloat(cmc_sb_c_v)+parseFloat(cmm_sb_c_v))*1.66*3186/1000;

//4.subgrade
NOX_p_cm_sg_r = (parseFloat(cmc_sg_r_v)+parseFloat(cmm_sg_r_v))*2.62*22/1000;
NOX_p_cm_sg_g = (parseFloat(cmc_sg_g_v)+parseFloat(cmm_sg_g_v))*1.77*22/1000;
NOX_p_cm_sg_sa = (parseFloat(cmc_sg_sa_v)+parseFloat(cmm_sg_sa_v))*1.63*22/1000;
NOX_p_cm_sg_so = (parseFloat(cmc_sg_so_v)+parseFloat(cmm_sg_so_v))*2.13*131*14.7/315/1000;
NOX_p_cm_sg_c = (parseFloat(cmc_sg_c_v)+parseFloat(cmm_sg_c_v))*1.66*3186/1000;

//5.embankment
NOX_p_cm_em_r = (parseFloat(cmc_em_r_v)+parseFloat(cmm_em_r_v))*2.62*22/1000;
NOX_p_cm_em_g = (parseFloat(cmc_em_g_v)+parseFloat(cmm_em_g_v))*1.77*22/1000;
NOX_p_cm_em_sa = (parseFloat(cmc_em_sa_v)+parseFloat(cmm_em_sa_v))*1.63*22/1000;
NOX_p_cm_em_so = (parseFloat(cmc_em_so_v)+parseFloat(cmm_em_so_v))*2.13*131*14.7/315/1000;
NOX_p_cm_em_c = (parseFloat(cmc_em_c_v)+parseFloat(cmm_em_c_v))*1.66*3186/1000;

tot1_cm_NOX = parseFloat(NOX_p_cm_wc_va)+parseFloat(NOX_p_cm_wc_b)+parseFloat(NOX_p_cm_wc_w)+parseFloat(NOX_p_cm_wc_tm)+parseFloat(NOX_p_cm_ba_r)+parseFloat(NOX_p_cm_ba_g)+parseFloat(NOX_p_cm_ba_sa)+parseFloat(NOX_p_cm_ba_so)+parseFloat(NOX_p_cm_ba_c)+parseFloat(NOX_p_cm_sb_r)+parseFloat(NOX_p_cm_sb_g)+parseFloat(NOX_p_cm_sb_sa)+parseFloat(NOX_p_cm_sb_so)+parseFloat(NOX_p_cm_sb_c)+parseFloat(NOX_p_cm_sg_r)+parseFloat(NOX_p_cm_sg_g)+parseFloat(NOX_p_cm_sg_sa)+parseFloat(NOX_p_cm_sg_so)+parseFloat(NOX_p_cm_sg_c)+parseFloat(NOX_p_cm_em_r)+parseFloat(NOX_p_cm_em_g)+parseFloat(NOX_p_cm_em_sa)+parseFloat(NOX_p_cm_em_so)+parseFloat(NOX_p_cm_em_c);
tot1_cm_NOX = tot1_cm_NOX/1.538/cm_wc_l;
localStorage.setItem("TOT1_CM_NOX", tot1_cm_NOX);
//2.Material transportation
//1. wearing course
NOX_t_cm_wc_va = (parseFloat(cmc_wc_va_v*cmc_wc_va_td)+parseFloat(cmm_wc_va_v*cmm_wc_va_td))*2.92*3/1.102/1000;
NOX_t_cm_wc_b = (parseFloat(cmc_wc_b_v*cmc_wc_b_td)+parseFloat(cmm_wc_b_v*cmm_wc_b_td))*1.1*3/1.102/1000;
NOX_t_cm_wc_w = (parseFloat(cmc_wc_w_v*cmc_wc_w_td)+parseFloat(cmm_wc_w_v*cmm_wc_w_td))*1.1*3/1.102/1000;;
NOX_t_cm_wc_tm = (parseFloat(cmc_wc_tm_v*cmc_wc_tm_td)+parseFloat(cmm_wc_tm_v*cmm_wc_tm_td))*1.61*3/1.102/1000;

//2.base
NOX_t_cm_ba_r = (parseFloat(cmc_ba_r_v*cmc_ba_r_td)+parseFloat(cmm_ba_r_v*cmm_ba_r_td))*2.62*3/1.102/1000;
NOX_t_cm_ba_g = (parseFloat(cmc_ba_g_v*cmc_ba_g_td)+parseFloat(cmm_ba_g_v*cmm_ba_g_td))*1.77*3/1.102/1000;
NOX_t_cm_ba_sa = (parseFloat(cmc_ba_sa_v*cmc_ba_sa_td)+parseFloat(cmm_ba_sa_v*cmm_ba_sa_td))*1.63*3/1.102/1000;;
NOX_t_cm_ba_so = (parseFloat(cmc_ba_so_v*cmc_ba_so_td)+parseFloat(cmm_ba_so_v*cmm_ba_so_td))*2.13*3/1.102/1000;
NOX_t_cm_ba_c = (parseFloat(cmc_ba_c_v*cmc_ba_c_td)+parseFloat(cmm_ba_c_v*cmm_ba_c_td))*1.66*3/1.102/1000;

//3.sub-base
NOX_t_cm_sb_r = (parseFloat(cmc_sb_r_v*cmc_sb_r_td)+parseFloat(cmm_sb_r_v*cmm_sb_r_td))*2.62*3/1.102/1000;
NOX_t_cm_sb_g = (parseFloat(cmc_sb_g_v*cmc_sb_g_td)+parseFloat(cmm_sb_g_v*cmm_sb_g_td))*1.77*3/1.102/1000;
NOX_t_cm_sb_sa = (parseFloat(cmc_sb_sa_v*cmc_sb_sa_td)+parseFloat(cmm_sb_sa_v*cmm_sb_sa_td))*1.63*3/1.102/1000;;
NOX_t_cm_sb_so = (parseFloat(cmc_sb_so_v*cmc_sb_so_td)+parseFloat(cmm_sb_so_v*cmm_sb_so_td))*2.13*3/1.102/1000;
NOX_t_cm_sb_c = (parseFloat(cmc_sb_c_v*cmc_sb_c_td)+parseFloat(cmm_sb_c_v*cmm_sb_c_td))*1.66*3/1.102/1000;

//4.subgrade
NOX_t_cm_sg_r = (parseFloat(cmc_sg_r_v*cmc_sg_r_td)+parseFloat(cmm_sg_r_v*cmm_sg_r_td))*2.62*3/1.102/1000;
NOX_t_cm_sg_g = (parseFloat(cmc_sg_g_v*cmc_sg_g_td)+parseFloat(cmm_sg_g_v*cmm_sg_g_td))*1.77*3/1.102/1000;
NOX_t_cm_sg_sa = (parseFloat(cmc_sg_sa_v*cmc_sg_sa_td)+parseFloat(cmm_sg_sa_v*cmm_sg_sa_td))*1.63*3/1.102/1000;;
NOX_t_cm_sg_so = (parseFloat(cmc_sg_so_v*cmc_sg_so_td)+parseFloat(cmm_sg_so_v*cmm_sg_so_td))*2.13*3/1.102/1000;
NOX_t_cm_sg_c = (parseFloat(cmc_sg_c_v*cmc_sg_c_td)+parseFloat(cmm_sg_c_v*cmm_sg_c_td))*1.66*3/1.102/1000;

//5.embankment
NOX_t_cm_em_r = (parseFloat(cmc_em_r_v*cmc_em_r_td)+parseFloat(cmm_em_r_v*cmm_em_r_td))*2.62*3/1.102/1000;
NOX_t_cm_em_g = (parseFloat(cmc_em_g_v*cmc_em_g_td)+parseFloat(cmm_em_g_v*cmm_em_g_td))*1.77*3/1.102/1000;
NOX_t_cm_em_sa = (parseFloat(cmc_em_sa_v*cmc_em_sa_td)+parseFloat(cmm_em_sa_v*cmm_em_sa_td))*1.63*3/1.102/1000;;
NOX_t_cm_em_so = (parseFloat(cmc_em_so_v*cmc_em_so_td)+parseFloat(cmm_em_so_v*cmm_em_so_td))*2.13*3/1.102/1000;
NOX_t_cm_em_c = (parseFloat(cmc_em_c_v*cmc_em_c_td)+parseFloat(cmm_em_c_v*cmm_em_c_td))*1.66*3/1.102/1000;

tot2_cm_NOX =  parseFloat(NOX_t_cm_wc_va)+parseFloat(NOX_t_cm_wc_b)+parseFloat(NOX_t_cm_wc_w)+parseFloat(NOX_t_cm_wc_tm)+parseFloat(NOX_t_cm_ba_r)+parseFloat(NOX_t_cm_ba_g)+parseFloat(NOX_t_cm_ba_sa)+parseFloat(NOX_t_cm_ba_so)+parseFloat(NOX_t_cm_ba_c)+parseFloat(NOX_t_cm_sb_r)+parseFloat(NOX_t_cm_sb_g)+parseFloat(NOX_t_cm_sb_sa)+parseFloat(NOX_t_cm_sb_so)+parseFloat(NOX_t_cm_sb_c)+parseFloat(NOX_t_cm_sg_r)+parseFloat(NOX_t_cm_sg_g)+parseFloat(NOX_t_cm_sg_sa)+parseFloat(NOX_t_cm_sg_so)+parseFloat(NOX_t_cm_sg_c)+parseFloat(NOX_t_cm_em_r)+parseFloat(NOX_t_cm_em_g)+parseFloat(NOX_t_cm_em_sa)+parseFloat(NOX_t_cm_em_so)+parseFloat(NOX_t_cm_em_c);
tot2_cm_NOX = tot2_cm_NOX/1.19/cm_wc_l;
localStorage.setItem("TOT2_CM_NOX", tot2_cm_NOX);

//3.Construction Phase
//wearing course
NOX_c_cm_wc = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*14.07*0.776/1000;

//base
NOX_c_cm_ba = cm_ba_tm_v*1.96*14.07*0.511/1000;
//sub-base
NOX_c_cm_sb = cm_sb_tm_v*1.96*14.07*0.511/1000;
//subgrade
NOX_c_cm_sg = cm_sg_tm_v*1.96*14.07*0.511/1000;
//embankment
NOX_c_cm_em = cm_em_tm_v*1.96*14.07*0.511/1000;

tot3_cm_NOX = parseFloat(NOX_c_cm_wc)+parseFloat(NOX_c_cm_ba)+parseFloat(NOX_c_cm_sb)+parseFloat(NOX_c_cm_sg)+parseFloat(NOX_c_cm_em);
tot3_cm_NOX = tot3_cm_NOX/1.61/cm_wc_l;
localStorage.setItem("TOT3_CM_NOX", tot3_cm_NOX);
///////////////////////////////////////////
tot_cm_NOX = parseFloat(tot1_cm_NOX)+parseFloat(tot2_cm_NOX)+parseFloat(tot3_cm_NOX);
localStorage.setItem("TOT_CM_NOX", tot_cm_NOX);

//SO2\\
// 1.material production
//1. wearing course
SO2_p_cm_wc_va = (parseFloat(cmc_wc_va_v)+parseFloat(cmm_wc_va_v))*2.92*11/1000;
SO2_p_cm_wc_b = (parseFloat(cmc_wc_b_v)+parseFloat(cmm_wc_b_v))*1.1*5653/1000;
SO2_p_cm_wc_w = (parseFloat(cmc_wc_w_v)+parseFloat(cmm_wc_w_v))*1.1*0.003/1000;
SO2_p_cm_wc_tm = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*0.1816;

//2.base
SO2_p_cm_ba_r = (parseFloat(cmc_ba_r_v)+parseFloat(cmm_ba_r_v))*2.62*11/1000;
SO2_p_cm_ba_g = (parseFloat(cmc_ba_g_v)+parseFloat(cmm_ba_g_v))*1.77*11/1000;
SO2_p_cm_ba_sa = (parseFloat(cmc_ba_sa_v)+parseFloat(cmm_ba_sa_v))*1.63*11/1000;
SO2_p_cm_ba_so = (parseFloat(cmc_ba_so_v)+parseFloat(cmm_ba_so_v))*2.13*131*0.93/315/1000;
SO2_p_cm_ba_c = (parseFloat(cmc_ba_c_v)+parseFloat(cmm_ba_c_v))*1.66*3158/1000;

//3.sub-base
SO2_p_cm_sb_r = (parseFloat(cmc_sb_r_v)+parseFloat(cmm_sb_r_v))*2.62*11/1000;
SO2_p_cm_sb_g = (parseFloat(cmc_sb_g_v)+parseFloat(cmm_sb_g_v))*1.77*11/1000;
SO2_p_cm_sb_sa = (parseFloat(cmc_sb_sa_v)+parseFloat(cmm_sb_sa_v))*1.63*11/1000;
SO2_p_cm_sb_so = (parseFloat(cmc_sb_so_v)+parseFloat(cmm_sb_so_v))*2.13*131*0.93/315/1000;
SO2_p_cm_sb_c = (parseFloat(cmc_sb_c_v)+parseFloat(cmm_sb_c_v))*1.66*3158/1000;

//4.subgrade
SO2_p_cm_sg_r = (parseFloat(cmc_sg_r_v)+parseFloat(cmm_sg_r_v))*2.62*11/1000;
SO2_p_cm_sg_g = (parseFloat(cmc_sg_g_v)+parseFloat(cmm_sg_g_v))*1.77*11/1000;
SO2_p_cm_sg_sa = (parseFloat(cmc_sg_sa_v)+parseFloat(cmm_sg_sa_v))*1.63*11/1000;
SO2_p_cm_sg_so = (parseFloat(cmc_sg_so_v)+parseFloat(cmm_sg_so_v))*2.13*131*0.93/315/1000;
SO2_p_cm_sg_c = (parseFloat(cmc_sg_c_v)+parseFloat(cmm_sg_c_v))*1.66*3158/1000;

//5.embankment
SO2_p_cm_em_r = (parseFloat(cmc_em_r_v)+parseFloat(cmm_em_r_v))*2.62*11/1000;
SO2_p_cm_em_g = (parseFloat(cmc_em_g_v)+parseFloat(cmm_em_g_v))*1.77*11/1000;
SO2_p_cm_em_sa = (parseFloat(cmc_em_sa_v)+parseFloat(cmm_em_sa_v))*1.63*11/1000;
SO2_p_cm_em_so = (parseFloat(cmc_em_so_v)+parseFloat(cmm_em_so_v))*2.13*131*0.93/315/1000;
SO2_p_cm_em_c = (parseFloat(cmc_em_c_v)+parseFloat(cmm_em_c_v))*1.66*3158/1000;

tot1_cm_SO2 = parseFloat(SO2_p_cm_wc_va)+parseFloat(SO2_p_cm_wc_b)+parseFloat(SO2_p_cm_wc_w)+parseFloat(SO2_p_cm_wc_tm)+parseFloat(SO2_p_cm_ba_r)+parseFloat(SO2_p_cm_ba_g)+parseFloat(SO2_p_cm_ba_sa)+parseFloat(SO2_p_cm_ba_so)+parseFloat(SO2_p_cm_ba_c)+parseFloat(SO2_p_cm_sb_r)+parseFloat(SO2_p_cm_sb_g)+parseFloat(SO2_p_cm_sb_sa)+parseFloat(SO2_p_cm_sb_so)+parseFloat(SO2_p_cm_sb_c)+parseFloat(SO2_p_cm_sg_r)+parseFloat(SO2_p_cm_sg_g)+parseFloat(SO2_p_cm_sg_sa)+parseFloat(SO2_p_cm_sg_so)+parseFloat(SO2_p_cm_sg_c)+parseFloat(SO2_p_cm_em_r)+parseFloat(SO2_p_cm_em_g)+parseFloat(SO2_p_cm_em_sa)+parseFloat(SO2_p_cm_em_so)+parseFloat(SO2_p_cm_em_c);
tot1_cm_SO2 = tot1_cm_SO2/1.538/cm_wc_l;
localStorage.setItem("TOT1_CM_SO2", tot1_cm_SO2);

//2.Material transportation
//1. wearing course
SO2_t_cm_wc_va = (parseFloat(cmc_wc_va_v*cmc_wc_va_td)+parseFloat(cmm_wc_va_v*cmm_wc_va_td))*2.92*0.18/1.102/1000;
SO2_t_cm_wc_b = (parseFloat(cmc_wc_b_v*cmc_wc_b_td)+parseFloat(cmm_wc_b_v*cmm_wc_b_td))*1.1*0.18/1.102/1000;
SO2_t_cm_wc_w = (parseFloat(cmc_wc_w_v*cmc_wc_w_td)+parseFloat(cmm_wc_w_v*cmm_wc_w_td))*1.1*0.18/1.102/1000;;
SO2_t_cm_wc_tm = (parseFloat(cmc_wc_tm_v*cmc_wc_tm_td)+parseFloat(cmm_wc_tm_v*cmm_wc_tm_td))*1.61*0.18/1.102/1000;

//2.base
SO2_t_cm_ba_r = (parseFloat(cmc_ba_r_v*cmc_ba_r_td)+parseFloat(cmm_ba_r_v*cmm_ba_r_td))*2.62*0.18/1.102/1000;
SO2_t_cm_ba_g = (parseFloat(cmc_ba_g_v*cmc_ba_g_td)+parseFloat(cmm_ba_g_v*cmm_ba_g_td))*1.77*0.18/1.102/1000;
SO2_t_cm_ba_sa = (parseFloat(cmc_ba_sa_v*cmc_ba_sa_td)+parseFloat(cmm_ba_sa_v*cmm_ba_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_cm_ba_so = (parseFloat(cmc_ba_so_v*cmc_ba_so_td)+parseFloat(cmm_ba_so_v*cmm_ba_so_td))*2.13*0.18/1.102/1000;
SO2_t_cm_ba_c = (parseFloat(cmc_ba_c_v*cmc_ba_c_td)+parseFloat(cmm_ba_c_v*cmm_ba_c_td))*1.66*0.18/1.102/1000;

//3.sub-base
SO2_t_cm_sb_r = (parseFloat(cmc_sb_r_v*cmc_sb_r_td)+parseFloat(cmm_sb_r_v*cmm_sb_r_td))*2.62*0.18/1.102/1000;
SO2_t_cm_sb_g = (parseFloat(cmc_sb_g_v*cmc_sb_g_td)+parseFloat(cmm_sb_g_v*cmm_sb_g_td))*1.77*0.18/1.102/1000;
SO2_t_cm_sb_sa = (parseFloat(cmc_sb_sa_v*cmc_sb_sa_td)+parseFloat(cmm_sb_sa_v*cmm_sb_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_cm_sb_so = (parseFloat(cmc_sb_so_v*cmc_sb_so_td)+parseFloat(cmm_sb_so_v*cmm_sb_so_td))*2.13*0.18/1.102/1000;
SO2_t_cm_sb_c = (parseFloat(cmc_sb_c_v*cmc_sb_c_td)+parseFloat(cmm_sb_c_v*cmm_sb_c_td))*1.66*0.18/1.102/1000;

//4.subgrade
SO2_t_cm_sg_r = (parseFloat(cmc_sg_r_v*cmc_sg_r_td)+parseFloat(cmm_sg_r_v*cmm_sg_r_td))*2.62*0.18/1.102/1000;
SO2_t_cm_sg_g = (parseFloat(cmc_sg_g_v*cmc_sg_g_td)+parseFloat(cmm_sg_g_v*cmm_sg_g_td))*1.77*0.18/1.102/1000;
SO2_t_cm_sg_sa = (parseFloat(cmc_sg_sa_v*cmc_sg_sa_td)+parseFloat(cmm_sg_sa_v*cmm_sg_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_cm_sg_so = (parseFloat(cmc_sg_so_v*cmc_sg_so_td)+parseFloat(cmm_sg_so_v*cmm_sg_so_td))*2.13*0.18/1.102/1000;
SO2_t_cm_sg_c = (parseFloat(cmc_sg_c_v*cmc_sg_c_td)+parseFloat(cmm_sg_c_v*cmm_sg_c_td))*1.66*0.18/1.102/1000;

//5.embankment
SO2_t_cm_em_r = (parseFloat(cmc_em_r_v*cmc_em_r_td)+parseFloat(cmm_em_r_v*cmm_em_r_td))*2.62*0.18/1.102/1000;
SO2_t_cm_em_g = (parseFloat(cmc_em_g_v*cmc_em_g_td)+parseFloat(cmm_em_g_v*cmm_em_g_td))*1.77*0.18/1.102/1000;
SO2_t_cm_em_sa = (parseFloat(cmc_em_sa_v*cmc_em_sa_td)+parseFloat(cmm_em_sa_v*cmm_em_sa_td))*1.63*0.18/1.102/1000;;
SO2_t_cm_em_so = (parseFloat(cmc_em_so_v*cmc_em_so_td)+parseFloat(cmm_em_so_v*cmm_em_so_td))*2.13*0.18/1.102/1000;
SO2_t_cm_em_c = (parseFloat(cmc_em_c_v*cmc_em_c_td)+parseFloat(cmm_em_c_v*cmm_em_c_td))*1.66*0.18/1.102/1000;

tot2_cm_SO2 =  parseFloat(SO2_t_cm_wc_va)+parseFloat(SO2_t_cm_wc_b)+parseFloat(SO2_t_cm_wc_w)+parseFloat(SO2_t_cm_wc_tm)+parseFloat(SO2_t_cm_ba_r)+parseFloat(SO2_t_cm_ba_g)+parseFloat(SO2_t_cm_ba_sa)+parseFloat(SO2_t_cm_ba_so)+parseFloat(SO2_t_cm_ba_c)+parseFloat(SO2_t_cm_sb_r)+parseFloat(SO2_t_cm_sb_g)+parseFloat(SO2_t_cm_sb_sa)+parseFloat(SO2_t_cm_sb_so)+parseFloat(SO2_t_cm_sb_c)+parseFloat(SO2_t_cm_sg_r)+parseFloat(SO2_t_cm_sg_g)+parseFloat(SO2_t_cm_sg_sa)+parseFloat(SO2_t_cm_sg_so)+parseFloat(SO2_t_cm_sg_c)+parseFloat(SO2_t_cm_em_r)+parseFloat(SO2_t_cm_em_g)+parseFloat(SO2_t_cm_em_sa)+parseFloat(SO2_t_cm_em_so)+parseFloat(SO2_t_cm_em_c);
tot2_cm_SO2 = tot2_cm_SO2/1.19/cm_wc_l;
localStorage.setItem("TOT2_CM_SO2", tot2_cm_SO2);
//3.Construction Phase
//wearing course
SO2_c_cm_wc = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*0.93*0.776/1000;

//base
SO2_c_cm_ba = cm_ba_tm_v*1.96*0.93*0.511/1000;
//sub-base
SO2_c_cm_sb = cm_sb_tm_v*1.96*0.93*0.511/1000;
//subgrade
SO2_c_cm_sg = cm_sg_tm_v*1.96*0.93*0.511/1000;
//embankment
SO2_c_cm_em = cm_em_tm_v*1.96*0.93*0.511/1000;

tot3_cm_SO2 = parseFloat(SO2_c_cm_wc)+parseFloat(SO2_c_cm_ba)+parseFloat(SO2_c_cm_sb)+parseFloat(SO2_c_cm_sg)+parseFloat(SO2_c_cm_em);
tot3_cm_SO2 = tot3_cm_SO2/1.46/cm_wc_l;
localStorage.setItem("TOT3_CM_SO2", tot3_cm_SO2);
///////////////////////////////////////////
tot_cm_SO2 = parseFloat(tot1_cm_SO2)+parseFloat(tot2_cm_SO2)+parseFloat(tot3_cm_SO2);
localStorage.setItem("TOT_CM_SO2", tot_cm_SO2);

//CO\\
// 1.material production
//1. wearing course
CO_p_cm_wc_va = (parseFloat(cmc_wc_va_v)+parseFloat(cmm_wc_va_v))*2.92*14/1000;
CO_p_cm_wc_b = (parseFloat(cmc_wc_b_v)+parseFloat(cmm_wc_b_v))*1.1*4736/1000;
CO_p_cm_wc_w = (parseFloat(cmc_wc_w_v)+parseFloat(cmm_wc_w_v))*1.1*0.002/1000;
CO_p_cm_wc_tm = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*0.1816;

//2.base
CO_p_cm_ba_r = (parseFloat(cmc_ba_r_v)+parseFloat(cmm_ba_r_v))*2.62*14/1000;
CO_p_cm_ba_g = (parseFloat(cmc_ba_g_v)+parseFloat(cmm_ba_g_v))*1.77*14/1000;
CO_p_cm_ba_sa = (parseFloat(cmc_ba_sa_v)+parseFloat(cmm_ba_sa_v))*1.63*14/1000;
CO_p_cm_ba_so = (parseFloat(cmc_ba_so_v)+parseFloat(cmm_ba_so_v))*2.13*131*3.03/315/1000;
CO_p_cm_ba_c = (parseFloat(cmc_ba_c_v)+parseFloat(cmm_ba_c_v))*1.66*1132/1000;

//3.sub-base
CO_p_cm_sb_r = (parseFloat(cmc_sb_r_v)+parseFloat(cmm_sb_r_v))*2.62*14/1000;
CO_p_cm_sb_g = (parseFloat(cmc_sb_g_v)+parseFloat(cmm_sb_g_v))*1.77*14/1000;
CO_p_cm_sb_sa = (parseFloat(cmc_sb_sa_v)+parseFloat(cmm_sb_sa_v))*1.63*14/1000;
CO_p_cm_sb_so = (parseFloat(cmc_sb_so_v)+parseFloat(cmm_sb_so_v))*2.13*131*3.03/315/1000;
CO_p_cm_sb_c = (parseFloat(cmc_sb_c_v)+parseFloat(cmm_sb_c_v))*1.66*1132/1000;

//4.subgrade
CO_p_cm_sg_r = (parseFloat(cmc_sg_r_v)+parseFloat(cmm_sg_r_v))*2.62*14/1000;
CO_p_cm_sg_g = (parseFloat(cmc_sg_g_v)+parseFloat(cmm_sg_g_v))*1.77*14/1000;
CO_p_cm_sg_sa = (parseFloat(cmc_sg_sa_v)+parseFloat(cmm_sg_sa_v))*1.63*14/1000;
CO_p_cm_sg_so = (parseFloat(cmc_sg_so_v)+parseFloat(cmm_sg_so_v))*2.13*131*3.03/315/1000;
CO_p_cm_sg_c = (parseFloat(cmc_sg_c_v)+parseFloat(cmm_sg_c_v))*1.66*1132/1000;

//5.embankment
CO_p_cm_em_r = (parseFloat(cmc_em_r_v)+parseFloat(cmm_em_r_v))*2.62*14/1000;
CO_p_cm_em_g = (parseFloat(cmc_em_g_v)+parseFloat(cmm_em_g_v))*1.77*14/1000;
CO_p_cm_em_sa = (parseFloat(cmc_em_sa_v)+parseFloat(cmm_em_sa_v))*1.63*14/1000;
CO_p_cm_em_so = (parseFloat(cmc_em_so_v)+parseFloat(cmm_em_so_v))*2.13*131*3.03/315/1000;
CO_p_cm_em_c = (parseFloat(cmc_em_c_v)+parseFloat(cmm_em_c_v))*1.66*1132/1000;

tot1_cm_CO = parseFloat(CO_p_cm_wc_va)+parseFloat(CO_p_cm_wc_b)+parseFloat(CO_p_cm_wc_w)+parseFloat(CO_p_cm_wc_tm)+parseFloat(CO_p_cm_ba_r)+parseFloat(CO_p_cm_ba_g)+parseFloat(CO_p_cm_ba_sa)+parseFloat(CO_p_cm_ba_so)+parseFloat(CO_p_cm_ba_c)+parseFloat(CO_p_cm_sb_r)+parseFloat(CO_p_cm_sb_g)+parseFloat(CO_p_cm_sb_sa)+parseFloat(CO_p_cm_sb_so)+parseFloat(CO_p_cm_sb_c)+parseFloat(CO_p_cm_sg_r)+parseFloat(CO_p_cm_sg_g)+parseFloat(CO_p_cm_sg_sa)+parseFloat(CO_p_cm_sg_so)+parseFloat(CO_p_cm_sg_c)+parseFloat(CO_p_cm_em_r)+parseFloat(CO_p_cm_em_g)+parseFloat(CO_p_cm_em_sa)+parseFloat(CO_p_cm_em_so)+parseFloat(CO_p_cm_em_c);
tot1_cm_CO = tot1_cm_CO/1.723/cm_wc_l;
localStorage.setItem("TOT1_CM_CO", tot1_cm_CO);

//2.Material transportation
//1. wearing course
CO_t_cm_wc_va = (parseFloat(cmc_wc_va_v*cmc_wc_va_td)+parseFloat(cmm_wc_va_v*cmm_wc_va_td))*2.92*0.25/1.102/1000;
CO_t_cm_wc_b = (parseFloat(cmc_wc_b_v*cmc_wc_b_td)+parseFloat(cmm_wc_b_v*cmm_wc_b_td))*1.1*0.25/1.102/1000;
CO_t_cm_wc_w = (parseFloat(cmc_wc_w_v*cmc_wc_w_td)+parseFloat(cmm_wc_w_v*cmm_wc_w_td))*1.1*0.25/1.102/1000;;
CO_t_cm_wc_tm = (parseFloat(cmc_wc_tm_v*cmc_wc_tm_td)+parseFloat(cmm_wc_tm_v*cmm_wc_tm_td))*1.61*0.25/1.102/1000;

//2.base
CO_t_cm_ba_r = (parseFloat(cmc_ba_r_v*cmc_ba_r_td)+parseFloat(cmm_ba_r_v*cmm_ba_r_td))*2.62*0.25/1.102/1000;
CO_t_cm_ba_g = (parseFloat(cmc_ba_g_v*cmc_ba_g_td)+parseFloat(cmm_ba_g_v*cmm_ba_g_td))*1.77*0.25/1.102/1000;
CO_t_cm_ba_sa = (parseFloat(cmc_ba_sa_v*cmc_ba_sa_td)+parseFloat(cmm_ba_sa_v*cmm_ba_sa_td))*1.63*0.25/1.102/1000;;
CO_t_cm_ba_so = (parseFloat(cmc_ba_so_v*cmc_ba_so_td)+parseFloat(cmm_ba_so_v*cmm_ba_so_td))*2.13*0.25/1.102/1000;
CO_t_cm_ba_c = (parseFloat(cmc_ba_c_v*cmc_ba_c_td)+parseFloat(cmm_ba_c_v*cmm_ba_c_td))*1.66*0.25/1.102/1000;

//3.sub-base
CO_t_cm_sb_r = (parseFloat(cmc_sb_r_v*cmc_sb_r_td)+parseFloat(cmm_sb_r_v*cmm_sb_r_td))*2.62*0.25/1.102/1000;
CO_t_cm_sb_g = (parseFloat(cmc_sb_g_v*cmc_sb_g_td)+parseFloat(cmm_sb_g_v*cmm_sb_g_td))*1.77*0.25/1.102/1000;
CO_t_cm_sb_sa = (parseFloat(cmc_sb_sa_v*cmc_sb_sa_td)+parseFloat(cmm_sb_sa_v*cmm_sb_sa_td))*1.63*0.25/1.102/1000;;
CO_t_cm_sb_so = (parseFloat(cmc_sb_so_v*cmc_sb_so_td)+parseFloat(cmm_sb_so_v*cmm_sb_so_td))*2.13*0.25/1.102/1000;
CO_t_cm_sb_c = (parseFloat(cmc_sb_c_v*cmc_sb_c_td)+parseFloat(cmm_sb_c_v*cmm_sb_c_td))*1.66*0.25/1.102/1000;

//4.subgrade
CO_t_cm_sg_r = (parseFloat(cmc_sg_r_v*cmc_sg_r_td)+parseFloat(cmm_sg_r_v*cmm_sg_r_td))*2.62*0.25/1.102/1000;
CO_t_cm_sg_g = (parseFloat(cmc_sg_g_v*cmc_sg_g_td)+parseFloat(cmm_sg_g_v*cmm_sg_g_td))*1.77*0.25/1.102/1000;
CO_t_cm_sg_sa = (parseFloat(cmc_sg_sa_v*cmc_sg_sa_td)+parseFloat(cmm_sg_sa_v*cmm_sg_sa_td))*1.63*0.25/1.102/1000;;
CO_t_cm_sg_so = (parseFloat(cmc_sg_so_v*cmc_sg_so_td)+parseFloat(cmm_sg_so_v*cmm_sg_so_td))*2.13*0.25/1.102/1000;
CO_t_cm_sg_c = (parseFloat(cmc_sg_c_v*cmc_sg_c_td)+parseFloat(cmm_sg_c_v*cmm_sg_c_td))*1.66*0.25/1.102/1000;

//5.embankment
CO_t_cm_em_r = (parseFloat(cmc_em_r_v*cmc_em_r_td)+parseFloat(cmm_em_r_v*cmm_em_r_td))*2.62*0.25/1.102/1000;
CO_t_cm_em_g = (parseFloat(cmc_em_g_v*cmc_em_g_td)+parseFloat(cmm_em_g_v*cmm_em_g_td))*1.77*0.25/1.102/1000;
CO_t_cm_em_sa = (parseFloat(cmc_em_sa_v*cmc_em_sa_td)+parseFloat(cmm_em_sa_v*cmm_em_sa_td))*1.63*0.25/1.102/1000;;
CO_t_cm_em_so = (parseFloat(cmc_em_so_v*cmc_em_so_td)+parseFloat(cmm_em_so_v*cmm_em_so_td))*2.13*0.25/1.102/1000;
CO_t_cm_em_c = (parseFloat(cmc_em_c_v*cmc_em_c_td)+parseFloat(cmm_em_c_v*cmm_em_c_td))*1.66*0.25/1.102/1000;

tot2_cm_CO =  parseFloat(CO_t_cm_wc_va)+parseFloat(CO_t_cm_wc_b)+parseFloat(CO_t_cm_wc_w)+parseFloat(CO_t_cm_wc_tm)+parseFloat(CO_t_cm_ba_r)+parseFloat(CO_t_cm_ba_g)+parseFloat(CO_t_cm_ba_sa)+parseFloat(CO_t_cm_ba_so)+parseFloat(CO_t_cm_ba_c)+parseFloat(CO_t_cm_sb_r)+parseFloat(CO_t_cm_sb_g)+parseFloat(CO_t_cm_sb_sa)+parseFloat(CO_t_cm_sb_so)+parseFloat(CO_t_cm_sb_c)+parseFloat(CO_t_cm_sg_r)+parseFloat(CO_t_cm_sg_g)+parseFloat(CO_t_cm_sg_sa)+parseFloat(CO_t_cm_sg_so)+parseFloat(CO_t_cm_sg_c)+parseFloat(CO_t_cm_em_r)+parseFloat(CO_t_cm_em_g)+parseFloat(CO_t_cm_em_sa)+parseFloat(CO_t_cm_em_so)+parseFloat(CO_t_cm_em_c);
tot2_cm_CO = tot2_cm_CO/1.19/cm_wc_l;
localStorage.setItem("TOT2_CM_CO", tot2_cm_CO);

//3.Construction Phase
//wearing course
CO_c_cm_wc = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*3.03*0.776/1000;

//base
CO_c_cm_ba = cm_ba_tm_v*1.96*3.03*0.511/1000;
//sub-base
CO_c_cm_sb = cm_sb_tm_v*1.96*3.03*0.511/1000;
//subgrade
CO_c_cm_sg = cm_sg_tm_v*1.96*3.03*0.511/1000;
//embankment
CO_c_cm_em = cm_em_tm_v*1.96*3.03*0.511/1000;

tot3_cm_CO = parseFloat(CO_c_cm_wc)+parseFloat(CO_c_cm_ba)+parseFloat(CO_c_cm_sb)+parseFloat(CO_c_cm_sg)+parseFloat(CO_c_cm_em);
tot3_cm_CO = tot3_cm_CO/1.723/cm_wc_l;
localStorage.setItem("TOT3_CM_CO", tot3_cm_CO);

///////////////////////////////////////////
tot_cm_CO = parseFloat(tot1_cm_CO)+parseFloat(tot2_cm_CO)+parseFloat(tot3_cm_CO);
localStorage.setItem("TOT_CM_CO", tot_cm_CO);

//PM10\\
// 1.material production
//1. wearing course
PM10_p_cm_wc_va = (parseFloat(cmc_wc_va_v)+parseFloat(cmm_wc_va_v))*2.92*157/1000;
PM10_p_cm_wc_b = (parseFloat(cmc_wc_b_v)+parseFloat(cmm_wc_b_v))*1.1*1057/1000;
PM10_p_cm_wc_w = (parseFloat(cmc_wc_w_v)+parseFloat(cmm_wc_w_v))*1.1*0.001/1000;
PM10_p_cm_wc_tm = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*0.1816;

//2.base
PM10_p_cm_ba_r = (parseFloat(cmc_ba_r_v)+parseFloat(cmm_ba_r_v))*2.62*157/1000;
PM10_p_cm_ba_g = (parseFloat(cmc_ba_g_v)+parseFloat(cmm_ba_g_v))*1.77*157/1000;
PM10_p_cm_ba_sa = (parseFloat(cmc_ba_sa_v)+parseFloat(cmm_ba_sa_v))*1.63*157/1000;
PM10_p_cm_ba_so = (parseFloat(cmc_ba_so_v)+parseFloat(cmm_ba_so_v))*2.13*131*1/315/1000;
PM10_p_cm_ba_c = (parseFloat(cmc_ba_c_v)+parseFloat(cmm_ba_c_v))*1.66*597/1000;

//3.sub-base
PM10_p_cm_sb_r = (parseFloat(cmc_sb_r_v)+parseFloat(cmm_sb_r_v))*2.62*157/1000;
PM10_p_cm_sb_g = (parseFloat(cmc_sb_g_v)+parseFloat(cmm_sb_g_v))*1.77*157/1000;
PM10_p_cm_sb_sa = (parseFloat(cmc_sb_sa_v)+parseFloat(cmm_sb_sa_v))*1.63*157/1000;
PM10_p_cm_sb_so = (parseFloat(cmc_sb_so_v)+parseFloat(cmm_sb_so_v))*2.13*131*1/315/1000;
PM10_p_cm_sb_c = (parseFloat(cmc_sb_c_v)+parseFloat(cmm_sb_c_v))*1.66*597/1000;

//4.subgrade
PM10_p_cm_sg_r = (parseFloat(cmc_sg_r_v)+parseFloat(cmm_sg_r_v))*2.62*157/1000;
PM10_p_cm_sg_g = (parseFloat(cmc_sg_g_v)+parseFloat(cmm_sg_g_v))*1.77*157/1000;
PM10_p_cm_sg_sa = (parseFloat(cmc_sg_sa_v)+parseFloat(cmm_sg_sa_v))*1.63*157/1000;
PM10_p_cm_sg_so = (parseFloat(cmc_sg_so_v)+parseFloat(cmm_sg_so_v))*2.13*131*1/315/1000;
PM10_p_cm_sg_c = (parseFloat(cmc_sg_c_v)+parseFloat(cmm_sg_c_v))*1.66*597/1000;

//5.embankment
PM10_p_cm_em_r = (parseFloat(cmc_em_r_v)+parseFloat(cmm_em_r_v))*2.62*157/1000;
PM10_p_cm_em_g = (parseFloat(cmc_em_g_v)+parseFloat(cmm_em_g_v))*1.77*157/1000;
PM10_p_cm_em_sa = (parseFloat(cmc_em_sa_v)+parseFloat(cmm_em_sa_v))*1.63*157/1000;
PM10_p_cm_em_so = (parseFloat(cmc_em_so_v)+parseFloat(cmm_em_so_v))*2.13*131*1/315/1000;
PM10_p_cm_em_c = (parseFloat(cmc_em_c_v)+parseFloat(cmm_em_c_v))*1.66*597/1000;

tot1_cm_PM10 = parseFloat(PM10_p_cm_wc_va)+parseFloat(PM10_p_cm_wc_b)+parseFloat(PM10_p_cm_wc_w)+parseFloat(PM10_p_cm_wc_tm)+parseFloat(PM10_p_cm_ba_r)+parseFloat(PM10_p_cm_ba_g)+parseFloat(PM10_p_cm_ba_sa)+parseFloat(PM10_p_cm_ba_so)+parseFloat(PM10_p_cm_ba_c)+parseFloat(PM10_p_cm_sb_r)+parseFloat(PM10_p_cm_sb_g)+parseFloat(PM10_p_cm_sb_sa)+parseFloat(PM10_p_cm_sb_so)+parseFloat(PM10_p_cm_sb_c)+parseFloat(PM10_p_cm_sg_r)+parseFloat(PM10_p_cm_sg_g)+parseFloat(PM10_p_cm_sg_sa)+parseFloat(PM10_p_cm_sg_so)+parseFloat(PM10_p_cm_sg_c)+parseFloat(PM10_p_cm_em_r)+parseFloat(PM10_p_cm_em_g)+parseFloat(PM10_p_cm_em_sa)+parseFloat(PM10_p_cm_em_so)+parseFloat(PM10_p_cm_em_c);
tot1_cm_PM10 = tot1_cm_PM10/1.725/cm_wc_l;
localStorage.setItem("TOT1_CM_PM10", tot1_cm_PM10);

//2.Material transportation
//1. wearing course
PM10_t_cm_wc_va = (parseFloat(cmc_wc_va_v*cmc_wc_va_td)+parseFloat(cmm_wc_va_v*cmm_wc_va_td))*2.92*0.58/1.102/1000;
PM10_t_cm_wc_b = (parseFloat(cmc_wc_b_v*cmc_wc_b_td)+parseFloat(cmm_wc_b_v*cmm_wc_b_td))*1.1*0.58/1.102/1000;
PM10_t_cm_wc_w = (parseFloat(cmc_wc_w_v*cmc_wc_w_td)+parseFloat(cmm_wc_w_v*cmm_wc_w_td))*1.1*0.58/1.102/1000;;
PM10_t_cm_wc_tm = (parseFloat(cmc_wc_tm_v*cmc_wc_tm_td)+parseFloat(cmm_wc_tm_v*cmm_wc_tm_td))*1.61*0.58/1.102/1000;

//2.base
PM10_t_cm_ba_r = (parseFloat(cmc_ba_r_v*cmc_ba_r_td)+parseFloat(cmm_ba_r_v*cmm_ba_r_td))*2.62*0.58/1.102/1000;
PM10_t_cm_ba_g = (parseFloat(cmc_ba_g_v*cmc_ba_g_td)+parseFloat(cmm_ba_g_v*cmm_ba_g_td))*1.77*0.58/1.102/1000;
PM10_t_cm_ba_sa = (parseFloat(cmc_ba_sa_v*cmc_ba_sa_td)+parseFloat(cmm_ba_sa_v*cmm_ba_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_cm_ba_so = (parseFloat(cmc_ba_so_v*cmc_ba_so_td)+parseFloat(cmm_ba_so_v*cmm_ba_so_td))*2.13*0.58/1.102/1000;
PM10_t_cm_ba_c = (parseFloat(cmc_ba_c_v*cmc_ba_c_td)+parseFloat(cmm_ba_c_v*cmm_ba_c_td))*1.66*0.58/1.102/1000;

//3.sub-base
PM10_t_cm_sb_r = (parseFloat(cmc_sb_r_v*cmc_sb_r_td)+parseFloat(cmm_sb_r_v*cmm_sb_r_td))*2.62*0.58/1.102/1000;
PM10_t_cm_sb_g = (parseFloat(cmc_sb_g_v*cmc_sb_g_td)+parseFloat(cmm_sb_g_v*cmm_sb_g_td))*1.77*0.58/1.102/1000;
PM10_t_cm_sb_sa = (parseFloat(cmc_sb_sa_v*cmc_sb_sa_td)+parseFloat(cmm_sb_sa_v*cmm_sb_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_cm_sb_so = (parseFloat(cmc_sb_so_v*cmc_sb_so_td)+parseFloat(cmm_sb_so_v*cmm_sb_so_td))*2.13*0.58/1.102/1000;
PM10_t_cm_sb_c = (parseFloat(cmc_sb_c_v*cmc_sb_c_td)+parseFloat(cmm_sb_c_v*cmm_sb_c_td))*1.66*0.58/1.102/1000;

//4.subgrade
PM10_t_cm_sg_r = (parseFloat(cmc_sg_r_v*cmc_sg_r_td)+parseFloat(cmm_sg_r_v*cmm_sg_r_td))*2.62*0.58/1.102/1000;
PM10_t_cm_sg_g = (parseFloat(cmc_sg_g_v*cmc_sg_g_td)+parseFloat(cmm_sg_g_v*cmm_sg_g_td))*1.77*0.58/1.102/1000;
PM10_t_cm_sg_sa = (parseFloat(cmc_sg_sa_v*cmc_sg_sa_td)+parseFloat(cmm_sg_sa_v*cmm_sg_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_cm_sg_so = (parseFloat(cmc_sg_so_v*cmc_sg_so_td)+parseFloat(cmm_sg_so_v*cmm_sg_so_td))*2.13*0.58/1.102/1000;
PM10_t_cm_sg_c = (parseFloat(cmc_sg_c_v*cmc_sg_c_td)+parseFloat(cmm_sg_c_v*cmm_sg_c_td))*1.66*0.58/1.102/1000;

//5.embankment
PM10_t_cm_em_r = (parseFloat(cmc_em_r_v*cmc_em_r_td)+parseFloat(cmm_em_r_v*cmm_em_r_td))*2.62*0.58/1.102/1000;
PM10_t_cm_em_g = (parseFloat(cmc_em_g_v*cmc_em_g_td)+parseFloat(cmm_em_g_v*cmm_em_g_td))*1.77*0.58/1.102/1000;
PM10_t_cm_em_sa = (parseFloat(cmc_em_sa_v*cmc_em_sa_td)+parseFloat(cmm_em_sa_v*cmm_em_sa_td))*1.63*0.58/1.102/1000;;
PM10_t_cm_em_so = (parseFloat(cmc_em_so_v*cmc_em_so_td)+parseFloat(cmm_em_so_v*cmm_em_so_td))*2.13*0.58/1.102/1000;
PM10_t_cm_em_c = (parseFloat(cmc_em_c_v*cmc_em_c_td)+parseFloat(cmm_em_c_v*cmm_em_c_td))*1.66*0.58/1.102/1000;

tot2_cm_PM10 =  parseFloat(PM10_t_cm_wc_va)+parseFloat(PM10_t_cm_wc_b)+parseFloat(PM10_t_cm_wc_w)+parseFloat(PM10_t_cm_wc_tm)+parseFloat(PM10_t_cm_ba_r)+parseFloat(PM10_t_cm_ba_g)+parseFloat(PM10_t_cm_ba_sa)+parseFloat(PM10_t_cm_ba_so)+parseFloat(PM10_t_cm_ba_c)+parseFloat(PM10_t_cm_sb_r)+parseFloat(PM10_t_cm_sb_g)+parseFloat(PM10_t_cm_sb_sa)+parseFloat(PM10_t_cm_sb_so)+parseFloat(PM10_t_cm_sb_c)+parseFloat(PM10_t_cm_sg_r)+parseFloat(PM10_t_cm_sg_g)+parseFloat(PM10_t_cm_sg_sa)+parseFloat(PM10_t_cm_sg_so)+parseFloat(PM10_t_cm_sg_c)+parseFloat(PM10_t_cm_em_r)+parseFloat(PM10_t_cm_em_g)+parseFloat(PM10_t_cm_em_sa)+parseFloat(PM10_t_cm_em_so)+parseFloat(PM10_t_cm_em_c);
tot2_cm_PM10 = tot2_cm_PM10/1.19/cm_wc_l;
localStorage.setItem("TOT2_CM_PM10", tot2_cm_PM10);
//3.Construction Phase
//wearing course
PM10_c_cm_wc = (parseFloat(cmc_wc_tm_v)+parseFloat(cmm_wc_tm_v))*1.61*1*0.776/1000;

//base
PM10_c_cm_ba = cm_ba_tm_v*1.96*1*0.511/1000;
//sub-base
PM10_c_cm_sb = cm_sb_tm_v*1.96*1*0.511/1000;
//subgrade
PM10_c_cm_sg = cm_sg_tm_v*1.96*1*0.511/1000;
//embankment
PM10_c_cm_em = cm_em_tm_v*1.96*1*0.511/1000;

tot3_cm_PM10 = parseFloat(PM10_c_cm_wc)+parseFloat(PM10_c_cm_ba)+parseFloat(PM10_c_cm_sb)+parseFloat(PM10_c_cm_sg)+parseFloat(PM10_c_cm_em);
tot3_cm_PM10 = tot3_cm_PM10/1.725/cm_wc_l;
localStorage.setItem("TOT3_CM_PM10", tot3_cm_PM10);
///////////////////////////////////////////
tot_cm_PM10 = parseFloat(tot1_cm_PM10)+parseFloat(tot2_cm_PM10)+parseFloat(tot3_cm_PM10);
localStorage.setItem("TOT_CM_PM10", tot_cm_PM10);

/*****************************************END OF COLD MIX RESULTS****************************************************** */

}

	
