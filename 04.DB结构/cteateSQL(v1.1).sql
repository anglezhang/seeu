

/*==============================================================*/
/* Table: zmj_org                                               */
/*==============================================================*/
create table zmj_org (
   id                   VARCHAR(36)          not null,
   org_name             VARCHAR(200)         null,
   parentid             VARCHAR(36)          null,
   orgtype              VARCHAR(50)          null,
   orglevel             VARCHAR(1)           null,
   state                VARCHAR(1)           null,
   description          VARCHAR(1000)        null,
   pc_image             VARCHAR(200)         null,
   attestation          VARCHAR(50)          null,
   org_qq               VARCHAR(200)         null,
   org_weixin           VARCHAR(200)         null,
   province             VARCHAR(200)         null,
   city                 VARCHAR(50)          null,
   area                 VARCHAR(50)          null,
   remark               VARCHAR(50)          null,
   create_time          TIMESTAMP            null,
   modify_time          TIMESTAMP            null,
   constraint PK_ZMJ_ORG primary key (id)
);


/*==============================================================*/
/* Table: zmj_user                                              */
/*==============================================================*/
create table  zmj_user (
   id                   VARCHAR(36)          not null,
   loginaccount         VARCHAR(50)          null,
   loginpassword        VARCHAR(50)          null,
   nikename             VARCHAR(50)          null,
   pc_image             VARCHAR(200)         null,
   usertype             VARCHAR(1)           null,
   real_name            VARCHAR(50)          null,
   idnumber             VARCHAR(50)          null,
   mail                 VARCHAR(50)          null,
   gender               VARCHAR(1)           null,
   state                VARCHAR(1)           null,
   orgid                VARCHAR(36)          null,
   province             VARCHAR(50)          null,
   city                 VARCHAR(50)          null,
   area                 VARCHAR(50)          null,
   create_time          TIMESTAMP            null,
   modify_time          TIMESTAMP            null,
   constraint PK_ZMJ_USER primary key (id)
);

comment on table zmj_user is
'用户表，存储用户信息';



/*==============================================================*/
/* Table: activity                                              */
/*==============================================================*/
create table activity (
   activity_code        varchar(36)          not null,
   title                varchar(200)         null,
   type                 int                  null,
   Introduction         varchar(500)         null,
   cover                varchar(200)         null,
   province             varchar(200)         null,
   city                 varchar(200)         null,
   area                 varchar(200)         null,
   location             varchar(500)         null,
   begin_time           timestamp            null,
   end_time             timestamp            null,
   state                int                  null,
   create_time          timestamp            null,
   modify_time          timestamp            null,
   Insurance            int                  null default '0',
   ticked               int                  null default '0',
   number               INT8                 null,
   cost                 NUMERIC(8,6)         null,
   pay_type             varchar(10)          null,
   constraint PK_ACTIVITY primary key (activity_code)
);

comment on table activity is
'周末见活动表';

comment on column activity.activity_code is
'活动编号，即是活动的主键';

comment on column activity.cover is
'活动的连接url,是活动的封面图片保存url';

comment on column activity.location is
'活动举行的详细地址';

comment on column activity.state is
'活动的状态：0:草稿，1:进行中，2:历史活动，已结束活动';

comment on column activity.Insurance is
'是否启用保险 0：不启用 1：启用 默认不启用';

comment on column activity.ticked is
'启用票务：0不启用 1启用 默认为0 不启用';

comment on column activity.number is
'参加活动的人数';


/*==============================================================*/
/* Table: Registration                                          */
/*==============================================================*/
create table Registration (
   Registration_id      varchar(36)          not null,
   activity_code        varchar(36)          null,
   name                 varchar(200)         null,
   mobile               varchar(50)          null,
   begin_time           timestamp            null,
   end_time             timestamp            null,
   registration_type    varchar(200)         null,
   default_Extend       varchar(2000)        null,
   Custom_Extended      varchar(2000)        null,
   mail                 varchar(50)          null,
   mark                 varchar(200)         null,
   constraint PK_REGISTRATION primary key (Registration_id)
);

comment on column Registration.Registration_id is
'报名表主键';

comment on column Registration.activity_code is
'报名所参加的活动编号';

comment on column Registration.registration_type is
'报名渠道，统计不同渠道的报名，周末见平台，第三方平台，微信，豆瓣等等';

comment on column Registration.default_Extend is
'用json格式保存扩展的字段eg:[{name:''zhangzhenx''},{age:"30"}]';

comment on column Registration.Custom_Extended is
'格式同默认扩展';


/*==============================================================*/
/* Table: ticket                                                */
/*==============================================================*/
create table ticket (
   ticket_id            varchar(36)          not null,
   activity_code        varchar(36)          null,
   price                NUMERIC(8,6)         null,
   state                int                  null default '0',
   Explain              varchar(200)         null,
   is_examine           int                  null default '0',
   buy_time             timestamp            null,
   validity_time        timestamp            null,
   "limit"              int                  null,
   Refund               int                  null,
   Refund_mark          varchar(200)         null,
   constraint PK_TICKET primary key (ticket_id)
);

comment on column ticket.state is
'0未使用 1已使用 默认为0';

comment on column ticket.is_examine is
'0 不审核 1 审核 默认为0不审核';

comment on column ticket.buy_time is
'买票的时间';

comment on column ticket.validity_time is
'票有效的最终时间';

comment on column ticket."limit" is
'一次购买的最多张数 -1表示不限制';

comment on column ticket.Refund is
'0 可以退款 （按照活动方的退款设置）
1不可退款';


/*==============================================================*/
/* Table: sysdictionary                                         */
/*==============================================================*/
create table sysdictionary (
   sysdictionary_id     varchar(36)          not null,
   sysdictionary_name   varchar(50)          null,
   sysdictionary_code   varchar(20)          null,
   constraint PK_SYSDICTIONARY primary key (sysdictionary_id)
);

comment on table sysdictionary is
'数据字典表';

comment on column sysdictionary.sysdictionary_name is
'数据字典明细名称';

comment on column sysdictionary.sysdictionary_code is
'数据字典明细编号';


/*==============================================================*/
/* Table: sysdictionary_mx                                      */
/*==============================================================*/
create table sysdictionary_mx (
   sysdictionary_mxid   varchar(36)          not null,
   sysdictionarymx_code varchar(20)          null,
   sysdictionarymx_name varchar(50)          null,
   Explain              varchar(200)         null,
   constraint PK_SYSDICTIONARY_MX primary key (sysdictionary_mxid)
);
