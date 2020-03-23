load("8b38e12cab5de21ec5393724c0d9b7dd.js");
/*
 Copyright (C) 2007 Apple Inc.  All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
*/

if(typeof(WScript) === "undefined")
{
	var WScript = {
		Echo: print
    }
}

function record(time) {
    document.getElementById("console").innerHTML = time + "ms";
    if (window.parent) {
        parent.recordResult(time);
    }
}


      var paramArray =[
        {"blackPoint":0,"fill":0,"brightness":1,"contrast":1,"saturation":1,"temperature":-2000,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1.626,"contrast":1.777,"saturation":1,"temperature":2000,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0.2,"fill":0.606,"brightness":0.588,"contrast":1.916,"saturation":1.838,"temperature":-1332,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1,"contrast":1,"saturation":0,"temperature":0,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1.488,"contrast":1.026,"saturation":1.61,"temperature":0,"splitPoint":-0.6619999999999999,"shadowsHue":0.5,"shadowsSaturation":0.625,"highlightsHue":0.166,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0.181,"fill":0.622,"brightness":0.384,"contrast":2,"saturation":1.638,"temperature":0,"splitPoint":-0.6759999999999999,"shadowsHue":0.209,"shadowsSaturation":0,"highlightsHue":0.191,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},        
        {"blackPoint":0,"fill":0,"brightness":1,"contrast":1,"saturation":1,"temperature":-2000,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1.626,"contrast":1.777,"saturation":1,"temperature":2000,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0.2,"fill":0.606,"brightness":0.588,"contrast":1.916,"saturation":1.838,"temperature":-1332,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1,"contrast":1,"saturation":0,"temperature":0,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1.488,"contrast":1.026,"saturation":1.61,"temperature":0,"splitPoint":-0.6619999999999999,"shadowsHue":0.5,"shadowsSaturation":0.625,"highlightsHue":0.166,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0.181,"fill":0.622,"brightness":0.384,"contrast":2,"saturation":1.638,"temperature":0,"splitPoint":-0.6759999999999999,"shadowsHue":0.209,"shadowsSaturation":0,"highlightsHue":0.191,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},        
        {"blackPoint":0,"fill":0,"brightness":1,"contrast":1,"saturation":1,"temperature":-2000,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1.626,"contrast":1.777,"saturation":1,"temperature":2000,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0.2,"fill":0.606,"brightness":0.588,"contrast":1.916,"saturation":1.838,"temperature":-1332,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1,"contrast":1,"saturation":0,"temperature":0,"splitPoint":0,"shadowsHue":0.5,"shadowsSaturation":0,"highlightsHue":0.5,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0,"fill":0,"brightness":1.488,"contrast":1.026,"saturation":1.61,"temperature":0,"splitPoint":-0.6619999999999999,"shadowsHue":0.5,"shadowsSaturation":0.625,"highlightsHue":0.166,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5},
        {"blackPoint":0.181,"fill":0.622,"brightness":0.384,"contrast":2,"saturation":1.638,"temperature":0,"splitPoint":-0.6759999999999999,"shadowsHue":0.209,"shadowsSaturation":0,"highlightsHue":0.191,"highlightsSaturation":0,"angle":0.5,"fineangle":0.5}     
      ];
      function FastLog2(x) {
        return Math.log(x) / Math.LN2;
      }

      var LOG2_HALF = FastLog2(0.5);

      function FastBias(b, x) {
        return Math.pow(x, FastLog2(b) / LOG2_HALF);
      }

      function FastGain(g, x) {
        return (x < 0.5) ?
          FastBias(1.0 - g, 2.0 * x) * 0.5 :
          1.0 - FastBias(1.0 - g, 2.0 - 2.0 * x) * 0.5;
      }

      function Clamp(x) {
        return (x < 0.0) ? 0.0 : ((x > 1.0) ? 1.0 : x);
      }
      
      function ProcessImageData(data, width, height, params) {
        var saturation = params.saturation;
        var contrast = params.contrast;
        var brightness = params.brightness;
        var blackPoint = params.blackPoint;
        var fill = params.fill;
        var temperature = params.temperature;
        var shadowsHue = params.shadowsHue;
        var shadowsSaturation = params.shadowsSaturation;
        var highlightsHue = params.highlightsHue;
        var highlightsSaturation = params.highlightsSaturation;
        var splitPoint = params.splitPoint;

        var brightness_a, brightness_b;
        var oo255 = 1.0 / 255.0;

        // do some adjustments
        fill *= 0.2;
        brightness = (brightness - 1.0) * 0.75 + 1.0;
        if (brightness < 1.0) {
          brightness_a = brightness;
          brightness_b = 0.0;
        } else {
          brightness_b = brightness - 1.0;
          brightness_a = 1.0 - brightness_b;
        }
        contrast = contrast * 0.5;
        contrast = (contrast - 0.5) * 0.75 + 0.5;
        temperature = (temperature / 2000.0) * 0.1;
        if (temperature > 0.0) temperature *= 2.0;
        splitPoint = ((splitPoint + 1.0) * 0.5);

        // apply to pixels
        var sz = width * height;
        for (var j = 0; j < sz; j++) {
          var r = data[j*4+0] * oo255;
          var g = data[j*4+1] * oo255;
          var b = data[j*4+2] * oo255;
          // convert RGB to YIQ
          // this is a less than ideal colorspace;
          // HSL would probably be better, but more expensive
          var y = 0.299 * r + 0.587 * g + 0.114 * b;
          var i = 0.596 * r - 0.275 * g - 0.321 * b;
          var q = 0.212 * r - 0.523 * g + 0.311 * b;
          i = i + temperature;
          q = q - temperature;
          i = i * saturation;
          q = q * saturation;
          y = (1.0 + blackPoint) * y - blackPoint;
          y = y + fill;
          y = y * brightness_a + brightness_b;
          y = FastGain(contrast, Clamp(y));

          if (y < splitPoint) {
            q = q + (shadowsHue * shadowsSaturation) * (splitPoint - y);
          } else {
            i = i + (highlightsHue * highlightsSaturation) * (y - splitPoint);
          }

          // convert back to RGB for display
          r = y + 0.956 * i + 0.621 * q;
          g = y - 0.272 * i - 0.647 * q;
          b = y - 1.105 * i + 1.702 * q;

          // clamping is "free" as part of the ImageData object
          data[j*4+0] = r * 255.0;
          data[j*4+1] = g * 255.0;
          data[j*4+2] = b * 255.0;
        }
        
        return data;
      }


var _sunSpiderStartDate = new Date();

var width = 400, height = 267;
for (var index = 0; index < paramArray.length; index++) {
   var data = squidImageData;
   data = ProcessImageData(data, width, height, paramArray[index]);
}

var _sunSpiderInterval = new Date() - _sunSpiderStartDate;

WScript.Echo("### TIME:", _sunSpiderInterval, "ms");