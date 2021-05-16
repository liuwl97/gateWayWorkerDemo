<?php
return [
    // +----------------------------------------------------------------------
    // | 模板设置
    // +----------------------------------------------------------------------
	


    // //自定义默认主题设置
    // 'theme' =>[
    //     'pc' =>'uxdkj',
    //     'mobile'=>'uxdkj',
    // ],

    'view_replace_str'       => [
        '__WEBURL__'=>'',
        'siteurl'=>'',
        '__ZHN__'=>'/public/static/zhncom', ///自定义模板常量
    ],


    //分页配置
    'paginate'               => [
        'type'      => 'Wanweb',
        'var_page'  => 'page',
        'list_rows' => 15,
        'pagesize' => 2,
    ],

    // //搜索框的
    // 'paginate2'               => [
    //     'type'      => 'WanSearchweb',
    //     'var_page'  => 'page',
    //     'list_rows' => 15,
    // ],
];