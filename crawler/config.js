const cookie = '_uab_collina=150580447781667809243921; ki1e_2132_saltkey=ocoovAza; ki1e_2132_lastvisit=1515978640; ki1e_2132__refer=%252Fhome.php%253Fmod%253Dspacecp%2526ac%253Dplugin%2526id%253Dqqconnect%253Aspacecp; ki1e_2132_pc_size_c=0; ki1e_2132_con_request_uri=http%3A%2F%2Fwww.zuanke8.com%2Fconnect.php%3Fmod%3Dlogin%26op%3Dcallback%26referer%3Dhttp%253A%252F%252Fwww.zuanke8.com%252Fthread-4650506-1-1.html; _umdata=0823A424438F76AB522AF83C1F2C954E61017394B6CBEB02EF6C3EA63F553C51CF099A1965ECB628CD43AD3E795C914C237B2DBAA01B0122CD86B3A85893984C; ki1e_2132_auth=2de0d%2BXzXQnOFEAM0OVDSf3SW7g8YHbmQqp6BQ5ZNLiud1ykCzBcrGCj%2B7VvyJTpk1ofhB7Q5h36lZCDwfTYqrEBjJk; ki1e_2132_lip=210.13.101.42%2C1515984531; ki1e_2132_connect_last_report_time=2018-01-15; ki1e_2132_atarget=1; ki1e_2132_forum_lastvisit=D_19_1515984839; Hm_lvt_da6569f688ba2c32429af00afd9eb8a1=1515980468,1515981535,1515984505,1515992824; Hm_lpvt_da6569f688ba2c32429af00afd9eb8a1=1515993355; ki1e_2132_smile=1D1; ki1e_2132_lastcheckfeed=368220%7C1515993356; ki1e_2132_lastact=1515994044%09forum.php%09viewthread; ki1e_2132_connect_is_bind=1; ki1e_2132_viewid=tid_4646334; ki1e_2132_ulastactivity=1515994044%7C0'

module.exports = {
    browserMsg: {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36",
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    cookie,
    indexUrl: 'https://www.zwdu.com', 
    env: 'development', //环境名称
    port: 3001,         //服务端口号
    mongodb_url: 'mongodb://localhost:27017/node-book',    //数据库地址
}