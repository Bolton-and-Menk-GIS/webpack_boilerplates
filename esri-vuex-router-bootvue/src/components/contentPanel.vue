<template>
    <b-card no-body bg-variant="light" class="nav-panel">
        <div class="header">Temperature</div>
        <div class="content">
            <div class="pre">{{ station }}</div><div class="app">{{temp | round}}&degF</div>
        </div>
        <!--<b-input-group><b-input-group-prepend is-text>{{station}}</b-input-group-prepend><b-input-group-append is-text>{{temp | round}}</b-input-group-append></b-input-group>-->
    </b-card>
</template>

<script>
import {mapState} from 'vuex';
  export default {
    name: 'content-panel',
    computed: mapState({
      station: state => state.station,
      temp: state=> state.temp
    }),
    filters:{
      round: function(val){
        return val?val.toFixed(1):'N/A'
      }
    }
  }
</script>

<style>
    .header{
        border: 1px solid #ced4da;
    }

    .content{
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        justify-content: center;
        padding: 3px 0 0 0;
        width: 100%;
    }

    .content .pre{
        display: -webkit-box;
        display: -ms-flexbox;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: .375rem .75rem;
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        text-align: center;
        white-space: nowrap;
        background-color: #e9ecef;
        border: 1px solid #ced4da;
        border-top-left-radius: .25rem;
        border-bottom-left-radius: .25rem;
    }
    .content .app{
        display: -webkit-box;
        display: -ms-flexbox;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: .375rem .75rem;
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        text-align: center;
        white-space: nowrap;
        background-color: white;
        border: 1px solid #ced4da;
        border-top-right-radius: .25rem;
        border-bottom-right-radius: .25rem;
    }

    .nav-panel .header{
        font-weight: bold;
        background-color: #c8e9e9;
        padding: 5px;
        border-radius: 4px;
    }

    .nav-panel{
        position: absolute;
        background-color: white;
        border-radius: 5px;
        bottom: 25px;
        /*bottom: 20px;*/
        z-index: 1000;
        right: 15px;
        padding: 5px;
    }

</style>