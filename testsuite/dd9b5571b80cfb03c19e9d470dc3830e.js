load("201224b0d1c296b45befd2285e95dd42.js");
function testCaseTypeMismatchBadness()
{
  for (var z = 0; z < 3; ++z)
  {
    switch ("")
    {
      default:
      case 9:
        break;

      case "":
      case {}:
        break;
    }
  }

  return "no crash";
}
assertEq(testCaseTypeMismatchBadness(), "no crash");
