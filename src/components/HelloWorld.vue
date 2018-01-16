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
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                 show3: true
            }
        },
        // computed : mapState({
        //     count : state => state.count
        // }),
        methods : {
            increment(){
                this.$store.commit('increment')
            },
            decrement(){
                this.$store.commit('decrement')
            },
        }

    }
</script>
