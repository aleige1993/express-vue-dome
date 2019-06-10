<template>
  <div class="hello">
    {{list}}
  </div>
</template>

<script>
import moment from 'moment'
import mentTime from '../utils/mentTime'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:'1'
    }
  },
  async mounted(){
    console.log(moment(mentTime.getCurrentDate()).format('YYYY-MM-DD'))//今天日期
    console.log(moment(mentTime.getCurrentWeek()[0]).format('YYYY-MM-DD'),moment(mentTime.getCurrentWeek()[1]).format('YYYY-MM-DD') )//本周日期
    console.log(moment(mentTime.getCurrentMonth()[0]).format('YYYY-MM-DD'),moment(mentTime.getCurrentMonth()[1]).format('YYYY-MM-DD') )//本月日期
    console.log(moment(mentTime.getCurrentSeason()[0]).format('YYYY-MM-DD'),moment(mentTime.getCurrentSeason()[1]).format('YYYY-MM-DD') )//本季度日期
    console.log(moment(mentTime.getCurrentYear()[0]).format('YYYY-MM-DD'),moment(mentTime.getCurrentYear()[1]).format('YYYY-MM-DD') )//本年日期
    console.log(moment(mentTime.getPreviousYear()[0]).format('YYYY-MM-DD'),moment(mentTime.getPreviousYear()[1]).format('YYYY-MM-DD') )//去年日期
    console.log(moment(mentTime.getPreviousWeek()[0]).format('YYYY-MM-DD'),moment(mentTime.getPreviousWeek()[1]).format('YYYY-MM-DD') )//上周日期
    console.log(moment(mentTime.getPreviousMonth()[0]).format('YYYY-MM-DD'),moment(mentTime.getPreviousMonth()[1]).format('YYYY-MM-DD') )//上月日期
    console.log(moment(mentTime.getPreviousSeason()[0]).format('YYYY-MM-DD'),moment(mentTime.getPreviousSeason()[1]).format('YYYY-MM-DD') )//上季度日期
    console.log(mentTime.getPreviousSeason())//上季度日期
    // console.log(moment(mentTime.getCurrentDate()).format('YYYY-MM-DD'))//今天日期
    // console.log(moment(mentTime.getCurrentDate()).format('YYYY-MM-DD'))//今天日期
    // console.log(moment(mentTime.getCurrentDate()).format('YYYY-MM-DD'))//今天日期
    // console.log(moment(mentTime.getCurrentDate()).format('YYYY-MM-DD'))//今天日期
    // console.log(moment(mentTime.getCurrentDate()).format('YYYY-MM-DD'))//今天日期
    // console.log(moment(mentTime.getCurrentDate()).format('YYYY-MM-DD'))//今天日期

    let res = await this.$http.post('/api/articleList',{id:32});
    this.$data.list =res.body
  }
}
</script>

<style scoped>
</style>
