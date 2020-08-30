<template>
  <div class="hello">
    <div>
        <h1>{{$store.state.count}}</h1>
        <el-button @click="increment"> + </el-button>
        <el-button @click="decrement"> - </el-button>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'Counter',
        data () {
            return {
                 show3: true
            }
        },
        computed : mapState({
            count1 : state => state.counts
        }),
        methods : {
            increment(){
                this.$store.commit('increment');
              console.log(count1());
            },
            decrement(){
                this.$store.commit('decrement'); 
            
            },
        }

    }
</script>
