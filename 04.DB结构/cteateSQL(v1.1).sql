

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
'�û����洢�û���Ϣ';



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
'��ĩ�����';

comment on column activity.activity_code is
'���ţ����ǻ������';

comment on column activity.cover is
'�������url,�ǻ�ķ���ͼƬ����url';

comment on column activity.location is
'����е���ϸ��ַ';

comment on column activity.state is
'���״̬��0:�ݸ壬1:�����У�2:��ʷ����ѽ����';

comment on column activity.Insurance is
'�Ƿ����ñ��� 0�������� 1������ Ĭ�ϲ�����';

comment on column activity.ticked is
'����Ʊ��0������ 1���� Ĭ��Ϊ0 ������';

comment on column activity.number is
'�μӻ������';


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
'����������';

comment on column Registration.activity_code is
'�������μӵĻ���';

comment on column Registration.registration_type is
'����������ͳ�Ʋ�ͬ�����ı�������ĩ��ƽ̨��������ƽ̨��΢�ţ�����ȵ�';

comment on column Registration.default_Extend is
'��json��ʽ������չ���ֶ�eg:[{name:''zhangzhenx''},{age:"30"}]';

comment on column Registration.Custom_Extended is
'��ʽͬĬ����չ';


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
'0δʹ�� 1��ʹ�� Ĭ��Ϊ0';

comment on column ticket.is_examine is
'0 ����� 1 ��� Ĭ��Ϊ0�����';

comment on column ticket.buy_time is
'��Ʊ��ʱ��';

comment on column ticket.validity_time is
'Ʊ��Ч������ʱ��';

comment on column ticket."limit" is
'һ�ι����������� -1��ʾ������';

comment on column ticket.Refund is
'0 �����˿� �����ջ�����˿����ã�
1�����˿�';


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
'�����ֵ��';

comment on column sysdictionary.sysdictionary_name is
'�����ֵ���ϸ����';

comment on column sysdictionary.sysdictionary_code is
'�����ֵ���ϸ���';


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
