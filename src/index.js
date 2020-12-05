(function () {
   const needles = document.getElementsByClassName("clock__needle");
   const HoursNeedle = document.getElementById("HoursNeedle");
   const MinutesNeedle = document.getElementById("MinutesNeedle");
   const SecondsNeedle = document.getElementById("SecondsNeedle");

   const updateClock = () => {
      const nowDate = new Date();
      const hours = nowDate.getHours();
      const minutes = nowDate.getMinutes();
      const seconds = nowDate.getSeconds();

      const totalSeconds = hours * 60 * 12 + minutes * 60 + seconds;
      HoursNeedle.style.setProperty(
         "--rotate-degree",
         (((totalSeconds * 6) / (60 * 12)) % 360) + "deg"
      );
      MinutesNeedle.style.setProperty(
         "--rotate-degree",
         (((totalSeconds * 6) / 60) % 360) + "deg"
      );
      SecondsNeedle.style.setProperty(
         "--rotate-degree",
         ((totalSeconds * 6) % 360) + "deg"
      );
   };

   Array.from(needles).forEach((needle) => {
      needle.style.display = null;
   });

   updateClock();

   setInterval(updateClock, 1000);
})();
