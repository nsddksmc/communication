function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wr8v4vw5Cl":
        Script1();
        break;
      case "5zMaif98gWq":
        Script2();
        break;
      case "5qCBiSrMGe5":
        Script3();
        break;
      case "6hOkKtdQSCW":
        Script4();
        break;
      case "67aFLKrES4T":
        Script5();
        break;
      case "5ioPbeCJiN7":
        Script6();
        break;
      case "6Y65UaFqlYd":
        Script7();
        break;
      case "68HWHHYawAU":
        Script8();
        break;
      case "6YrF3y6mABB":
        Script9();
        break;
      case "67wF78NevZU":
        Script10();
        break;
      case "5fw8ElumRDi":
        Script11();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script10()
{
  $("#tab-customlink").show();
}

function Script11()
{
  window.print();
}

