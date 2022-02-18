<script>
</script>

<style lang="scss" module="tailwind">
</style>

<template>
  <div class="wrapper">
    <div class="topbar">
      <h1
        class="
          text-center text-3xl text-white
          leading-normal
          font-semibold
          uppercase
        "
      >
        Notes
      </h1>
    </div>
    <div class="flex flex-col md:flex-row h-[calc(100%-3rem)] w-full py-3">
      <div class="w-full md:w-1/3 md:h-full md:container">
        <form class="p-4 md:h-full" action="" @submit.prevent="false">
          <input
            type="text"
            class="w-full px-3 py-2 rounded-t-md text-base"
            placeholder="Enter Title"
          />
          <div class="relative h-1/2 md:h-1/2 rounded-b-md bg-white">
            <textarea
              class="w-full py-2 px-3 resize-none h-5/6 text-base text-slate-600"
              placeholder="Note Description"
            ></textarea>
            <div class="color-palettes">
              <span class="bg-red-500 border-red-500"></span>
              <span class="bg-green-500 border-green-500"></span>
              <span class="bg-blue-500 border-blue-500"></span>
              <span class="bg-yellow-500 border-yellow-500"></span>
              <span class="bg-orange-500 border-orange-500"></span>
              <span class="bg-slate-300 border-slate-300"></span>
            </div>
            <button
              type="submit"
              class="
                absolute
                bg-gradient-to-tl
                from-purple-500
                to-sky-500
                hover:from-purple-400 hover:to-sky-600 hover:text-slate-50
                text-white
                px-4
                py-2
                rounded-full
                right-4
                bottom-4
              "
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
      <div class="w-full md:w-2/3 h-full">
        <div class="notes">
          <div class="note h-36 bg-slate-50 rounded shadow"></div>
          <div class="note h-36 bg-slate-50 rounded shadow"></div>
          <div class="note h-36 bg-slate-50 rounded shadow"></div>
        </div>
      </div>
    </div>
  </div>
</template>